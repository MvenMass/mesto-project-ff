// Конфигурация для взаимодействия с сервером
const config = {
    baseUrl: "https://nomoreparties.co/v1/wff-cohort-19",
    headers: {
      authorization: "bcfec8b0-2ae3-4b58-8a1b-3a3477b2dfdf",
      "Content-Type": "application/json",
    },
  };
  
  // Функция для проверки ответа сервера
  const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };
  
  // Функция для получения начальных карточек
  const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers,
    }).then(checkResponse);
  };
  
  // Функция для получения информации о пользователе
  const getUserInfo = () => {
    return fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers,
    }).then(checkResponse);
  };
  
  // Функция для обновления информации о пользователе
  const updateUserInfo = (name, about) => {
    return fetch(`${config.baseUrl}/users/me`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        name: name, // Новое имя пользователя
        about: about, // Новое описание пользователя
      }),
    }).then(checkResponse);
  };
  
  // Функция для добавления новой карточки
  const addNewCard = (name, link) => {
    return fetch(`${config.baseUrl}/cards`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify({
        name: name, // Имя новой карточки
        link: link, // Ссылка на изображение карточки
      }),
    }).then(checkResponse);
  };
  
  // Функция для удаления карточки
  const deleteCardElement = (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: config.headers,
    }).then(checkResponse);
  };
  
  // Функция для обновления аватара пользователя
  const updateAvatar = (avatarUrl) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: config.headers, 
      body: JSON.stringify({
        avatar: avatarUrl,
      }),
    }).then(checkResponse);
  };
  
  // Функция для лайка карточки
  const likeCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: config.headers,
    }).then(checkResponse);
  };
  
  // Функция для снятия лайка с карточки
  const unlikeCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: config.headers,
    }).then(checkResponse);
  };
  
  export {
    getInitialCards,
    getUserInfo,
    updateUserInfo,
    addNewCard,
    deleteCardElement,
    updateAvatar,
    likeCard,
    unlikeCard,
  };