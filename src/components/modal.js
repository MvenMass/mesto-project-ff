
// открытие модального окна
function closeOverlayModal(event) {
    const modal = event.currentTarget;
    if (event.target === modal) {
        closeModal(modal); 
    }
}
function openModal(modal) {
    modal.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeEscModal);
    modal.addEventListener("click", closeOverlayModal)
}

// закрытие модального окна
function closeModal(modal) {
    if (!modal) return; 
    modal.classList.remove('popup_is-opened');
    modal.classList.add('popup_is-animated');
    document.removeEventListener('keydown', closeEscModal);
    modal.removeEventListener("click", closeOverlayModal);
}

// закрытие модального окна по Overlay

// закрытие модального окна по ESC
function closeEscModal(event) {
    if (event.key === 'Escape') {
        const openedModal = document.querySelector('.popup_is-opened');
        if (openedModal) {
            closeModal(openedModal);
        }
    }
}

export { openModal, closeModal, closeOverlayModal };