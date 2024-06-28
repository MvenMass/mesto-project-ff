// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const placeList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function createCard(el, deleteCallback) {
    const card = cardTemplate.querySelector('.card').cloneNode(true);

    card.querySelector('.card__image').src = el.link;
    card.querySelector('.card__image').alt = el.name;
    card.querySelector('.card__title').textContent = el.name;
    
    const removeButton = card.querySelector('.card__delete-button');
    removeButton.addEventListener('click', deleteCallback);
    return card;
}
// @todo: Функция удаления карточки
function deleteCard(el) {
    const cardDelete = el.target.closest('.card');
    cardDelete.remove();
}
// @todo: Вывести карточки на страницу
function output() {
    initialCards.forEach((el) => {
        placeList.append(createCard(el, deleteCard));
    });
}

output();