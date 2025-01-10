// const input = "seven lakh two thousand three hundred forty two";
const input = "two thousand Five hundred fifteen";
// output : 702342

// mapper
const mapper = {
  "zero": 0,
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "eight": 8,
  "nine": 9,
  "ten": 10,
  "eleven": 11,
  "twelve": 12,
  "thirteen": 13,
  "fourteen": 14,
  "fifteen": 15,
  "sixteen": 16,
  "seventeen": 17,
  "eighteen": 18,
  "nineteen": 19,
  "twenty": 20,
  "thirty": 30,
  "forty": 40,
  "fifty": 50,
  "sixty": 60,
  "seventy": 70,
  "eighty": 80,
  "ninty": 90,
  "hundred": 100,
  "thousand": 1000,
  "lakh": 100000,
  "crore": 10000000,
};

// Hundreds splitter
const hundredthWordToNumber = input.toLowerCase().split("hundred");
function lastTwoDigits(arg1) {
  const indNums = arg1.split(" ");

  if (indNums.length == 2) return mapper[indNums[0]] + mapper[indNums[1]];

  return mapper[indNums];
}

const lastTwoNumbers = lastTwoDigits(hundredthWordToNumber[1].trim());
const hundredthPlace = mapper[hundredthWordToNumber[0].trim()] * mapper.hundred;

let result = hundredthPlace + lastTwoNumbers
console.log(result)

// Thousand splitter
// const thousandWordToNumber = hundredthWordToNumber[0].split("thousand");
// let thousandsNumber = mapper[thousandWordToNumber[0].trim()] * mapper.thousand;

// let newresult = result + thousandsNumber;

// console.log(typeof result, result, typeof thousandsNumber, thousandsNumber)
// console.log(newresult)


