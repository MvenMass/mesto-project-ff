// Конфигурация для взаимодействия с сервером
const config = { 
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-21", 
  headers: { 
    authorization: "26238813-c771-4ea0-a68b-8fd02c289a4d", 
    "Content-Type": "application/json", 
  }, 
};

// Функция для создания запросов
const sendRequest = async (endpoint, method = 'GET', body = null) => {
  const url = `${config.baseUrl}${endpoint}`;
  const options = {
    method,
    headers: config.headers,
    ...(body && { body: JSON.stringify(body) }),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
    return response.json();
  } catch (error) {
    return Promise.reject(error.message);
  }
};

// Функция для получения начальных карточек
const getCards = () => sendRequest('/cards');

// Функция для получения информации о пользователе
const getUser = () => sendRequest('/users/me');

// Функция для обновления информации о пользователе
const updateUser = (name, about) => sendRequest('/users/me', 'PATCH', { name, about });

// Функция для добавления новой карточки
const addNewCard = (name, link) => sendRequest('/cards', 'POST', { name, link });

// Функция для удаления карточки
const deleteCardElement = (cardId) => sendRequest(`/cards/${cardId}`, 'DELETE');

// Функция для обновления аватара пользователя
const updateAvatar = (avatarUrl) => sendRequest('/users/me/avatar', 'PATCH', { avatar: avatarUrl });

// Функция для лайка карточки
const likeCard = (cardId) => sendRequest(`/cards/likes/${cardId}`, 'PUT');

// Функция для снятия лайка с карточки
const unlikeCard = (cardId) => sendRequest(`/cards/likes/${cardId}`, 'DELETE');

export { 
  getCards,
  getUser,
  updateUser,
  addNewCard,
  deleteCardElement,
  updateAvatar,
  likeCard,
  unlikeCard,
};
