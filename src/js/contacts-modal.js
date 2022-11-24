(() => {
  const refs = {
    openModalBtn: document.querySelector("[contact-modal-open]"),
    closeModalBtn: document.querySelector("[contact-modal-close]"),
    modal: document.querySelector("[contact-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();