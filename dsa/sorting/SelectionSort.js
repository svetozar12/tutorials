const swap = (index1, index2, arr) => {
  let swap = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = swap;
};

const selectionSort = (arr) => {
  if (arr.length <= 1) return null;
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    swap(i, min, arr);
    console.log(arr);
  }
  return arr;
};

// time complexity O(n^2)
// space complexity O(1)

console.log(selectionSort([20, 12, 10, 15, 2]));
