/**
* Combination
* @param {array} array - Target array
* @param {number} num - Number to combine
* @return {array} Return all combinations
* @example
* const result = com([1,2,3],2);
* //result = [ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]
*/
const calcCom = (array, num, current = [], result = []) => {
  if (num <= 0) {
    result.push(current);
    return result;
  }
  const thisArray = [...array]; // Copy only values in order to execute mutable method shift() safely
  const nextNum = num - 1;
  while (thisArray.length >= num) {
    const thisCurrent = [...current, thisArray[0]];
    thisArray.shift();
    calcCom(thisArray, nextNum, thisCurrent, result);
  }
  return result;
};

const com = (array, num) => {
  if (array.length < num) throw new Error('Number of elements of array must be greater than number to choose');
  const answer = calcCom(array, num);
  return answer;
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
