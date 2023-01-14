// Задание 3
// Напиши скрипт для создания галереи изображений по массиву данных.В HTML есть список ul.gallery.

// < ul class="gallery" ></ >

//   Используй массив объектов images для создания элементов < img > вложенных в < li >.
// Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.


const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


/*
РЕШЕНИЕ
*/
/*
Методом document.querySelector нахожу элемент по CSS селектору
*/

const refs = {
  gallery: document.querySelector('.gallery'),
}

/*
Перебираю массив images методом map, при этом на каждой итерации 
создаю li - элемент списка как шаблонную строку (при этом декструктуризирую { url, alt } из передаваемого обьекта) ,
потом на получившемся массиве применяю метод join('') (перевожу все элементы массива в строку)
*/

const markup = images.map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="400"></li>`).join('')

/*
применяю инлайн-стили на элементе
*/
refs.gallery.style.listStyle = 'none';
refs.gallery.style.display = "flex";
refs.gallery.style.flexWrap = "wrap";
refs.gallery.style.gap = "20px";

/*
с помощью метода insertAdjacentHTML('beforeend'(внутри элемента после всех детей), markup) вставляю список в галерею
*/
refs.gallery.insertAdjacentHTML('beforeend', markup)

