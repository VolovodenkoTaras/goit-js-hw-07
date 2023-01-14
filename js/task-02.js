// Задание 2
// В HTML есть пустой список ul#ingredients.

// < ul id = "ingredients" ></ >

//   В JavaScript есть массив строк.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент < li >.Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все < li > за одну операцию в список ul#ingredients.

/*
РЕШЕНИЕ
*/
/*
Методом document.querySelector нахожу список по CSS селектору
*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refs = {
  ingredients: document.querySelector('#ingredients'),
}

// const arr = []
// for (let i = 0; i < ingredients.length; i += 1) {
//   const li = document.createElement('li');
//   li.classList.add('item');
//   li.textContent = ingredients[i];
//   arr.push(li)
// }

/*
Перебираю массив ingredients методом map, при этом на каждой итерации 
создаю li - элемент списка методом document.createElement('li'),
добавляю ему класс методом li.classList.add('item'), 
в текст между тэгами элемента списка вставляю значение элемента массива li.textContent = ingredient 
и возвращаю строку как элемент нового массива
*/


const arr = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredient;
  return li;
})

/*
Методом append вставляю получившийся массив (предварительно распылив ...arr) в єлемент ingredients
*/

refs.ingredients.append(...arr)