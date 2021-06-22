## 计数排序
计数排序是一个*非基于比较*的排序算法。优势在于在对**一定范围内的整数**（范围过大，或者有小数不适用）排序时，复杂度为 Ο(n+k)（其中 k 是整数的范围），快于任何比较排序算法。当 O(k) > O(n*log(n)) 时其效率反而不如基于比较的排序。


### 实现代码
1. 非稳定排序
```js
function countSort (nums) {
  // 1. 获取最大值和最小值的差值
  let max = nums[0], min = nums[0]
  for (let val of nums) {
    max = val > max ? val : max
    min = val < min ? val : min
  }
  let d = max - min

  // 2. 声明数组，数组长度为最大元素 + 1（数组下标 0），并填充默认值 0
  const countArray = new Array(d + 1).fill(0)

  // 3. 遍历输入数组，统计元素
  for (let i = 0; i < nums.length; i++) {
    countArray[nums[i] - min] += 1
  }

  // 4. 输出排序数组
  const sortedArray = []
  for (let i = 0; i < countArray.length; i++) {
    for (let j = 0; j < countArray[i]; j++) {
      sortedArray.push(min + i)
    }
  }
  return sortedArray
}
```

2. 稳定排序
+ 时间复杂度：O(3N + M)，N 为输入数组长度，M 为统计数组 countArray 长度
+ 空间复杂度：O(N + M + 5)，N 为结果数组占用空间，M 为统计数组占用空间，其余变量占用常量空间

```js
function countSort (nums) {
  // 1. 获取最大值和最小值的差值
  let max = nums[0], min = nums[0]
  for (let val of nums) {
    max = val > max ? val : max
    min = val < min ? val : min
  }
  let d = max - min

  // 2. 声明数组，数组长度为最大元素 + 1（数组下标 0），并填充默认值 0
  const countArray = new Array(d + 1).fill(0)

  // 3. 遍历输入数组，统计元素
  for (let i = 0; i < nums.length; i++) {
    countArray[nums[i] - min] += 1
  }

  // 4. 统计数组变形，后面的元素等于前面的元素之和
  let sum = 0
  for (let i = 0; i < countArray.length; i++) {
    sum += countArray[i]
    countArray[i] = sum
  }

  // 5. 倒序遍历原始数列，从统计数组找到正确位置，输出到结果数组
  let sortedArray = []
  for (let i = nums.length - 1; i >= 0; i--) {
    sortedArray[countArray[nums[i] - min] - 1] = nums[i]
    countArray[nums[i] - min] -= 1
  }
  return sortedArray
}
```
