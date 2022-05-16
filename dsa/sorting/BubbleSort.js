const swap = (index1, index2, arr) => {
  let swap = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = swap;
};

const selectionSort = (arr) => {
  if (arr.length <= 1) return null;
  for (let i = 0; i < arr.length; i++) {
    let isSwapped = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        isSwapped = true;
        swap(j, j + 1, arr);
      }
    }
    if (!isSwapped) return arr;
  }
  return arr;
};

console.log(selectionSort([432423, 12, 2, 3, 2, 23232, 12, 3, 2, 5, 23]));
