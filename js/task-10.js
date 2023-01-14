// Задание 10(выполнять не обязательно)
// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input 
// и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// < div id = "controls" >
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </ >

//   <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого < div > - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

/*
РЕШЕНИЕ
*/
/*
Методом document.querySelector нахожу нужный элемент
*/

const refs = {
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  inputValue: document.querySelector('input[type="number"]'),
  divBoxes: document.querySelector("#boxes"),
}

/*
В глобальной области видимости обьявляю переменную size
*/
let size = 30;

/*
Фунция createBoxes(amount) 
а) получает значение инпута и присваивает его в amount
б) создает пустой массив arrayDivs
в) перебирает цикл со счетчиком и на каждой итерации:
  1. пушит в массив arrayDivs шаблонную строку, куда передает как переменные size и результат выполнения функции getRandomHexColor()
  2. увеличивает переменную size на 10
г) вставляет в DOM в refs.divBoxes методом insertAdjacentHTML массив arrayDivs,преобразованный в строку методом join("")
*/
function createBoxes(amount) {
  amount = refs.inputValue.value;
  const arrayDivs = [];
  for (let i = 0; i < amount; i += 1) {
    arrayDivs.push(`<div class="box" style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`);
    size += 10;
  }
  refs.divBoxes.insertAdjacentHTML("beforeend", arrayDivs.join(""));
};
/*
Вешаю слушатель событий addEventListener на click на элемент refs.buttonCreate
*/
refs.buttonCreate.addEventListener("click", createBoxes);

/*
Фунция destroyBoxes очищает значение в refs.inputValue,
удаляет всё содержимое в refs.divBoxes с помощью свойства innerHTML
возвращает значения по умолчанию в переменную глобальной области видимости size
*/
const destroyBoxes = () => {
  refs.inputValue.value = "";
  refs.divBoxes.innerHTML = "";
  size = 30;
};

/*
Вешаю слушатель событий addEventListener на click на элемент refs.buttonDestroy
*/
refs.buttonDestroy.addEventListener("click", destroyBoxes);

