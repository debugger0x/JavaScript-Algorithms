/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  var filteredArray = []; // Declared a new array
  for (const array in arr) {
    if (fn(arr[array], +array)) {
      filteredArray.push(arr[i]);
    }
  }
};