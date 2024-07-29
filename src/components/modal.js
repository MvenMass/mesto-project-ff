// открытие модального окна
function openModal (modal) {
    modal.classList.add('popup_is-opened')
}
//закрытие модального окна
function closeModal (modal) {
    modal.classList.remove('popup_is-opened')
    modal.classList.add('popup_is-animated')
}
// закрытие модального окна по Overlay и ESC
function closeOverlayModal(modal) {
        if (event.target === modal) {
            closeModal(modal);
        };
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal(modal);
        }
    });
}

  export {openModal, closeModal, closeOverlayModal};