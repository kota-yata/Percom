"use strict";

//Combination : Referenced from https://qiita.com/41semicolon/items/55e78a6100d9954676ff
//Permutation : Referenced from https://tech-blog.s-yoshiki.com/entry/144

function rec(n, k) {
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
 * @param {array} array - Target array
 * @param {number} num - Number to combine
 * @return {array} Return all combinations
 * @example
 * const result = com([1,2,3],2);
 * //result = [ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]
 */
function com(array, num) {
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

/**
 * @param {array} array - Target array
 * @param {number} num - Number to combine as permutations
 * @return {array} Return all permutations
 * @example
 * const result = per([1, 2, 3], 2);
 * //result = [ [ 1, 2 ], [ 1, 3 ], [ 2, 1 ], [ 2, 3 ], [ 3, 1 ], [ 3, 2 ] ]
 */
const per = (array, num) => {
    const result = [];
    if (array.length < num) {
        return [];
    }
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

module.exports = {
    per,
    com
};