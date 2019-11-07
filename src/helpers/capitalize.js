export const capitalize = str => {
  const parts = str
    .split('_')
    .map(s => s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase())
  return parts.join('')
}
