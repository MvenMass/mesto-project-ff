/**
 * Проверяет валидность поля и отображает ошибку, если есть.
 */
function validateInput(input, config) {
  const validityState = input.validity;
  const errorText = getErrorText(validityState, input, config);

  displayValidationError(input, errorText, config);
}

/**
 * Получает текст сообщения об ошибке на основе состояния валидности.
 */
function getErrorText(validityState, input, config) {
  if (validityState.valueMissing) {
    return "Вы пропустили это поле.";
  }

  if (validityState.tooShort) {
    return `Должно быть от ${input.minLength} до ${input.maxLength} символов.`;
  }

  if (validityState.patternMismatch) {
    return input.dataset.errorMessage || "Неверный формат.";
  }

  if (validityState.typeMismatch) {
    return input.type === "url" ? "Введите адрес картинки." : "Введите корректное значение.";
  }
  return "";
}
/**
 * Отображает или скрывает ошибку для поля ввода.
 */
function displayValidationError(input, errorText, config) {
  const form = input.closest(config.formSelector);
  const errorField = form.querySelector(`.${input.name}-input-error`);

  if (errorText) {
    if (errorField) {
      errorField.textContent = errorText;
      errorField.classList.add(config.errorClass);
      input.classList.add(config.inputErrorClass);
    }
  } else {
    if (errorField) {
      errorField.textContent = "";
      errorField.classList.remove(config.errorClass);
      input.classList.remove(config.inputErrorClass);
    }
  }
}

/**
 * Проверяет, все ли поля ввода валидны.
 */
function checkAllInputsValid(inputs) {
  return Array.from(inputs).every(input => input.validity.valid);
}

/**
 * Обновляет состояние кнопки отправки в зависимости от валидности полей.
 */
function updateSubmitButtonState(inputs, button, config) {
  const shouldDisable = !checkAllInputsValid(inputs);

  button.classList.toggle(config.inactiveButtonClass, shouldDisable);
  button.disabled = shouldDisable;
}

/**
 * Инициализирует валидацию для всех форм на странице.
*/
function enableValidation(config) {
  document.querySelectorAll(config.formSelector).forEach(form => {
    const inputs = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitButtonSelector);

    // Обработчик событий для полей ввода
    form.addEventListener("input", event => {
      if (event.target.matches(config.inputSelector)) {
        validateInput(event.target, config);
        updateSubmitButtonState(inputs, submitButton, config);
      }
    });

    // Отключаем отправку формы по умолчанию
    form.addEventListener("submit", event => event.preventDefault());

    // Устанавливаем начальное состояние кнопки отправки
    updateSubmitButtonState(inputs, submitButton, config);
  });
}

/**
 * Очищает ошибки валидации и деактивирует кнопку отправки.
 */
function clearValidation(form, config) {
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  const button = form.querySelector(config.submitButtonSelector);

  inputs.forEach(input => displayValidationError(input, "", config));

  button.classList.add(config.inactiveButtonClass);
  button.disabled = true;
}

export { enableValidation, clearValidation };