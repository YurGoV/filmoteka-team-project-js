export const refs = {
  openModalBtn: document.querySelector('[data-action="open-team-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),

  container: document.querySelector('.team-info'),
  btnAddToWatch: document.querySelector('.film-card-addToWatched'),
  btnAddToaddToQueue:document.querySelector('.film-card-addToQueue'),
  galleryEl: document.querySelector('.gallery'),
  pagination: document.querySelector('.pagination'),
  paginationList: document.querySelector('.pagination_list'),
  decrementBtn: document.querySelector('[data-decrement]'),
  incrementBtn: document.querySelector('[data-increment]'),
  searchFormEl: document.getElementById('search-form'),
  searchFormErrorEl: document.querySelector('.search-form__error'),
  modalBackdrop: document.querySelector('.modalbackdrop-film'),
  modalFilmBtnClose: document.querySelector('.film-card-close'),
  modalFilm: document.querySelector('.modal-film'),
  galleryLibraryEl: document.querySelector('.library-gallery'),
  filmCardEl: document.querySelector('.film-card'),
  filmCardElImg: document.querySelector('.film-card > .film-info'),
};