const rec = (n, k) => {
  if (k === 0) return [[]];
  const result = [];
  for (let i = 0; i < n; i++) {
      if (n - i - 1 < k - 1) continue;
      rec(n - i - 1, k - 1).forEach((js) => {
          result.push([i, ...js.map((j) => j + i + 1)]);
      });
  }
  return result;
}

/**
* Combination
* @param {array} array - Target array
* @param {number} num - Number to combine
* @return {array} Return all combinations
* @example
* const result = com([1,2,3],2);
* //result = [ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]
*/
const com = (array, num) => {
  const last = rec(array.length, num);
  const result = [];
  for (let ite = 0; ite < last.length; ite++) {
      const answer = [];
      for (let fin = 0; fin < last[ite].length; fin++) {
          answer.push(array[last[ite][fin]]);
      }
      result.push(answer);
  }
  return result;
}

module.exports = {
  com
}
