// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

/*
РЕШЕНИЕ
*/
/*
Методом document.querySelector нахожу нужные элементы по id
*/
const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

/*
Вешаю слушатель событий addEventListener на инпут на textInput , 
при наступлении события обновляю output.textContent значением из event.target.value
если output.textContent возвращает false - заменяю его значение на "Anonymous"
*/
textInput.addEventListener("input", (event) => {

    output.textContent = event.target.value;

    if (!output.textContent) {
        output.textContent = "Anonymous";
    }

});