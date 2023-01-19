// Створити калькулятор вартості продукту в залежності від ціни. При роботі з подіями використовувати делегування.
//  Відрендерити всю розмітку через JS
// При змінні данних в інпуті №1 чи №2 автоматично має перераховуватися загальна вартість
// Завжди має відображатися валюта - гривня
// Загальна сума відображається з копійками (2 знаки після коми)
// В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.
// Кольорова підказка має змінювати своє значення при перетягувані повзунка.
// В інпуті №2 мін і мах поріг встановлюєте самостійно.
// При завантаженні сторінки сприпт має автоматично розрахувати вартість на основі даних за замовчуванням які ви встановите в розмітці.

/*
Решение
*/
/*
Получаю ссылки на элементы по ID
*/
const form = document.getElementById("form");
const price = document.getElementById("price");
const quantity = document.getElementById("quantity");
const amount = document.getElementById("amount");
const total = document.getElementById("total");

/*
Создаю обьект, в котором храню начальные значения цены и количества, а также метод для расчета суммы 
*/
const data = {
    price: 0,
    quantity: 0,
    calcTotalPrice() {
        return (this.price * this.quantity).toFixed(2);
    },
};

//data fill  -- инициализирую начальными значениями
dataFill();
displayTotalPrice();

//events listener вешаю слушатель событий на change на форму (не на инпуты формы , для делегирования)
form.addEventListener("change", handleFormChange);

// functions handleFormChange
// из event деструктуризирую target , а из target - value
function handleFormChange({ target }) {
    const { value } = target;

    // если target (элемент на котором произошло событие) строго равен элементу quantity то обновляею свойство textContent в элементе amount
    if (target === quantity) {
        // data.quantity = value;
        amount.textContent = value;
    }
    //   else if (target === price) {
    //     data.price = value;
    //   }

    // обновляю значение атрибута value в target (элемента на котором произошло событие)  значением из инпута
    target.setAttribute("value", value);
    // обновляю значения 1)в обьекте и 2)в сумме
    dataFill();
    displayTotalPrice();
}

/*
Функция получает значения по атрибуту из инпута прайса и количества в разметке и обновляет значения в обьекте
*/
function dataFill() {
    data.price = price.getAttribute("value");
    data.quantity = quantity.getAttribute("value");
}

/*
Функция рассчитывает сумму используя метод обьекта data и обновляет свойство textContent в элементе 
*/
function displayTotalPrice() {
    total.textContent = data.calcTotalPrice() + " грн";
}