// Задание 1
// В HTML есть список категорий ul#categories.

// < ul id = "categories" >
//   <li class="item">
//     <h2>Animals</h2>
//     <ul>
//       <li>Cat</li>
//       <li>Hamster</li>
//       <li>Horse</li>
//       <li>Parrot</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Products</h2>
//     <ul>
//       <li>Bread</li>
//       <li>Prasley</li>
//       <li>Cheese</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Technologies</h2>
//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node.js</li>
//     </ul>
//   </li>
// </ >

//     Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега < h2 >) 
// и количество элементов в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

/*
РЕШЕНИЕ
*/
/*
Методами document.querySelector и document.querySelectorAll нахожу нужный элемент (или группу элементов) по CSS селектору
*/
const refs = {
    categories: document.querySelector('#categories'),
    items: document.querySelectorAll('.item'),
}

/*
свойство childElementCount возвращает тот же результат, что и element.children.length
*/
console.log("Number of categories:", refs.categories.childElementCount);

/*
перебираю массив items методом forEach и возвращаю на каждой итерации console.log шаблонной строки 
куда вывожу методом querySelector на передаваемом элементе массива находящийся текст в заголовке h2
методом textContent и количество дочерних элементов списка ul методом childElementCount
*/
refs.items.forEach((el) => {
    console.log(`
Category: ${el.querySelector("h2").textContent}
Elements: ${el.querySelector("ul").childElementCount}`);
})