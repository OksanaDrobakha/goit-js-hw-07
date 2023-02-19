import { galleryItems } from "./gallery-items.js";
// Change code below this line

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

document.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }
  const imgSelected = e.target.getAttribute("data-source");
  const instance = basicLightbox.create(
    `
    <img src=${imgSelected} width="800" height="600">
`,
    {
      onShow: () => {
        document.addEventListener("keydown", closeModal);
      },

      onClose: () => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );

  instance.show();

  function closeModal(e) {
    if (e.key === "Escape") {
      instance.close();
    }
  }
});
