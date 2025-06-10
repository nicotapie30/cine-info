export const generateCleanTitle = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/gi, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}
