function compareArrays(arr1, arr2) {
  let result = (arr1.every === arr2.every) && (arr1.length === arr2.length);

  return result; // boolean
}

function advancedFilter(arr) {
  let positNumber = n => n > 0 && n % 3 ===0;
  let arr1 = arr.filter(positNumber);
  let resultArr = arr1.map(item => item * 10);

  return resultArr; // array
}
