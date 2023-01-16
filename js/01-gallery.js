import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const markup = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
}).join("");

galleryRef.innerHTML = markup;

galleryRef.addEventListener("click", onClickImagePreview);

function onClickImagePreview(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(
        `<div class="modal"><img src="${e.target.dataset.source}"></div>`,
        {
            onShow: instance => {
                document.addEventListener('keydown', onModalAddKeydown);
            },
            onClose: instance => {
                document.removeEventListener('keydown', onModalAddKeydown);
            },
        }
    );
    instance.show();

    function onModalAddKeydown(e) {
        if (e.code !== "Escape") {
            return;
        } else {
            instance.close();
        }
    }
}