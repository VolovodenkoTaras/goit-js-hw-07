import { galleryItems } from './gallery-items.js';
// Change code below this line

// Задание 2 - библиотека SimpleLightbox
// Сделай такую же галерею как в первом задании, но используя библиотеку SimpleLightbox, 
// которая возьмет на себя обработку кликов по изображениям, открытие и закрытие модального окна,
//  а также пролистывание изображений при помощи клавиатуры.Посмотри демо видео работы галереи с подключенной библиотекой.

// Необходимо немного изменить разметку карточки галереи, используй этот шаблон.
// < a class="gallery__item" href = "large-image.jpg" >
//     <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// </ >

//     Выполняй это задание в файлах 02 - lightbox.html и 02 - lightbox.js.Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Используй готовый код из первого задания.
// Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs.Необходимо добавить ссылки на два файла:
// simple - lightbox.min.js и simple - lightbox.min.css.
// Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery.
// Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
// Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt.
// Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.

/*
Решение
*/

/*
Получаю ссылку на элемент
*/
const galleryRef = document.querySelector(".gallery");

/*
Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
Разметка для библиотеки simplelightbox
Для настройки по умолчанию вам просто нужны ссылки, указывающие на изображения.
<div class="gallery">
    <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
</div>
*/
const markup = galleryItems
    .map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt=${description}/></a>`;
    })
    .join("");

galleryRef.innerHTML = markup;

// Согласно функционалу подключенной библиотеки simplelightbox создаю новый экземпляр 
// При использовании автономного варианта (simple - lightbox(.min).js)
new SimpleLightbox(".gallery a", {
    captionsData: 'alt',  //Получить заголовок из заданного атрибута
    loop: true,           //Позволяет циклически просматривать изображения
    captionDelay: 250,    //Добавляет задержку перед отображением подписи (в мс)
    animationSpeed: 300,  //Сколько времени занимает анимация слайда
    animationSlide: true, //Вставлять новые фотографии или нет, отключите исчезновение
});

