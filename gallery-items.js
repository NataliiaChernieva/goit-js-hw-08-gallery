//export default 
const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];



const galleryEl = document.querySelector('.js-gallery');
const lightBox = document.querySelector('.js-lightbox');
const lightBoxOverlay = document.querySelector('.lightbox__overlay');
//const lightBoxContent = document.querySelector('.lightbox__content');
const lightBoxImage = document.querySelector('.lightbox__image');
const lightBoxBtn = document.querySelector('.lightbox__button');
//const galleryImg = document.querySelector('.gallery__image');
//const galleryLink = document.querySelector('.gallery__link');

let currentInd = null;

function createGalleryMarkup(images) {
  return images
    .map(({preview,original,description}) => {
      return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>
    `;
    })
    .join('');
};

galleryEl.insertAdjacentHTML('beforeend', createGalleryMarkup(images));

galleryEl.addEventListener('click', openModalWindow);

function openModalWindow(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;

  lightBox.classList.add('.is-open');

  images.forEach((image, ind) => {
  if (image.preview === e.target.src) {
    //console.log('object :>> ', image.preview);
    //console.log('object :>> ', e.target.src);
    currentInd = ind;
    }
  });
  
  lightBoxImage.src = e.target.dataset.source;
  lightBoxImage.alt = e.target.alt;
    
  window.addEventListener('keydown', addGalleryScroll);
  lightBoxBtn.addEventListener('click', onModalWindowCloseBtn);
  lightBoxOverlay.addEventListener('click', onOverlayClick);
  window.addEventListener('keypress', onEscPress);
};

function addGalleryScroll(e) {
  e.preventDefault();
  if (e.code === 'ArrowLeft' && currentInd > 0) {
    currentInd -= 1;
    lightBoxImage.src = images[currentInd].original;
    lightBoxImage.alt = images[currentInd].description;
    return;
  }

  if (e.code === 'ArrowLeft' && currentInd === 0) {
    currentInd = images.length-1;
    lightBoxImage.src = images[currentInd].original;
    lightBoxImage.alt =images[currentInd].description;
  }

  if (e.code === 'ArrowRight' && currentInd === images.length-1) {
    currentInd = 0;
    lightBoxImage.src = images[currentInd].original;
    lightBoxImage.alt = images[currentInd].description;
    return;
  }

  if (e.code === 'ArrowRight' && currentInd >= 0) {
    currentInd += 1;
    lightBoxImage.src = images[currentInd].original;
    lightBoxImage.alt = images[currentInd].description;
    return;
  }
};

function onModalWindowCloseBtn(e) {
  e.preventDefault();
  lightBox.classList.remove('.is-open');
  lightBoxImage.src = '';

  window.removeEventListener('keypress', addGalleryScroll);
  lightBoxOverlay.removeEventListener('click', onOverlayClick);
  window.remnoveEventListener('keypress', onEscPress);
};

function onOverlayClick(e) {
  e.preventDefault();
  if (e.target===e.currentTarget) {
    onModalWindowCloseBtn();
  }
};

function onEscPress() {
  e.preventDefault();
  if (e.code === 'Escape') {
    onModalWindowCloseBtn();
  }
};

lightBoxBtn.removeEventListener('click', onModalWindowCloseBtn);