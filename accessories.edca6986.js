new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});(()=>{const o={openModalBuyBtn:document.querySelector("[data-modal-buy-open]"),openModalAddBtn:document.querySelector("[data-modal-add-open]"),modal:document.querySelector("[data-modal]"),closeModalBtn:document.querySelector("[data-modal-close]"),modalBuy:document.querySelector("[data-content-buy]"),modalAdd:document.querySelector("[data-content-add]")};null!=o.modal&&(o.openModalBuyBtn.addEventListener("click",(function(){document.body.classList.toggle("modal-open"),o.modal.classList.toggle("backdrop--is-showen"),o.modalBuy.classList.toggle("content--is-hidden")})),o.openModalAddBtn.addEventListener("click",(function(){document.body.classList.toggle("modal-open"),o.modal.classList.toggle("backdrop--is-showen"),o.modalAdd.classList.toggle("content--is-hidden")})),o.closeModalBtn.addEventListener("click",(function(){document.body.classList.toggle("modal-open"),o.modal.classList.remove("backdrop--is-showen"),o.modalBuy.classList.add("content--is-hidden"),o.modalAdd.classList.add("content--is-hidden")})))})();
//# sourceMappingURL=accessories.edca6986.js.map
