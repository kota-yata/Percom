'use strict';

const filterArray = (array, index) => {
  const newArray = array.filter((_, i) => i !== index);
  return newArray;
};

const calcPer = (array, num, current = [], result = []) => {
  if (current.length >= num) return null;
  let tempCurrent = current.slice(0, current.length);
  for (let i = 0; i < array.length; i++) {
    tempCurrent.push(array[i]);
    const slicedArray = filterArray(array, i);
    const returned = calcPer(slicedArray, num, tempCurrent, result);
    if (returned === null) {
      result.push(tempCurrent);
    }
    tempCurrent = current.slice(0, current.length);
  }
  return result;
};

/**
 * Permutation
 * @param {array} array - Target array
 * @param {number} num - Number to combine as permutations
 * @return {array} Return all permutations
 * @example
 * const result = per([1, 2, 3], 2);
 * //result = [ [ 1, 2 ], [ 1, 3 ], [ 2, 1 ], [ 2, 3 ], [ 3, 1 ], [ 3, 2 ] ]
 */
const per = (array, num) => {
  if (array.length < num) throw new Error('Number of elements of array must be greater than number to choose');
  const result = calcPer(array, num);
  return result;
};

const countPer = (n, r) => {
  if (n < r) throw new Error('Number of elements must be greater than number to choose');
  if (r === 1) return n;
  let answer = 1;
  for (let i = n; i > n - r; i--) {
    answer *= i;
  }
  return answer;
};

module.exports = {
  per,
  countPer
};
