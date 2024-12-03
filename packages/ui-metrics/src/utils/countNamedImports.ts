import { FoundImportsData } from "../types/importData.types";

export interface TotalNamedImports {
  [key: string]: number;
}

// Helper function to count imports
const incrementImportCount = (
  importCounts: TotalNamedImports,
  importName: string,
) => {
  if (importName) {
    importCounts[importName] = (importCounts[importName] || 0) + 1;
  }
};

// Assuming `imports` is the array of import objects you've retrieved
export function countNamedImports(imports: FoundImportsData[]) {
  const importCounts: TotalNamedImports = {};

  imports.forEach((importObj: FoundImportsData) => {
    const { namedImports, defaultImport } = importObj;
    // Increment count for defaultImport if it exists
    incrementImportCount(importCounts, defaultImport);

    // Increment counts for each named import
    namedImports.forEach((namedImport) =>
      incrementImportCount(importCounts, namedImport),
    );
  });

  // Sort component imports in descending order.
  return Object.entries(importCounts)
    .sort((a, b) => b[1] - a[1])
    .reduce((acc: TotalNamedImports, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
}
