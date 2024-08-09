// import {createCardEl, handleLikeClick, handleDeleteCard} from './components/card.js';
// import {openModal, closeModal, closeOverlayModal} from './components/modal.js';
// // import { initialCards } from './components/cards.js';
// import {enableValidation, clearValidation } from "./components/validation.js";
// import {getUserInfo, getInitialCards, updateUserInfo, addNewCard, updateAvatar} from "./components/api.js";
// import './index.css';

// const cardTemplate = document.querySelector('#card-template').content;
// const placeList = document.querySelector('.places__list');
// const popupTypeEdit = document.querySelector('.popup_type_edit')
// const profileAvatar = document.querySelector(".profile__image");
// const popupEditButton = document.querySelector('.profile__edit-button');
// const popupAddButton = document.querySelector('.profile__add-button');
// const popupNewCard = document.querySelector('.popup_type_new-card');
// const popupCloseButtonEdit = popupTypeEdit.querySelector('.popup__close')
// const popupCloseButtonNewCard = document.querySelector('.popup__close-new-card');;
// const editProfileform = document.querySelector('form[name="edit-profile"]');
// const nameInput = popupTypeEdit.querySelector('.popup__input_type_name'); 
// const jobInput = popupTypeEdit.querySelector('.popup__input_type_description'); 
// const profileTitle = document.querySelector('.profile__title');
// const profileDescription = document.querySelector('.profile__description');
// const popupCloseImage = document.querySelector('.popup__close-image');
// const newCardFormElement = popupNewCard.querySelector('.popup__form');
// const popupAddCardLink = newCardFormElement.querySelector(".popup__input_type_url");
// const popupAddCardName = newCardFormElement.querySelector('.popup__input_type_card-name');
// const popupImageCard = document.querySelector('.popup_type_image');
// const popupImageContent = popupImageCard.querySelector(".popup__image");
// const popupImageCaption = popupImageCard.querySelector(".popup__caption");

// // Конфигурация для валидации
// const validationConfig = {
//   formSelector: ".popup__form",
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__button",
//   inactiveButtonClass: "popup__button_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__error_visible",
// };

// // Функция для отображения состояния загрузки
// const renderLoading = ({ buttonElement, isLoading }) => {
//   if (isLoading) {
//     buttonElement.textContent = 'Сохранение...';
//   } else {
//     buttonElement.textContent = 'Сохранить';
//   }
// };

// // Функции для обработки ошибок и активации кнопки "Сохранить" в модальном окне профиля
// function handleProfileEdit() {
//   nameInput.value = profileTitle.textContent;
//   jobInput.value = profileDescription.textContent;
//   openModal(profilePopup);
//   clearValidation(profileForm, validationConfig);
// }

// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();

//   const submitButton = profileForm.querySelector(validationConfig.submitButtonSelector);
//   renderLoading({ buttonElement: submitButton, isLoading: true });

//   const newName = nameInput.value;
//   const newAbout = jobInput.value;

//   updateUserInfo(newName, newAbout)
//     .then((userInfo) => {
//       profileTitle.textContent = userInfo.name;
//       profileDescription.textContent = userInfo.about;
//       closeModal(profilePopup);
//     })
//     .catch((err) => console.log(err))
//     .finally(() => {
//       renderLoading({ buttonElement: submitButton, isLoading: false });
//     });
// }

// function handleAddCardFormSubmit(evt) {
//   evt.preventDefault();

//   const submitButton = addCardForm.querySelector(validationConfig.submitButtonSelector);
//   renderLoading({ buttonElement: submitButton, isLoading: true });

//   const cardData = {
//     name: cardNameInput.value,
//     link: cardLinkInput.value,
//   };

//   addNewCard(cardData.name, cardData.link)
//     .then((newCard) => {
//       const userId = newCard.owner._id; // Добавляем userId
//       cardList.prepend(
//         createCard(
//           newCard,
//           handleImageClick,
//           handleLikeClick,
//           handleDeleteClick,
//           userId // Передаем userId в createCard
//         )
//       );
//       closeModal(addCardPopup);
//       addCardForm.reset(); // Очистка полей формы
//       clearValidation(addCardForm, validationConfig);
//     })
//     .catch((err) => console.log(err))
//     .finally(() => {
//       renderLoading({ buttonElement: submitButton, isLoading: false });
//     });
// }


