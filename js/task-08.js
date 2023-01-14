// Задание 8
// Напиши скрипт управления формой логина.

// < form class="login-form" >
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </ >

//     Обработка отправки формы form.login - form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства.Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

/*
РЕШЕНИЕ
*/
/*
Методом document.querySelector нахожу нужный элемент
*/
const form = document.querySelector(".login-form");

/*
Вешаю слушатель событий addEventListener на submit на form 
*/
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); /*Отменяю поведение браузера по умолчанию - при отправке формы не будет перезагружать страницу*/

    const { email, password } = event.currentTarget.elements;/*Деструктуризирую email и password из event.currentTarget.elements*/

    /*
    Если email или password не заполнены - возвращаю алерт
    иначе создаю обьект inputData, куда собираю значения полей email и password , вывожу его в консоль 
    и очищаю форму event.currentTarget.reset()
     */
    if (!email.value || !password.value) {
        return alert("Please fill in all the fields!");
    } else {
        const inputData = { email: email.value, password: password.value }
        console.log(inputData);
        event.currentTarget.reset();
    }
}
