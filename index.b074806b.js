!function(){var e={openModalBtn:document.querySelector('[data-action="open-team-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),galleryEl:document.querySelector(".gallery")};function o(){window.removeEventListener("keydown",n),document.body.classList.remove("show-modal")}function n(e){"Escape"===e.code&&o()}e.openModalBtn.addEventListener("click",(function(){window.addEventListener("keydown",n),document.body.classList.add("show-modal")})),e.closeModalBtn.addEventListener("click",o),e.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&o()}))}();
//# sourceMappingURL=index.b074806b.js.map
