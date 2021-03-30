'use strict';

//Combination : Referenced from https://qiita.com/41semicolon/items/55e78a6100d9954676ff
const per = require('./permutation.js');
const com = require('./combination.js');
const permutation = per.per;
const countPer = per.countPer;
const combination = com.com;
const countCom = com.countCom;

module.exports = {
  per: permutation,
  countPer: countPer,
  com: combination,
  countCom: countCom
};
