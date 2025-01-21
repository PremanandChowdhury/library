function maxConsecutiveOnes(arr, n) {
  let count = 0,
    maxCount = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      count = 0;
    } else {
      count++;
      maxCount = Math.max(maxCount, count);
    }
  }
  return maxCount;
}

const result = maxConsecutiveOnes([1, 1, 0, 1, 1, 1], 6); // 3
console.log(result);

const result2 = maxConsecutiveOnes([0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], 11); // 1
console.log(result2);
