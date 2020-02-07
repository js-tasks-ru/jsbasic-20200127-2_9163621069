/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let newArray = data
    .filter((data) => data.age <= age)
    .map((data) => `${data.name}, ${data.balance}`);
  return newArray.join('\n');
}
