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
};

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
  if (array.length < num) throw new Error('Number of elements of array must be greater than number to choose');
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
};

const countCom = (n, r) => {
  if (r > n) throw new Error('Number of elements must be greater than number to choose');
  if (n === r) return 1;
  if (r === 1) return n;
  let dr = r;
  if (n - r < r) {
    dr = n - r;
  }
  let dividend = 1;
  for (let dd = n; dd > n - dr; dd--) {
    dividend *= dd;
  }
  let divisor = 1;
  for (let ds = dr; ds > 1; ds--) {
    divisor *= ds;
  }
  const answer = dividend / divisor;
  return answer;
};

module.exports = {
  com,
  countCom
};