// function handleImageClick(el) {
//   popupImageContent.alt = el.name;
//   popupImageContent.src = el.link;
//   popupImageCaption.textContent = el.name;
  
//   openModal(popupImageCard);
// }

// function createCard(el,handleImageClick, handleLikeClick, deleteCard, userId){
//   return createCardEl(cardTemplate, el, handleImageClick,  handleLikeClick, deleteCard, userId);
// };
// // вывод карточки
// function output(el, userId) {
//   el.forEach((el) => 
//     placeList.appendChild(createCardEl(cardTemplate, el, handleImageClick, handleLikeClick, handleDeleteCard, userId))
//   );
// }

// output();

// function renderUserInfo({ name, about, avatar }) {
//   profileTitle.textContent = name;
//   profileDescription.textContent = about;
//   profileAvatar.style.backgroundImage = `url(${avatar})`;
// }
// // открытие и закрытие модального окна для popupTypeEdit
// popupEditButton.addEventListener('click', () => {
//   nameInput.value = profileTitle.textContent;
//   jobInput.value = profileDescription.textContent;
//   openModal(popupTypeEdit)
// });
// popupCloseButtonEdit.addEventListener('click', () => {
//   closeModal(popupTypeEdit)
// });
// popupTypeEdit.addEventListener('click', closeOverlayModal);
// // закрытие модального окна и редактирование профиля
// function handleEditAvatarClick() {
//   openModal(avatarPopup);
//   avatarForm.reset(); // Очистка полей формы
//   clearValidation(avatarForm, validationConfig);
// }

// editProfileform.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   profileTitle.textContent = nameInput.value;
//   profileDescription.textContent = jobInput.value;
//   closeModal(popupTypeEdit);
// });
// // открытие и закрытие модального окна для popupNewCard
// popupAddButton.addEventListener("click", () => {
//   openModal(addCardPopup);
//   addCardForm.reset(); // Очистка полей формы
//   clearValidation(addCardForm, validationConfig);
// });
// popupCloseButtonNewCard.addEventListener('click', () => {
//   closeModal(popupNewCard);
// });
// popupNewCard.addEventListener('click', closeOverlayModal)
// // закрытие картинки 
// popupCloseImage.addEventListener('click', () => {
//   closeModal(popupImageCard)
// });
// popupImageCard.addEventListener('click', closeOverlayModal);
// // добавление  картинки
// newCardFormElement.addEventListener('submit', (evt) => {
//   const submitButton = avatarForm.querySelector(validationConfig.submitButtonSelector);
//   renderLoading({ buttonElement: submitButton, isLoading: true });

//   const newAvatar = avatarInput.value;

//   updateAvatar(newAvatar)
//     .then((userInfo) => {
//       profileAvatar.style.backgroundImage = `url(${userInfo.avatar})`;
//       closeModal(avatarPopup);
//     })
//     .catch((err) => console.log(err))
//     .finally(() => {
//       renderLoading({ buttonElement: submitButton, isLoading: false });
//     });
// });

// Promise.all([getUserInfo(), getInitialCards()])
//   .then(([userInfo, initialCards]) => {
//     renderUserInfo(userInfo);
//     renderCards(initialCards, userInfo._id);
//   })
//   .catch((err) => console.log(err));


//   viewImageCloseButton.addEventListener("click", () => closeModal(viewImagePopup));

// const avatarPopup = document.querySelector(".popup_type_edit-avatar");
// const avatarForm = avatarPopup.querySelector(".popup__form");
// const avatarInput = avatarPopup.querySelector(".popup__input_type_url");
// const avatarCloseButton = avatarPopup.querySelector(".popup__close");

// // Добавьте обработчик для кнопки редактирования аватара
// const editAvatarButton = document.querySelector(".profile__image");

// editAvatarButton.addEventListener("click", handleEditAvatarClick);
// avatarCloseButton.addEventListener("click", () => closeModal(avatarPopup));
// avatarForm.addEventListener("submit", handleAvatarFormSubmit);

// enableValidation(validationConfig);

// export {placeList, popupImageCard, popupImageContent, popupImageCaption};