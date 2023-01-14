// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль при клике на button.change - color и выводит значение цвета в span.color.

// < div class="widget" >
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </ >

// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

/*
РЕШЕНИЕ
*/
/*
Методом document.querySelector нахожу нужный элемент
*/

const buttonRef = document.querySelector(".change-color");
const spanTextRef = document.querySelector(".color");

/*
Функция onButtonClick
1. присваивает в spanTextRef.textContent результат выполнения getRandomHexColor()
2. вешает на боди как инлайновый стиль на backgroundColor результат выполнения getRandomHexColor()
*/
const onButtonClick = () => {
  spanTextRef.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
};

/*
Вешаю слушатель событий addEventListener на click на buttonRef 
*/
buttonRef.addEventListener("click", onButtonClick);