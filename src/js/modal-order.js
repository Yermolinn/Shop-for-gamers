(() => {
  const refs = {
    openModalBuyBtn: document.querySelector('[data-modal-buy-open]'),
    openModalAddBtn: document.querySelector('[data-modal-add-open]'),

    modal: document.querySelector('[data-modal]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),

    modalBuy: document.querySelector('[data-content-buy]'),
    modalAdd: document.querySelector('[data-content-add]'),
  };

  function closeModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.remove('backdrop--is-showen');

    refs.modalBuy.classList.add('content--is-hidden');
    refs.modalAdd.classList.add('content--is-hidden');
  }

  function toggleModalBuy() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('backdrop--is-showen');

    refs.modalBuy.classList.toggle('content--is-hidden');
  }

  function toggleModalAdd() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('backdrop--is-showen');

    refs.modalAdd.classList.toggle('content--is-hidden');
  }

  if (refs.modal != null) {
    refs.openModalBuyBtn.addEventListener('click', toggleModalBuy);

    refs.openModalAddBtn.addEventListener('click', toggleModalAdd);

    refs.closeModalBtn.addEventListener('click', closeModal);
  }
})();
