import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createMarkupGalleryItems(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

function createMarkupGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

console.log(galleryMarkup);

const openModal = (event) => {
  event.preventDefault();
};

// const instance = basicLightbox.create(` <img src="${}">`);

// instance.show();

galleryList.addEventListener("click", openModal);
