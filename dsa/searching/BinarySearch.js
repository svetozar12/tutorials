const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let middle;

  while (left < right) {
    middle = Math.floor((left + right) / 2);
    if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle;
    }
    if (arr[middle] === target) return middle;
  }
  return -1;
};

// time complexity O(logN);
// space complexity is O(1)
const arrLength = 169220804;
const array1 = [];

for (let i = 0; i < arrLength; i += 2) {
  array1.push(i);
}

const target = array1[Math.floor(arrLength - 1)];

console.time("binary Search:");
binarySearch(array1, target);
console.timeEnd("binary Search:");

console.time("js find:");
const found = array1.find((element) => element === target);
console.timeEnd("js find:");
