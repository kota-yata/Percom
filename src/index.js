"use strict";

//Combination : Referenced from https://qiita.com/41semicolon/items/55e78a6100d9954676ff
//Permutation : Referenced from https://tech-blog.s-yoshiki.com/entry/144

const permutation = require("./permutation.js").per;
const combination = require("./combination.js").com;

module.exports = {
    per: permutation,
    com: combination
};