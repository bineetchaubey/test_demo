/**
 * sort array by key
 * @param inputArray
 * @param key
 * @returns
 */
export function sortByKey<T>(inputArray: T[], key: keyof T): T[] {
  const sortedArray: T[] = inputArray.sort(
    (firstItem: T, secondItem: T): number => {
      const firstItemValue = firstItem[key];
      const secondItemValue = secondItem[key];

      return (firstItemValue as any).localeCompare(secondItemValue as any);
    }
  );

  return sortedArray;
}
