## [猜数字](https://leetcode-cn.com/problems/guess-numbers/)

```js
/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
const game = function(guess, answer) {
  let count = 0
  for(let i = 0;i < 3; i++) {
    if(guess[i] === answer[i]) {
      count++
    }
  }
  return count
};
```