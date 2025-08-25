// Stubbed image placeholders map used when generation hasn't run.
// Generated file (scripts/generate-image-placeholders.js) will overwrite this with real values.
export const imagePlaceholders: Record<string, string> = {}

export const getImagePlaceholder = (src: string): string | undefined => {
  return imagePlaceholders[src]
}
