import {createCard, handleLikeClick} from './components/card.js';
import {openModal, closeModal, closeOverlayModal} from './components/modal.js';
import { enableValidation, clearValidation } from "./components/validation.js";
import {
  getUserInfo,
  getInitialCards,
  updateUserInfo,
  addNewCard,
  updateAvatar,
  deleteCardElement,
} from "./components/api.js";
// import { initialCards } from './components/cards.js';
import './index.css';

const cardTemplate = document.querySelector('#card-template').content;
const placeList = document.querySelector('.places__list');
const popupTypeEdit = document.querySelector('.popup_type_edit')
const popupEditButton = document.querySelector('.profile__edit-button');
const popupAddButton = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupCloseButtonAdd = popupNewCard.querySelector('.popup__close')
const popupCloseButtonEdit = popupTypeEdit.querySelector('.popup__close')
const popupCloseButtonNewCard = document.querySelector('.popup__close-new-card');;
const editProfileform = document.querySelector('form[name="edit-profile"]');
const nameInput = popupTypeEdit.querySelector('.popup__input_type_name'); 
const jobInput = popupTypeEdit.querySelector('.popup__input_type_description'); 
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileAvatar = document.querySelector(".profile__image");
const popupCloseImage = document.querySelector('.popup__close-image');
const popupImageCard = document.querySelector('.popup_type_image');
const popupImageContent = popupImageCard.querySelector(".popup__image");
const popupImageCaption = popupImageCard.querySelector(".popup__caption");
const newCardFormElement = popupNewCard.querySelector('.popup__form');
const popupAddCardName = newCardFormElement.querySelector('.popup__input_type_card-name');
const popupAddCardLink = newCardFormElement.querySelector(".popup__input_type_url");

const validationConfig = {
  formSelector: ".popup__form", // Селектор формы
  inputSelector: ".popup__input", // Селектор полей ввода
  submitButtonSelector: ".popup__button", // Селектор кнопки отправки
  inactiveButtonClass: "popup__button_disabled", // Класс для неактивной кнопки
  inputErrorClass: "popup__input_type_error", // Класс для ошибочного ввода
  errorClass: "popup__error_visible", // Класс для отображения ошибки
};


const confirmPopup = document.querySelector(".popup_type_confirm");
const confirmButton = confirmPopup.querySelector(".popup__button_confirm");
const popupImage = popupImageCard.querySelector(".popup__image");
const popupCaption = popupImageCard.querySelector(".popup__caption");

const renderLoading = ({ buttonElement, loadingText }) => {
  buttonElement.textContent = loadingText;
};

function handleProfileEdit() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(popupTypeEdit);
  clearValidation(editProfileform, validationConfig);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const submitButton = editProfileform.querySelector(
    validationConfig.submitButtonSelector
  ); // Находим кнопку отправки формы
  renderLoading({ buttonElement: submitButton, loadingText: "Сохранение..." }); // Показываем состояние загрузки

  const newName = nameInput.value;
  const newAbout = jobInput.value;

  updateUserInfo(newName, newAbout)
    .then((userInfo) => {
      profileTitle.textContent = userInfo.name; // Обновляем заголовок профиля
      profileDescription.textContent = userInfo.about; // Обновляем описание профиля
      closeModal(profilePopup);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      renderLoading({ buttonElement: submitButton, loadingText: "Сохранить" });
    });
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  const submitButton = newCardFormElement.querySelector(
    validationConfig.submitButtonSelector
  );
  renderLoading({ buttonElement: submitButton, loadingText: "Создание..." }); 

  const cardData = {
    name: popupAddCardName.value, // Получаем название карточки
    link: popupAddCardLink.value, // Получаем URL карточки
  };

  addNewCard(cardData.name, cardData.link)
    .then((newCard) => {
      const userId = newCard.owner._id;
      placeList.prepend(
        createCard(
          newCard,
          handleImageClick,
          handleLikeClick,
          handleDeleteClick,
          userId
        )
      );
      closeModal(popupNewCard);
      newCardFormElement.reset();
      clearValidation(newCardFormElement, validationConfig);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      renderLoading({ buttonElement: submitButton, loadingText: "Создать" });
    });
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
    renderLoading({ buttonElement: confirmButton, loadingText: "Удаление..." });
    deleteCardElement(cardId)
      .then(() => {
        cardElement.remove();
        closeModal(confirmPopup);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        renderLoading({ buttonElement: confirmButton, loadingText: "Да" });
      });
  };
}

