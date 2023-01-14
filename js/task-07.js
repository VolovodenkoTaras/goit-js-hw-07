// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.

// < input id = "font-size-control" type = "range" min = "16" max = "96" />
// <br />
// <span id="text">Abracadabra!</span>

/*
РЕШЕНИЕ
*/
/*
Методами document.querySelector/getElementById нахожу нужные элементы по id
*/
const inputEl = document.querySelector("#font-size-control");
const textEl = document.getElementById("text");

/*
Методом getAttribute на inputEl и т.д. высчитываю правильное первоначальное значение размера шрифта 
и присваиваю его в textEl.style.fontSize
*/
textEl.style.fontSize = `${(Number(inputEl.getAttribute("max")) - Number(inputEl.getAttribute("min"))) / 2}px`

/*
Вешаю слушатель событий addEventListener на input на inputEl , 
и присваиваю event.target.value в textEl.style.fontSize
*/
inputEl.addEventListener("input", (event) => {
    textEl.style.fontSize = `${event.target.value}px`;
});