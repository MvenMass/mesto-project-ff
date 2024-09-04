// открытие модального окна
function openModal(modal) {
    if (!modal.classList.contains('popup_is-animated')) {
        modal.classList.add('popup_is-animated'); 
    }
    modal.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeEscModal);
    modal.addEventListener("click", closeOverlayModal)
}
// закрытие модального окна по Overlay
function closeOverlayModal(event) {
    const modal = event.currentTarget;
    if (event.target === modal) {
        closeModal(modal); 
    }
}
// закрытие модального окна по ESC
function closeEscModal(event) {
    if (event.key === 'Escape') {
        const openedModal = document.querySelector('.popup_is-opened');
        if (openedModal) {
            closeModal(openedModal);
        }
    }
}
// закрытие модального окна
function closeModal(modal) {
    if (!modal) return; 
    modal.classList.remove('popup_is-opened');
    // modal.classList.add('popup_is-animated');
    document.removeEventListener('keydown', closeEscModal);
    modal.removeEventListener("click", closeOverlayModal);
}

export { openModal, closeModal, closeOverlayModal };