import {popupImageCard, popupImageCaption, popupImageContent} from '../index.js';
import {openModal} from './modal.js';



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

  popupImageContent.alt = el.name;
  popupImageContent.src = el.link;
  popupImageCaption.textContent = el.name;
  
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


function createCard(el,handleImageClick, handleLikeClick, deleteCard){
  const cardTemplate = document.querySelector('#card-template').content;
  return createCardEl(cardTemplate, el, handleImageClick,  handleLikeClick, deleteCard);
};



// Вывести карточки на страницу


export {deleteCard, handleLikeClick, handleImageClick, popupImageCard, createCard};