const numbers: Array<number> = [1, 2, 3];
numbers.push(2);

function concatArray<T>(array1: T[], array2: T[]): T[] {
  return array1.concat(array2);
}

const case1 = concatArray([1, 2], [3, 4]);
const case2 = concatArray(['a', 'b'], ['c', 'd']);

 