
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';


console.log(galleryItems);

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const makeGalleryMarkup = (galleryItem) => {
  const { preview, original, description } = galleryItem;
  return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src=${preview} title=${description}/>
    </a>`;
};
const gallery = document.querySelector(".gallery");
const makeGallery = galleryItems.map(makeGalleryMarkup).join("");

gallery.insertAdjacentHTML("afterbegin", makeGallery);
console.log(makeGallery);

const lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
  });
