# Percom
[![Build Status](https://travis-ci.org/kota-yata/Percom.svg?branch=master)](https://travis-ci.org/kota-yata/Percom)

A calculation npm module that is to simplify the calculation of permutations and combinations

# Usage

```
$ npm i percom
```

 ## 1. Combinatioins (組み合わせ)
 ```JavaScript
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
  
# License
  percom is under [MIT license](https://opensource.org/licenses/mit-license.php)
  
# Author
  Kota Yatagai (https://twitter.com/AlGoRiT94422608)
