new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});(()=>{const e={openModalBuyBtn:document.querySelector("[data-modal-buy-open]"),openModalAddBtn:document.querySelector("[data-modal-add-open]"),modal:document.querySelector("[data-modal]"),closeModalBtn:document.querySelector("[data-modal-close]"),modalBuy:document.querySelector("[data-content-buy]"),modalAdd:document.querySelector("[data-content-add]")};null!=e.modal&&(e.openModalBuyBtn.addEventListener("click",(function(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("backdrop--is-showen"),e.modalBuy.classList.toggle("content--is-hidden")})),e.openModalAddBtn.addEventListener("click",(function(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("backdrop--is-showen"),e.modalAdd.classList.toggle("content--is-hidden")})),e.closeModalBtn.addEventListener("click",(function(){document.body.classList.toggle("modal-open"),e.modal.classList.remove("backdrop--is-showen"),e.modalBuy.classList.add("content--is-hidden"),e.modalAdd.classList.add("content--is-hidden")})))})(),(()=>{const e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),d=()=>{const t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open");bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)};o.addEventListener("click",d),t.addEventListener("click",d),window.matchMedia("(min-width: 768px)").addEventListener("change",(t=>{t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();
//# sourceMappingURL=accessories.fd0a0747.js.map
