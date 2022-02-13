# Percom
[![npm version](https://badge.fury.io/js/percom.svg)](https://badge.fury.io/js/percom) [![Build Status](https://travis-ci.org/kota-yata/Percom.svg?branch=master)](https://travis-ci.org/kota-yata/Percom) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/percom.png)](https://nodei.co/npm/percom/)

npm package listing and calculating combination and permutation

# Usage

```
$ npm i percom
```

  ## 1. Listing every possible combinatioins (組み合わせ)
  ```JavaScript
    import percom from "percom";
  
    percom.com(array,num); 
    //array => Target array (対象の配列)
    //num => Number of elements in a combination (組み合わせの数)
  ```
  #### Example
  ```JavaScript
    const array = ["A","B","C"];
    
    const result1 = percom.com(array, 2);
    //result1 = [ [ "A", "B" ], [ "A, "C ], [ "B", "C" ] ]
    
    const result2 = percom.com(array, 1);
    //result2 = [ [ "A" ], [ "B" ], [ "C" ] ]
  ```

  ### Count the number of possible combination (組み合わせの数を数える)
  ```JavaScript
    percom.countCom(n, r);
    //n => Number of elements in an array (要素数)
    //r => Number of elements in a combination (選ぶ要素の数)
  ```
  #### Example
  ```JavaScript
    percom.countCom(8, 3);
    // => 56
  ```
  
  ## 2. Listing every possible permutaiton (順列)
  ```JavaScript
    percom.per(array,num);
    //array => Target array (対象の配列)
    //num => Number of elements in a permutation (一つ一つの順列の要素数)
  ```
 
  #### Example
  ```JavaScript
    const array = ["A","B","C"];
    
    const result1 = percom.per(array, 2);
    //result1 = [ [ 'A', 'B' ], [ 'A', 'C' ], [ 'B', 'A' ], [ 'B', 'C' ], [ 'C', 'A' ], [ 'C', 'B' ] ]
    
    const result2 = percom.per(array, 1);
    //result2 = [ [ "A" ], [ "B" ], [ "C" ] ]
  ```
  ### Count the number of possible permutation (順列の数を数える)
  ```JavaScript
    percom.countPer(n, r);
    //n => Number of elements in an array (要素数)
    //r => Number of elements in a permutation (一つ一つの順列の要素数)
  ```
  #### Example
  ```JavaScript
    percom.countPer(8, 3);
    // => 336
  ```

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
  Kota Yatagai (https://kota_yata.com)
