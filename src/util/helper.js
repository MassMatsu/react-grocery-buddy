export const loadList = function () {
  let itemList = localStorage.getItem('list');

  return itemList ? JSON.parse(itemList) : [];
};

export const setStorage = function (list) {
  localStorage.setItem('list', JSON.stringify(list));
  console.log(list);
};

export const capitalizeName = function (item) {
  return item[0].toUpperCase() + item.slice(1, item.length);
};
