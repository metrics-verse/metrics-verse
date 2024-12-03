import { searchFilesForImport } from "../finders/findImports";
import {
  countNamedImports,
  TotalNamedImports,
} from "../utils/countNamedImports";

export async function getComponentsUsage(
  packageName: string,
  projectDir: string = "."
): Promise<TotalNamedImports> {
  try {
    const imports = await searchFilesForImport(projectDir, packageName);
    const componentsByImport = countNamedImports(imports);
    return componentsByImport;
  } catch (error: unknown) {
    throw new Error("Unavailable to execute component usage successfully", {
      cause: error,
    });
  }
}