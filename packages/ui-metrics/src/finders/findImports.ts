import * as fs from "node:fs";
import path from "node:path";
import { glob } from "glob";
import { fileURLToPath } from "node:url";
import { cleanUpText } from "../utils/cleanUpNameImport";
import { FoundImportsData } from "../types/importData.types";

// Utility to convert __dirname in ES module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function searchFilesForImport(
  directory: string,
  packageName: string
): Promise<FoundImportsData[]> {
  const pattern = path.posix.join(
    directory.replace(/\\/g, "/"),
    "**",
    "*.{js,ts,tsx}"
  ); // Use POSIX-style paths

  try {
    const files = await glob(pattern);
    const promisesProcessed: Promise<FoundImportsData[] | null>[] = [];
    files.forEach((file) => {
      promisesProcessed.push(
        new Promise<FoundImportsData[] | null>((resolve) => {
          fs.readFile(file, "utf8", (err, content) => {
            if (err) {
              console.error("Error reading file:", err);
              return resolve(null);
            }

            /**
             * Regex to extract the import items having the packageName as prefix.
             * Supported expressions:
             * - import Test from "{packageName}"
             * - import Test from "{packageName}/additional/path"
             * - import { Test } from "{packageName}"
             * - import { Person as Individual } from "{packageName}"
             * - import { Person as Individual, Test, Bag as Backpack } from "{packageName}"
             **/
            const regex = new RegExp(
              `import\\s+(?:\\{([^}]*)}\\s+|\\*\\s+as\\s+(\\w+)\\s+|([^}\\s]+)\\s+)?from\\s+['"\`](${packageName}(\\/[^'"\`]*)?)['"\`]`,
              "g" // 'g' for global search
            );
            let matches: FoundImportsData[] = [];
            let match;
            // Considering multiple imports of the same package per file
            while ((match = regex.exec(content)) !== null) {
              const namedImports = match[1] || "";
              const namespaceImport = match[2] || "";
              const defaultImport = match[3] || "";
              const modulePath = match[4] || "";

              // Generate breakdown of components import by the file
              matches.push({
                file,
                defaultImport,
                namedImports: cleanUpText(namedImports)
                  .split(",")
                  .map((item) => item.trim())
                  .filter(Boolean), // Clean and split imports
                namespaceImport,
                modulePath,
              });
            }

            if (matches.length > 0) {
              return resolve(matches);
            } else {
              return resolve(null);
            }
          });
        })
      );
    });
    return await Promise.all(promisesProcessed).then((results = []) => {
      // Remove empty files
      const foundImports = results.filter((result) => result !== null);
      // Merge components imported when it's imported the same package multiple times
      return Promise.resolve(foundImports.flat());
    });
  } catch (err) {
    console.error("Error finding files:", err);
    return Promise.reject(err);
  }
}
