import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const imgElements = galleryItems.reduce(
  (acum, { preview, original, description }) =>
    (acum += `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`),
  ""
);

gallery.insertAdjacentHTML("beforeend", imgElements);

console.log("imgElements: ", imgElements);

document.addEventListener("click", (eventModal) => {
  eventModal.preventDefault();

  if (eventModal.target.nodeName !== "img") {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src=${galleryItems.original} width="800" height="600">
`,
    {
      onShow: () => {
        document.addEventListener("keydown", closeModal);
      },

      onClose: () => {
        document.addEventListener("keydown", closeModal);
      },
    }
  );

  instance.show();

  function closeModal(eventModal) {
    if (eventModal.key === "Escape") {
      instance.close();
    }
  }
});
