// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).
// Кількість категорій, їх назва та кількість елементів отримані за допомогою властивостей і методів DOM-елементів
// Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach()
//
// //
const categories = document.querySelector('#categories');
const items = document.querySelectorAll('.item');

//console.log(`Number of categories: ${categories.children.length}`); // !!!!!!!
console.log(`Number of categories: ${items.length}`);
//console.log(items);

items.forEach(item => {
  //    console.log(document.querySelector('h2')); // - ?
  //   console.log(document.querySelector('h2').textContent);
  //     console.log(document.querySelectorAll('li').length);
  const title = item.querySelector('h2').textContent;
  const itemsAmount = item.querySelectorAll('li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsAmount}`);
});
