// Задание 4
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// < div id = "counter" >
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </ >

//     Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

/*
РЕШЕНИЕ
*/
/*
Создаю переменную counterValue и инициирую её значением 0
Методом document.querySelector нахожу нужные элементы по дата-атрибуту и id
*/

let counterValue = 0;

const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
}

/*
Создаю коллбэк-функцию onClickIncreaseButton , которая увеличивает значение counterValue на 1
и присваивает его в значение счетчика с помощью метода textContent
Вешаю слушатель событий addEventListener на клик на кнопку incrementBtn , вторым аргументом передаю эту коллбек-функцию
*/
const onClickIncreaseButton = () => {
    counterValue += 1;
    refs.value.textContent = counterValue;
}

refs.incrementBtn.addEventListener("click", onClickIncreaseButton)

/*
Создаю коллбэк-функцию onClickDecreaseButton , которая уменьшает значение counterValue на 1
и присваивает его в значение счетчика с помощью метода textContent
Вешаю слушатель событий addEventListener на клик на кнопку decrementBtn , вторым аргументом передаю эту коллбек-функцию
*/
const onClickDecreaseButton = () => {
    counterValue -= 1;
    refs.value.textContent = counterValue;
}

refs.decrementBtn.addEventListener("click", onClickDecreaseButton)

