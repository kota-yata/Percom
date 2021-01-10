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
  const result = [];
  if (array.length < num) return [];
  if (num === 1) {
    for (let i = 0; i < array.length; i++) {
      result[i] = [array[i]];
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      const parts = array.slice(0);
      parts.splice(i, 1)[0];
      const row = per(parts, num - 1);
      for (let j = 0; j < row.length; j++) {
        result.push([array[i]].concat(row[j]));
      }
    }
  }
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
