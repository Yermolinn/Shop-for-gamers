!function(){var e,o,t,d;e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),d=function(){var t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open"),o.classList.toggle("active"),bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)},o.addEventListener("click",d),t.addEventListener("click",d),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(t){t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}));var n;new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});!function(){var e={openModalBtn:document.querySelector("[contact-modal-open]"),closeModalBtn:document.querySelector("[contact-modal-close]"),modal:document.querySelector("[contact-modal]"),body:document.querySelector("body")};function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),null!=(n={openModalBuyBtn:document.querySelector("[data-modal-buy-open]"),openModalAddBtn:document.querySelector("[data-modal-add-open]"),modal:document.querySelector("[data-modal]"),closeModalBtn:document.querySelector("[data-modal-close]"),modalBuy:document.querySelector("[data-content-buy]"),modalAdd:document.querySelector("[data-content-add]"),body:document.querySelector("body")}).modal&&(n.openModalBuyBtn.addEventListener("click",(function(){document.body.classList.toggle("modal-open"),n.modal.classList.toggle("backdrop--is-showen"),n.modalBuy.classList.toggle("content--is-hidden"),n.body.classList.toggle("no-scroll")})),n.openModalAddBtn.addEventListener("click",(function(){document.body.classList.toggle("modal-open"),n.modal.classList.toggle("backdrop--is-showen"),n.modalAdd.classList.toggle("content--is-hidden"),n.body.classList.toggle("no-scroll")})),n.closeModalBtn.addEventListener("click",(function(){document.body.classList.toggle("modal-open"),n.modal.classList.remove("backdrop--is-showen"),n.modalBuy.classList.add("content--is-hidden"),n.modalAdd.classList.add("content--is-hidden")})))}();
//# sourceMappingURL=accessories.21ed335b.js.map
