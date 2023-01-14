// Задание 6
// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет его содержимое на правильное количество введённых символов.

// < input
// type = "text"
// id = "validation-input"
// data - length="6"
// placeholder = "Please enter 6 symbols"
//     />

//     Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid, которые мы уже добавили в исходные файлы задания.

//     #validation - input {
//     border: 3px solid #bdbdbd;
// }

// #validation - input.valid {
//     border - color: #4caf50;
// }

// #validation - input.invalid {
//     border - color: #f44336;
// }

/*
РЕШЕНИЕ
*/
/*
Методом document.querySelector нахожу нужные элементы по id
*/
const textInput = document.querySelector("#validation-input");

/*
Вешаю слушатель событий addEventListener на blur на textInput , 
и если event.target.value.length (длина введенного) строго равна 
Number(textInput.dataset.length) (приведенному к числу значению из дата-атрибута length)
то добавляю класс valid на textInput и убираю класс invalid,
а если нет - то наоборот
*/
textInput.addEventListener("blur", (event) => {
    if (event.target.value.length === Number(textInput.dataset.length)) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    }
    else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    }
});