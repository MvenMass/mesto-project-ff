// Импортируем функции для работы с API
import { likeCard, unlikeCard } from "./api.js";

// Функция для создания элемента карточки
function createCardElement(data, userId, handleImageClick, handleLike, handleDeleteClick) {
  const { link, name, likes, owner, _id } = data;
  const template = document.querySelector("#card-template").content;
  const cardElement = template.querySelector(".card").cloneNode(true);

  cardElement.dataset.cardId = _id;

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeCounter = cardElement.querySelector(".card__like-counter");

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  likeCounter.textContent = likes.length || "";
  likeCounter.classList.toggle("card__like-counter_is-active", likes.length > 0);
  likeButton.classList.toggle("card__like-button_is-active", likes.some(like => like._id === userId));

  cardImage.addEventListener("click", () => handleImageClick(data));
  likeButton.addEventListener("click", handleLike);
  
  if (owner._id === userId) {
    deleteButton.addEventListener("click", evt => handleDeleteClick(evt, _id, cardElement));
  } else {
    deleteButton.style.display = "none";
  }

  return cardElement;
}

// Обработчик клика по кнопке лайка
function handleLike(evt) {
  const likeButton = evt.target;
  const cardElement = likeButton.closest(".card");
  const likeCounter = cardElement.querySelector(".card__like-counter");
  const cardId = cardElement.dataset.cardId;
  const isLiked = likeButton.classList.contains("card__like-button_is-active");
  const toggleLike = isLiked ? unlikeCard : likeCard;
  
  toggleLike(cardId)
    .then(updatedCard => {
      likeButton.classList.toggle("card__like-button_is-active");
      likeCounter.textContent = updatedCard.likes.length || "";
      likeCounter.classList.toggle("card__like-counter_is-active", updatedCard.likes.length > 0);
    })
    .catch(err => console.log(err));
}


// Основная функция для создания карточки
function createCard(data, handleImageClick, handleLike, handleDeleteClick, userId) {
  return createCardElement(data, userId, handleImageClick, handleLike, handleDeleteClick);
}

// Экспорт функций
export { createCard, handleLike };