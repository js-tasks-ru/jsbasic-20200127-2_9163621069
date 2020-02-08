/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let result = {};
  let arr = str.split(/[\s,]+/).filter(Number);
  result.min = Math.min(...arr);
  result.max = Math.max(...arr);
  return result;
}
