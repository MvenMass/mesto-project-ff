import { createCard, handleLike, removeCardElement } from './components/card.js'; 
import { openModal, closeModal } from './components/modal.js'; 
import { enableValidation, clearValidation } from "./components/validation.js"; 
import { getUser, getCards, updateUser, addNewCard, updateAvatar, deleteCardElement } from "./components/api.js"; 
import './index.css'; 

const cardTemplate = document.querySelector('#card-template').content;
const placeList = document.querySelector('.places__list');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileAvatar = document.querySelector(".profile__image");

const popupEditName = popupTypeEdit.querySelector('.popup__input_type_name');
const popupEditJob = popupTypeEdit.querySelector('.popup__input_type_description');
const newCardFormElement = popupNewCard.querySelector('.popup__form');
const popupAddCardName = newCardFormElement.querySelector('.popup__input_type_card-name');
const popupAddCardLink = newCardFormElement.querySelector(".popup__input_type_url");

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const avatarPopup = document.querySelector(".popup_type_edit-avatar");
const avatarForm = avatarPopup.querySelector(".popup__form");
const avatarInput = avatarPopup.querySelector(".popup__input_type_url");

const confirmPopup = document.querySelector(".popup_type_confirm");
const confirmButton = confirmPopup.querySelector(".popup__button_confirm");

const popupImageCard = document.querySelector('.popup_type_image');
const popupImage = popupImageCard.querySelector(".popup__image");
const popupCaption = popupImageCard.querySelector(".popup__caption");

function updateProfile(name, about) {
  profileTitle.textContent = name;
  profileDescription.textContent = about;
}

function handleFormSubmit(evt, apiMethod, onSuccess, loadingText) {
  evt.preventDefault();
  const submitButton = evt.target.querySelector(validationConfig.submitButtonSelector);
  submitButton.textContent = loadingText;
  apiMethod().then(onSuccess).catch(console.log).finally(() => {
    submitButton.textContent = submitButton.dataset.defaultText || "Сохранить";
  });
}

function handleProfileEdit() {
  popupEditName.value = profileTitle.textContent;
  popupEditJob.value = profileDescription.textContent;
  openModal(popupTypeEdit);
  clearValidation(popupTypeEdit, validationConfig);
}

function handleProfileFormSubmit(evt) {
  const popupnewName = popupEditName.value;
  const popupnewAbout = popupEditJob.value;
  handleFormSubmit(evt, () => updateUser(popupnewName, popupnewAbout), userInfo => {
    updateProfile(userInfo.name, userInfo.about);
    closeModal(popupTypeEdit);
  }, "Сохранение...");
}

function handleAddCardFormSubmit(evt) {
  const cardData = {
    name: popupAddCardName.value,
    link: popupAddCardLink.value,
  };
  handleFormSubmit(evt, () => addNewCard(cardData.name, cardData.link), newCard => {
    placeList.prepend(createCard(newCard, handleImageClick, handleLike, handleDeleteClick, newCard.owner._id));
    closeModal(popupNewCard);
    newCardFormElement.reset();
    // clearValidation(newCardFormElement, validationConfig);
  }, "Создание...");
}

function handleImageClick(data) {
  popupImage.src = data.link;
  popupImage.alt = data.name;
  popupCaption.textContent = data.name;
  openModal(popupImageCard);
}

function handleDeleteClick(evt, cardId, cardElement) {
  openModal(confirmPopup);
  confirmButton.onclick = () => {
    confirmButton.textContent = "Удаление...";
    deleteCardElement(cardId).then(() => {
      removeCardElement(cardElement);
      closeModal(confirmPopup);
    }).catch(console.log).finally(() => {
      confirmButton.textContent = "Да";
    });
  };
}

function renderUserInfo(userInfo) {
  updateProfile(userInfo.name, userInfo.about);
  profileAvatar.style.backgroundImage = `url(${userInfo.avatar})`;
}

function handleAvatarFormSubmit(evt) {
  const newAvatar = avatarInput.value;
  handleFormSubmit(evt, () => updateAvatar(newAvatar), userInfo => {
    profileAvatar.style.backgroundImage = `url(${userInfo.avatar})`;
    closeModal(avatarPopup);
  }, "Сохранение...");
}

function setupListeners() { 
  const popups = document.querySelectorAll('.popup');
  popups.forEach((popup) => {
    const closeButton = popup.querySelector('.popup__close');
    closeButton.addEventListener('click', () => closeModal(popup));
    popup.addEventListener('mousedown', (event) => {
      if (event.target === event.currentTarget) {
        closeModal(popup);
      }
    });
    popup.classList.add('popup_is-animated');
  });
  document.querySelector('.profile__edit-button').addEventListener("click", handleProfileEdit);
  document.querySelector('.profile__add-button').addEventListener("click", () => { 
    openModal(popupNewCard); 
    newCardFormElement.reset(); 
    clearValidation(newCardFormElement, validationConfig); 
  });
  profileAvatar.addEventListener("click", () => { 
    openModal(avatarPopup); 
    avatarForm.reset(); 
    clearValidation(avatarForm, validationConfig); 
  });
  avatarForm.addEventListener("submit", handleAvatarFormSubmit); 
  newCardFormElement.addEventListener("submit", handleAddCardFormSubmit); 
  popupTypeEdit.querySelector('.popup__form').addEventListener("submit", handleProfileFormSubmit); 
} 
Promise.all([getUser(), getCards()]).then(([userInfo, cards]) => {
  renderUserInfo(userInfo);
  cards.forEach(card => placeList.append(createCard(card, handleImageClick, handleLike, handleDeleteClick, userInfo._id)));
}).catch(console.log);

setupListeners();
enableValidation(validationConfig);

export { placeList, popupImageCard, popupImage, popupCaption };
