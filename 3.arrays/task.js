function compareArrays(arr1, arr2) {
  return result = arr2.every(function (element, index) {
    return arr1.includes(element, index);
  })
}


function advancedFilter(arr) {
  
  return resultArr = arr.filter(n => n > 0 && n % 3 ===0).map(item => item * 10);
    
}
