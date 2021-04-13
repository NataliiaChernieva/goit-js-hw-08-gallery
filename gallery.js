// import images from './gallery-items';

// const galleryEl = document.querySelector('.js-gallery');
// const lightBox = document.querySelector('.js-lightbox');
// const lightBoxOverlay = document.querySelector('.lightbox__overlay');
// //const lightBoxContent = document.querySelector('.lightbox__content');
// const lightBoxImage = document.querySelector('.lightbox__image');
// const lightBoxBtn = document.querySelector('.lightbox__button');
// //const galleryImg = document.querySelector('.gallery__image');
// //const galleryLink = document.querySelector('.gallery__link');

// let currentInd = null;

// function createGalleryMarkup(images) {
//   return images
//     .map(({preview,original,description}) => {
//       return `
//     <li class="gallery__item">
//   <a
//     class="gallery__link"
//     href=${original}
//   >
//     <img
//       class="gallery__image"
//       src=${preview}
//       data-source=${original}
//       alt=${description}
//     />
//   </a>
// </li>
//     `;
//     })
//     .join('');
// };

// galleryEl.insertAdjacentHTML('beforeend', createGalleryMarkup(images));

// galleryEl.addEventListener('click', openModalWindow);

// function openModalWindow(e) {
//   e.preventDefault();
//   if (e.target.nodeName !== 'IMG') return;

//   lightBox.classList.add('is-open');

//   images.forEach((image, ind) => {
//   if (image.preview === e.target.src) {
//     //console.log('object :>> ', image.preview);
//     //console.log('object :>> ', e.target.src);
//     currentInd = ind;
//     }
//   });
  
//   lightBoxImage.src = e.target.dataset.source;
//   lightBoxImage.alt = e.target.alt;
    
//   window.addEventListener('keydown', addGalleryScroll);
//   lightBoxBtn.addEventListener('click', onModalWindowCloseBtn);
//   lightBoxOverlay.addEventListener('click', onOverlayClick);
//   window.addEventListener('keydown', onEscPress);
// };

// function addGalleryScroll(e) {
//   e.preventDefault();
//   if (e.code === 'ArrowLeft' && currentInd > 0) {
//     currentInd -= 1;
//     lightBoxImage.src = images[currentInd].original;
//     lightBoxImage.alt = images[currentInd].description;
//     return;
//   }

//   if (e.code === 'ArrowLeft' && currentInd === 0) {
//     currentInd = images.length-1;
//     lightBoxImage.src = images[currentInd].original;
//     lightBoxImage.alt =images[currentInd].description;
//   }

//   if (e.code === 'ArrowRight' && currentInd === images.length-1) {
//     currentInd = 0;
//     lightBoxImage.src = images[currentInd].original;
//     lightBoxImage.alt = images[currentInd].description;
//     return;
//   }

//   if (e.code === 'ArrowRight' && currentInd >= 0) {
//     currentInd += 1;
//     lightBoxImage.src = images[currentInd].original;
//     lightBoxImage.alt = images[currentInd].description;
//     return;
//   }
// };

// function onModalWindowCloseBtn(e) {
//   //e.preventDefault();
//   lightBox.classList.remove('is-open');
//   lightBoxImage.src = '';

//   window.removeEventListener('keypress', addGalleryScroll);
//   lightBoxOverlay.removeEventListener('click', onOverlayClick);
//   window.remnoveEventListener('keydown', onEscPress);
// };

// function onOverlayClick(e) {
//   //e.preventDefault();
//   if (e.target===e.currentTarget) {
//     onModalWindowCloseBtn();
//   }
// };

// function onEscPress(e) {
//   //e.preventDefault();
//   if (e.code === 'Escape') {
//     onModalWindowCloseBtn();
//   }
// };

// lightBoxBtn.removeEventListener('click', onModalWindowCloseBtn);