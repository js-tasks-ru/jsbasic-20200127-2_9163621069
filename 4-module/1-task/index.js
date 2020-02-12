/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let UL = document.createElement('UL');
  friends.forEach(function(item) {
    UL.innerHTML += `<li>${item.firstName} ${item.lastName}</li>`;
  });
  return UL;
}
