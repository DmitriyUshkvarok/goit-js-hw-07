import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");

const newGallery = (items) => {
  return galleryItems
    .map(
      (item) =>
        `<li>
              <a class="gallery__item" href=${item.original}>
              <img class="gallery__image" src=${item.preview} alt="${item.description}" />
              </a>
          </li>`
    )
    .join("");
};
gallery.innerHTML = newGallery(galleryItems);

console.log(galleryItems);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
});
