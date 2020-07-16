## [拿硬币](https://leetcode-cn.com/problems/na-ying-bi/)

```js
/**
 * @param {number[]} coins
 * @return {number}
 */
const minCount = function(coins) {
  let sum = 0
  for(let i = 0; i < coins.length; i++) {
    sum += Math.ceil(coins[i] / 2)
  }
  return sum
};
```