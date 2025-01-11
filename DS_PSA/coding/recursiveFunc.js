// create a recursive function.
function flattenArray(arr) {
  let result = [], len = arr.length;

  for(let i = 0; i < len; i++) {
    if(Array.isArray(arr[i])) {
      result.push(...flattenArray(arr[i]));
    } else result.push(arr[i]);
  }

  return result;
}

const input = [1, [2, [3, 4, [5]]]];
const output = flattenArray(input);

console.log(output);