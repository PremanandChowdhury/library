function allZerosToLast(arr) {
  if (!Array.isArray(arr)) return -1;

  const nonZeros = arr.filter((num) => num !== 0);
  const zeros = arr.filter((num) => num === 0);

  return [...nonZeros, ...zeros];
}

function Driver() {
  const testCases = [
    {
      id: "t1",
      input: [1, 2, 0, 4, 3, 0, 5, 0],
      expected: [1, 2, 4, 3, 5, 0, 0, 0],
    },
    {
      id: "t2",
      input: [10, 20, 30],
      expected: [10, 20, 30],
    },
    {
      id: "t3",
      input: [0, 0],
      expected: [0, 0],
    },
  ];

  let passed = 0;

  testCases.forEach(({ id, input, expected }) => {
    const result = allZerosToLast(input);
    const isPassed = Array.isArray(result)
      ? JSON.stringify(result) === JSON.stringify(expected)
      : result === expected;

    if (isPassed) {
      console.log(`Test case ${id} is Passed`);
      passed++;
    } else {
      console.log(`❌ Test ${id} failed`);
      console.log(`   Input: ${JSON.stringify(input)}`);
      console.log(`   Expected: ${JSON.stringify(expected)}`);
      console.log(`   Got: ${JSON.stringify(result)}`);
    }
  });

  console.log(`\nSummary: ${passed}/${testCases.length} test cases passed.`);
}

Driver();
