export async function parsePdf(buffer) {
  if (!buffer) return "";

  // Dynamically import pdf-parse at runtime
  const pdfParseModule = await import("pdf-parse");

  // Handle ALL export shapes
  const pdfParse =
    typeof pdfParseModule.default === "function"
      ? pdfParseModule.default
      : typeof pdfParseModule === "function"
      ? pdfParseModule
      : null;

  if (!pdfParse) {
    throw new Error("pdf-parse could not be loaded correctly");
  }

  const data = await pdfParse(buffer);
  return data.text || "";
}

