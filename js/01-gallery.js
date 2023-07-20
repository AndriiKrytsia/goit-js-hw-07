import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  galleryEl: document.querySelector('.gallery'),
  body: document.querySelector('body')
}

refs.galleryEl.addEventListener('click', onOpenImages);

const elementImg = galleryItems.map(({ preview, original, description }) =>
  `<li class="gallery__item">
    <a class="gallery__link" href=${original}>
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </li>`).join('');

refs.galleryEl.insertAdjacentHTML('afterbegin', elementImg);
  

function onEscClose(event) {

  if (event.code !== "Escape") {
    return
  }

  modalImage.close()
}

const modalImage = basicLightbox.create(`
<img class="gallery__image"
      src=""
      alt = "!!!!"/>
`,{
onShow: () => {
    document.addEventListener('keydown', onEscClose),
      refs.body.style.overflow = "hidden"
  },
    onClose: () => {
    document.removeEventListener('keydown', onEscClose),
      refs.body.style.overflow = "visible"
    }
})
 
  
function onOpenImages(e) {
  e.preventDefault()
  
  const imageUrl = e.target.dataset.source;
  const imageComplete = modalImage.element().querySelector('img');
  imageComplete.src = imageUrl;
  modalImage.show()
}

 
  


