import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const markup = galleryItems
    .map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt=${description}/>
    </a>`;
    })
    .join("");

galleryRef.innerHTML = markup;

new SimpleLightbox(".gallery a", {
    captionsData: 'alt',
    loop: true,
    captionDelay: 250,
    animationSpeed: 300,
    animationSlide: true,
});

