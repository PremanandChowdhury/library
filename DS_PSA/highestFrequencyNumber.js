// Given a array of numbers return the Number Which Has Highest Frequency
const input = [1,1,2,2,2,3,3,3,2,2,2,2,1,3,3,2]; // Output Should Be 2

function highestFrequency(arr) {
  const frequencyMap = {};

  arr.forEach(num => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  });

  let highestFrequencyNumber = null, highestFrequency = 0;

  for (const num in frequencyMap) {
    if(frequencyMap[num] > highestFrequency) {
      highestFrequency = frequencyMap[num];
      highestFrequencyNumber = Number(num);
    }
  }

  return [highestFrequencyNumber, highestFrequency];
}

console.log(highestFrequency(input));

