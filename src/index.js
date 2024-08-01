import {createCardEl, handleLikeClick, deleteCard} from './components/card.js';
import {openModal, closeModal, closeOverlayModal} from './components/modal.js';
import { initialCards } from './components/cards.js';
import './index.css';

const cardTemplate = document.querySelector('#card-template').content;
const placeList = document.querySelector('.places__list');
const popupTypeEdit = document.querySelector('.popup_type_edit')
const popupEditButton = document.querySelector('.profile__edit-button');
const popupAddButton = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupCloseButtonEdit = popupTypeEdit.querySelector('.popup__close')
const popupCloseButtonNewCard = document.querySelector('.popup__close-new-card');;
const editProfileform = document.querySelector('form[name="edit-profile"]');
const nameInput = popupTypeEdit.querySelector('.popup__input_type_name'); 
const jobInput = popupTypeEdit.querySelector('.popup__input_type_description'); 
const profileTitle = document.querySelector('.profile__title');
const profileDecription = document.querySelector('.profile__description');
const popupCloseImage = document.querySelector('.popup__close-image');
const newCardFormElement = popupNewCard.querySelector('.popup__form');
const popupAddCardLink = newCardFormElement.querySelector(".popup__input_type_url");
const popupAddCardName = newCardFormElement.querySelector('.popup__input_type_card-name');
const popupImageCard = document.querySelector('.popup_type_image');
const popupImageContent = popupImageCard.querySelector(".popup__image");
const popupImageCaption = popupImageCard.querySelector(".popup__caption");

function handleImageClick(el) {
  popupImageContent.alt = el.name;
  popupImageContent.src = el.link;
  popupImageCaption.textContent = el.name;
  
  openModal(popupImageCard);
}

function createCard(el,handleImageClick, handleLikeClick, deleteCard){
  return createCardEl(cardTemplate, el, handleImageClick,  handleLikeClick, deleteCard);
};
// вывод карточки
function output() {
  initialCards.forEach((el) => {
    placeList.append(createCard(el, handleImageClick, handleLikeClick, deleteCard));
  });
};
output();
// открытие и закрытие модального окна для popupTypeEdit
popupEditButton.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDecription.textContent;
  openModal(popupTypeEdit)
});
popupCloseButtonEdit.addEventListener('click', () => {
  closeModal(popupTypeEdit)
});
popupTypeEdit.addEventListener('click', closeOverlayModal);
// закрытие модального окна и редактирование профиля
editProfileform.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDecription.textContent = jobInput.value;
  closeModal(popupTypeEdit);
});
// открытие и закрытие модального окна для popupNewCard
popupAddButton.addEventListener('click', () => {
  openModal(popupNewCard)
});
popupCloseButtonNewCard.addEventListener('click', () => {
  closeModal(popupNewCard);
});
popupNewCard.addEventListener('click', closeOverlayModal)
// закрытие картинки 
popupCloseImage.addEventListener('click', () => {
  closeModal(popupImageCard)
});
popupImageCard.addEventListener('click', closeOverlayModal);
// добавление  картинки
newCardFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardData = {
    name: popupAddCardName.value,
    link: popupAddCardLink.value
  };
  placeList.prepend(createCard(cardData, handleImageClick, handleLikeClick, deleteCard));
  closeModal(popupNewCard);
  newCardFormElement.reset();
});

export {placeList, popupImageCard, popupImageContent, popupImageCaption};