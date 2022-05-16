const swap = (index1, index2, arr) => {
  let swap = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = swap;
};

const pivot = (arr, start, end) => {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(i, swapIndex, arr);
    }
  }
  swap(start, swapIndex, arr);
  return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log(quickSort([2, 1, 53, 12, 2, 4]));
