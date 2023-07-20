import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
  galleryEl: document.querySelector('.gallery'),
  body: document.querySelector('body')
}

console.log(galleryItems);

const elementImg = galleryItems.map(({ preview, original, description }) =>`
<li class="gallery__item">
   <a class="gallery__link"
   href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
   </a>
  </li>`
).join('')

refs.galleryEl.insertAdjacentHTML('afterbegin', elementImg);

const lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: 'alt'});

