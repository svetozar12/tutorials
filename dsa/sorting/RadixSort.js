const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (number) => {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
};

const mostDigits = (arr) => {
  let most = digitCount(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (most < digitCount(arr[i])) most = digitCount(arr[i]);
  }
  return most;
};

const radixSort = (arr) => {
  const most = mostDigits(arr);
  for (let k = 0; k < most; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      getDigit(arr[i], k);
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
};

console.log(radixSort([5, 1, 4, 62, 1]));
