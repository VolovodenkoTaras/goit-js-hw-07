import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// console.log(basicLightbox);

// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `)
// // instance.show()
// instance.show(() => console.log('lightbox now visible'))

// setTimeout(instance.close(() => console.log('lightbox not visible anymore')), 5000)

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`, {
    onShow: (instance) => {
        console.log("hello world!")
    },
})

instance.show()

// instance.close()


new SimpleLightbox('.test a', { /* options */ });