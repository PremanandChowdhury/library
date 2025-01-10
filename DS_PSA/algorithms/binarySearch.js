// Iterative method
const binarySearchIterative = (arr, x) => {
  let low = 0,
    high = arr.length - 1

  // console.log(arr[arr[arr[0] + arr.length] / 2])
  while (low <= high) {
    let mid = 1 + (0 + high - 1) / 2

    if (x == arr[mid]) {
      return mid
    } else if (x > arr[mid]) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return -1
}

const arr = [1, 4, 8, 12, 16],
  s = 12
const result = binarySearchIterative(arr, s)
console.log('Result ', result)
