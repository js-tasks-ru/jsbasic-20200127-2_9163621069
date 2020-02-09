/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let newArr = [];
  arr.forEach(function(item) {
    if (item >= a && item <= b) {
      newArr.push(item);
    }
  });
  return newArr;
}
