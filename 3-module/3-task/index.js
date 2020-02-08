/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  if (str === '') {
    return '';
  }
  let newArr = [];
  let arr = str.split('-').filter(String);
  arr.forEach((item) => {
    newArr += item[0].toUpperCase() + item.substr(1);
  });
  if (str[0] !== '-') {
    newArr = newArr[0].toLowerCase() + newArr.substr(1);
  }
  return newArr;
}
