import {placeList} from '../index.js';
import {openModal, closeModal, closeOverlayModal} from './modal.js';

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  }
];

const popupImageCard = document.querySelector(".popup_type_image");
// функция лайка
function handleLikeClick (evt) {
  evt.target.classList.toggle('card__like-button_is-active')
};
// функция удаления карточки
function deleteCard(evt) {
  evt.target.closest('.card').remove();
}
// функция открытия картинки
function handleImageClick (el) {
  const popupImage = popupImageCard.querySelector(".popup__image");
  const popupCaption = popupImageCard.querySelector(".popup__caption");

  popupImage.src = el.link;
  popupImage.alt = el.name;
  popupCaption.textContent = el.name;

  openModal(popupImageCard);
}
// функция создания карточки
function createCardEl(template, el, handleImageClick, handleLikeClick, deleteCard) {
  const card = template.querySelector('.card').cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const cardTitle = card.querySelector('.card__title');
  const likeButton = card.querySelector('.card__like-button');
  const deleteButton = card.querySelector('.card__delete-button');

  cardImage.src = el.link;
  cardImage.alt = el.name;
  cardTitle.textContent = el.name;
  
cardImage.addEventListener('click', () =>
  handleImageClick(el));
likeButton.addEventListener('click', handleLikeClick);
deleteButton.addEventListener('click', deleteCard)
return card;
};


function createCard(el, handleImageClick, handleLikeClick, deleteCard){
  const cardTemplate = document.querySelector('#card-template').content;
  return createCardEl(cardTemplate, el, handleImageClick, handleLikeClick, deleteCard);
};



// Вывести карточки на страницу
function output() {
  initialCards.forEach((el) => {
    placeList.append(createCard(el, handleImageClick, handleLikeClick, deleteCard));
  });
}

export {output, deleteCard, handleLikeClick, handleImageClick, popupImageCard, createCard};