## II. 左旋转字符串(https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/)


```js
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {  
  return s.substring(n)+s.substring(0,n)
}
```
```js
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {  
  let str=''
  for(let i=n;i<s.length;++i) {
    str+=s[i]
  }
  for(let i=0;i<n;++i) {
    str+=s[i]
  }
  return str
}
```