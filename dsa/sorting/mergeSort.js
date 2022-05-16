const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let results = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
};

const sort = (arr) => {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let start = sort(arr.slice(0, middle));
  let end = sort(arr.slice(middle));
  return merge(start, end);
};

console.log(sort([4324, 12, 6546, 12, 2]));
