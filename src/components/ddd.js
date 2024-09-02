// function validateName(nameInput, value) {
//     const nameValue = nameInput.value;
//     const nameRegex = /^[а-яА-Яa-zA-Z\- ]{2,40}$/;
//     const isValid = nameRegex.test(nameValue);

//     if (!isValid) {
//         nameInput.classList.add('error');
//         document.getElementById('nameError').textContent = "Имя должно содержать от 2 до 40 символов и может содержать только буквы, дефисы и пробелы.";
//     } else {
//         nameInput.classList.remove('error');
//         document.getElementById('nameError').textContent = "";
//     }

//     toggleSaveButton();
//     return isValid;
// }

// function validateAbout(jobInput, value) {
//     const aboutValue = jobInput.value;
//     const aboutRegex = /^[а-яА-Яa-zA-Z\- ]{2,200}$/;
//     const isValid = aboutRegex.test(aboutValue);

//     if (!isValid) {
//         jobInput.classList.add('error');
//         document.getElementById('aboutError').textContent = "Поле должно содержать от 2 до 200 символов и может содержать только буквы, дефисы и пробелы.";
//     } else {
//         jobInput.classList.remove('error');
//         document.getElementById('aboutError').textContent = "";
//     }

//     toggleSaveButton();
//     return isValid;
// }

// function toggleSaveButton() {
//     if (validateName() && validateAbout()) {
//         popupBtn.disabled = false;
//     } else {
//         popupBtn.disabled = true;
//     }
// }

// // Очистка ошибок валидации при открытии формы
// function clearValidationErrors() {
//     nameInput.classList.remove('error');
//     document.getElementById('nameError').textContent = "";
//     jobInput.classList.remove('error');
//     document.getElementById('aboutError').textContent = "";
// }

// Пример вызова очистки ошибок при открытии модального окна
// function validateInput(nameInput, toggleSaveButton) {
//     const value = inputElement.value.trim();
//     const pattern = new RegExp(inputElement.getAttribute('pattern'));
//     const errorMessage = inputElement.getAttribute('data-error');
//     const isValid = pattern.test(value);

//     // Получаем элемент для отображения ошибки, ожидается, что он идет сразу после input
//     const errorElement = inputElement.nextElementSibling;

//     if (!isValid) {
//         inputElement.classList.add('error');
//         errorElement.textContent = errorMessage;
//     } else {
//         inputElement.classList.remove('error');
//         errorElement.textContent = "";
//     }

//     if (toggleSaveButton) {
//         toggleSaveButton();
//     }

//     return isValid;
// }

// // function validateAbout(jobInput, toggleSaveButton) {
// //     const aboutValue = jobInput.value.trim();
// //     const aboutRegex = /^[а-яА-Яa-zA-Z\- ]{2,200}$/;
// //     const isValid = aboutRegex.test(aboutValue);

// //     if (!isValid) {
// //         jobInput.classList.add('error');
// //         document.getElementById('aboutError').textContent = "Поле должно содержать от 2 до 200 символов и может содержать только буквы, дефисы и пробелы.";
// //     } else {
// //         jobInput.classList.remove('error');
// //         document.getElementById('aboutError').textContent = "";
// //     }

// //     if (toggleSaveButton) {
// //         toggleSaveButton();
// //     }

// //     return isValid;
// // }

// function clearValidationErrors(inputs) {
//     inputs.forEach(input => {
//         input.classList.remove('error');
//         const errorElement = input.nextElementSibling;
//         if (errorElement) {
//             errorElement.textContent = "";
//         }
//     });
// }

// function toggleSaveButton(popupBtn, inputs) {
//     const isValid = inputs.every(input => validateInput(input));

//     if (isValid) {
//         // Активируем кнопку и удаляем класс ошибки
//         popupBtn.disabled = false;
//         popupBtn.classList.remove('error_btn');
//     } else {
//         // Деактивируем кнопку и добавляем класс ошибки
//         popupBtn.disabled = true;
//         popupBtn.classList.add('error_btn');
//     }
// }

// export { validateInput, toggleSaveButton, clearValidationErrors };

// validate.js

// Проверка валидности поля ввода
function validateInput(inputElement, settings) {
    if (!inputElement.validity.valid) {
        inputElement.classList.add(settings.errorClass);
        inputElement.setCustomValidity(inputElement.getAttribute('data-error') || settings.errorMessage);
    } else {
        inputElement.classList.remove(settings.errorClass);
        inputElement.setCustomValidity('');
    }

    // Отображаем сообщение об ошибке под полем ввода
    const errorElement = inputElement.nextElementSibling;
    if (errorElement) {
        errorElement.textContent = inputElement.validationMessage;
    }
    
    return inputElement.validity.valid;
}

// Очистка ошибок валидации
function clearValidationErrors(inputs) {
    inputs.forEach(inputElement => {
        inputElement.classList.remove('error');
        const errorElement = inputElement.nextElementSibling;
        if (errorElement) {
            errorElement.textContent = '';
        }
    });
}

// Переключение состояния кнопки
function toggleButtonState(formElement, settings) {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);
    const hasInvalidInput = inputList.some(inputElement => !inputElement.validity.valid);

    if (hasInvalidInput) {
        buttonElement.disabled = true;
        buttonElement.classList.add(settings.inactiveButtonClass);
    } else {
        buttonElement.disabled = false;
        buttonElement.classList.remove(settings.inactiveButtonClass);
    }
}

// Установка обработчиков событий для полей ввода
function setEventListeners(formElement, settings) {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));

    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            validateInput(inputElement, settings);
            toggleButtonState(formElement, settings);
        });
    });
}

// Включение валидации для всех форм
function enableValidation(settings) {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
    formList.forEach(formElement => {
        setEventListeners(formElement, settings);
    });
}

export { enableValidation, clearValidationErrors, validateInput, toggleButtonState };
