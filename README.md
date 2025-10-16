# Percom
[![npm version](https://badge.fury.io/js/percom.svg)](https://badge.fury.io/js/percom) [![Build Status](https://travis-ci.org/kota-yata/Percom.svg?branch=master)](https://travis-ci.org/kota-yata/Percom) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/percom.png)](https://nodei.co/npm/percom/)

Utility for listing and counting combinations and permutations.

# Install

```
$ npm i percom
```

# Usage

## 1. List all combinations

```javascript
import percom from "percom";

percom.com(array, r);
// array: source array
// r: size of each combination
```

Example

```javascript
const array = ["A", "B", "C"];

const result1 = percom.com(array, 2);
// result1 = [["A", "B"], ["A", "C"], ["B", "C"]]

const result2 = percom.com(array, 1);
// result2 = [["A"], ["B"], ["C"]]
```

### Count combinations

```javascript
percom.countCom(n, r);
// n: number of elements
// r: size of each combination
```

Example

```javascript
percom.countCom(8, 3); // => 56
```

## 2. List all permutations

```javascript
percom.per(array, r);
// array: source array
// r: size of each permutation
```

Example

```javascript
const array = ["A", "B", "C"];

const result1 = percom.per(array, 2);
// result1 = [["A", "B"], ["A", "C"], ["B", "A"], ["B", "C"], ["C", "A"], ["C", "B"]]

const result2 = percom.per(array, 1);
// result2 = [["A"], ["B"], ["C"]]
```

### Count permutations

```javascript
percom.countPer(n, r);
// n: number of elements
// r: size of each permutation
```

Example

```javascript
percom.countPer(8, 3); // => 336
```

# License
percom is available under the [MIT License](https://opensource.org/licenses/mit-license.php).
  
# Development
```javascript
yarn install

// before creating a PR
yarn mocha
```
Since lint-staged and husky are set up, your code will be formatted before commit.

# Developer
Kota Yatagai (https://kota_yata.com)
