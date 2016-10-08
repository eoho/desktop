export function compare<T>(x: T, y: T) {
  if (x < y) { return -1 }
  if (x > y) { return 1 }

  return 0
}

export function caseInsenstiveCompare(x: string, y: string) {
  return compare(x.toLowerCase(), y.toLocaleLowerCase())
}
