/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (str === '') {
    return '';
  }
  if (str.length === 1) {
    return str.charAt(0).toUpperCase();
  }
  return str.charAt(0).toUpperCase() + str.substr(1, str.length);
}
