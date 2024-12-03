export function cleanUpText(text = "") {
  const processedText = text
    .replaceAll(" ", "")
    .replaceAll("\n", "")
    .replace(/,\s*$/, "");
  return processedText;
}
