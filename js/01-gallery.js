import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const imagesContainer = document.querySelector(".gallery");
// const imgElements = galleryItems.reduce(
//   (acum, item) =>
//     (acum += `<img src=${item.preview} title=${item.description} alt=${item.description}/>`),
//   ""
// );
// imagesContainer.insertAdjacentHTML("beforeend", imgElements);
const images = [];
galleryItems.forEach((item) => {
  const galleryContainer = document.createElement("div");
  galleryContainer.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.href = item.preview;
  galleryImage.setAttribute("data-source", item.original);
  galleryImage.alt = item.description;

  galleryContainer.append(galleryLink);
  galleryLink.append(galleryImage);
  images.push(galleryContainer);
});

imagesContainer.append(...images);
