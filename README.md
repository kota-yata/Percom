# Percom
[![npm version](https://badge.fury.io/js/percom.svg)](https://badge.fury.io/js/percom) [![Build Status](https://travis-ci.org/kota-yata/Percom.svg?branch=master)](https://travis-ci.org/kota-yata/Percom) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/percom.png)](https://nodei.co/npm/percom/)

Combination and Permutation library

# Usage

```
$ npm i percom
```

  ## 1. Combinatioins (組み合わせ)
  ```JavaScript
    const percom = require("percom");
  
    percom.com(array,num); 
    //array => Target array (対象の配列)
    //num => Number to combine as combinations (組み合わせの数)
  ```
  #### Example
  ```JavaScript
    const array = ["A","B","C"];
    
    const result1 = percom.com(array, 2);
    //result1 = [ [ "A", "B" ], [ "A, "C ], [ "B", "C" ] ]
    
    const result2 = percom.com(array, 1);
    //result2 = [ [ "A" ], [ "B" ], [ "C" ] ]
  ```

  ### Count the number of combination elements (組み合わせの数を数える)
  ```JavaScript
    percom.countCom(n, r);
    //n => Number of elements : int (要素数)
    //r => Number to choose : int (選ぶ要素の数)
  ```
  #### Example
  ```JavaScript
    percom.countCom(8, 3);
    // => 56
  ```
  
  ## 2. Permutations (順列)
  ```JavaScript
    percom.per(array,num);
    //array => Target array (対象の配列)
    //num => Number to combine as permutations (一つ一つの順列の要素数)
  ```
 
  #### Example
  ```JavaScript
    const array = ["A","B","C"];
    
    const result1 = percom.per(array, 2);
    //result1 = [ [ 'A', 'B' ], [ 'A', 'C' ], [ 'B', 'A' ], [ 'B', 'C' ], [ 'C', 'A' ], [ 'C', 'B' ] ]
    
    const result2 = percom.per(array, 1);
    //result2 = [ [ "A" ], [ "B" ], [ "C" ] ]
  ```
  ### Count the number of permutation elements (順列の数を数える)
  ```JavaScript
    percom.countPer(n, r);
    //n => Number of elements : int (要素数)
    //r => Number to choose : int (選ぶ要素の数)
  ```
  #### Example
  ```JavaScript
    percom.countPer(8, 3);
    // => 336
  ```


# Test Coverage
![image](https://user-images.githubusercontent.com/51294895/104125816-91bcb880-539c-11eb-9f87-71df37c3644a.png)

Both uncovered lines are returning of recursive function 

# License
  percom is under [MIT license](https://opensource.org/licenses/mit-license.php)
  
# Development
```javascript
yarn install

// before create PR
yarn mocha
```
Since lint-staged and husky are set up, your code will be formatted before commit.

# Developer
  Kota Yatagai (https://twitter.com/kota_yata)
