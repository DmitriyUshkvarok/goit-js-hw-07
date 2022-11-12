import { galleryItems } from "./gallery-items.js";
// создаём переменную галерее
const gallery = document.querySelector(".gallery");

// создаём функцию в которой возвращаем копию массива обьектов с добавленой разметкой
const newGallery = (items) => {
  return (
    galleryItems
      .map(
        (item) =>
          `<div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
               <img
                  class="gallery__image"
                  src="${item.preview}
                  "data-source="${item.original}"
                  alt="${item.description}"
               />
            </a>
         </div>`
      )
      //   превращаем разметку в строку
      .join("")
  );
};

// добавляем  созданную разметку в галерею
gallery.innerHTML = newGallery(galleryItems);
// создаём событие по клику для галереи
gallery.addEventListener("click", clickOnImg);

// сбрасываем дефолтное поведение для браузера
function clickOnImg(event) {
  console.log(event);
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  // создаём переменную для для открытия оригинального изображения
  const selectedImage = event.target.getAttribute("data-source");
  const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="1200" height="800">
`);

  instance.show();

  // создаём событие для командных кнопок и делаем в нём проверку  на строгое равенство с кнопкой esc
  gallery.addEventListener("keydown", (closed) => {
    if (closed.key === "Escape") {
      instance.close();
    }
  });
}

