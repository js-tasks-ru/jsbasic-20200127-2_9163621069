/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let value = str.toLowerCase();
  return value.includes("1xbet") || value.includes("xxx");
}
