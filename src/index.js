import {output, deleteCard, handleLikeClick, handleImageClick, popupImageCard, createCard} from './components/cards.js';
import {openModal, closeModal, closeOverlayModal} from './components/modal.js';
import './index.css';

const placeList = document.querySelector('.places__list');
const popupTypeEdit = document.querySelector('.popup_type_edit')
const popupEditButton = document.querySelector('.profile__edit-button');
const popupAddButton = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupCloseButtonEdit = document.querySelector('.popup__close')
const popupCloseButtonNewCard = document.querySelector('.popup__close-new-card');
// const formElement = popupTypeEdit.querySelector('.popup__form');
const nameInput = popupTypeEdit.querySelector('.popup__input_type_name'); 
const jobInput = popupTypeEdit.querySelector('.popup__input_type_description'); 
const profileTitle = document.querySelector('.profile__title');
const profileDecription = document.querySelector('.profile__description');
const popupCloseImage = document.querySelector('.popup__close-image');
const newCardFormElement = popupNewCard.querySelector('.popup__form');
const popupAddCardLink = newCardFormElement.querySelector(".popup__input_type_url");
const popupAddCardName = newCardFormElement.querySelector('.popup__input_type_card-name');


// вывод карточки
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
popupTypeEdit.addEventListener('click', () => {
  closeOverlayModal(popupTypeEdit)
});
// закрытие модального окна и редактирование профиля
popupTypeEdit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDecription.textContent = jobInput.value;
  closeModal(popupTypeEdit);
  closeOverlayModal(popupTypeEdit);
});
// открытие и закрытие модального окна для popupNewCard
popupAddButton.addEventListener('click', () => {
  openModal(popupNewCard)
});
popupCloseButtonNewCard.addEventListener('click', () => {
  closeModal(popupNewCard);
});
popupNewCard.addEventListener('click', () => {
  closeOverlayModal(popupNewCard);
});
// закрытие картинки 
popupCloseImage.addEventListener('click', () => {
  closeModal(popupImageCard)
});
popupImageCard.addEventListener('click', () => {
  closeOverlayModal(popupImageCard);
});
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

export {placeList};