// Функция для создания элемента карточки
function createCardElement(cardData, userId) {
  return createCard(
    cardData,
    handleImageClick,
    handleLikeClick,
    handleDeleteClick,
    userId
  ); // Передаем необходимые обработчики
}

// Функция для рендеринга всех карточек
function renderCards(cards, userId) {
  cards.forEach((cardData) =>
    placeList.appendChild(createCardElement(cardData, userId))
  );
}

function renderUserInfo({ name, about, avatar }) {
  profileTitle.textContent = name; // Обновляем заголовок профиля
  profileDescription.textContent = about; // Обновляем описание профиля
  profileAvatar.style.backgroundImage = `url(${avatar})`; // Обновляем аватар профиля
}

// Функция для открытия попапа редактирования аватара
function handleEditAvatarClick() {
  openModal(avatarPopup);
  avatarForm.reset();
  clearValidation(avatarForm, validationConfig);
}

function handleAvatarFormSubmit(evt) {
  evt.preventDefault();

  const submitButton = avatarForm.querySelector(
    validationConfig.submitButtonSelector
  ); // Находим кнопку отправки формы
  renderLoading({ buttonElement: submitButton, loadingText: "Сохранение..." });
  const newAvatar = avatarInput.value;

  updateAvatar(newAvatar)
    .then((userInfo) => {
      profileAvatar.style.backgroundImage = `url(${userInfo.avatar})`;
      closeModal(avatarPopup);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      renderLoading({ buttonElement: submitButton, loadingText: "Сохранить" });
    });
}

Promise.all([getUserInfo(), getInitialCards()])
  .then(([userInfo, initialCards]) => {
    renderUserInfo(userInfo);
    renderCards(initialCards, userInfo._id); 
  })
  .catch((err) => console.log(err));


popupEditButton.addEventListener("click", handleProfileEdit, closeOverlayModal);
popupCloseButtonEdit.addEventListener("click", () => closeModal(popupTypeEdit), closeOverlayModal(popupTypeEdit));
editProfileform.addEventListener("submit", handleProfileFormSubmit);

popupAddButton.addEventListener("click", () => {
  openModal(popupNewCard);
 newCardFormElement.reset();
  clearValidation(newCardFormElement, validationConfig);
});


popupCloseButtonAdd.addEventListener("click", () => closeModal(popupNewCard)); // Закрытие попапа добавления карточки
newCardFormElement.addEventListener("submit", handleAddCardFormSubmit); // Обработка отправки формы добавления карточки

popupCloseImage.addEventListener("click", () =>
  closeModal(popupImageCard)
);


const avatarPopup = document.querySelector(".popup_type_edit-avatar");
const avatarForm = avatarPopup.querySelector(".popup__form"); 
const avatarInput = avatarPopup.querySelector(".popup__input_type_url");
const avatarCloseButton = avatarPopup.querySelector(".popup__close");

// Добавляем обработчики событий для редактирования аватара
const editAvatarButton = document.querySelector(".profile__image");

editAvatarButton.addEventListener("click", handleEditAvatarClick);
avatarCloseButton.addEventListener("click", () => closeModal(avatarPopup));
avatarForm.addEventListener("submit", handleAvatarFormSubmit);

 export {placeList, popupImageCard, popupImageContent, popupImageCaption};