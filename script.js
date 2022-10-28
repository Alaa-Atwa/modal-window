'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal'); // to select multiple have the same class in this case

// functions
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// event listeners
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// global events happens over the document like button clicks
// closing the modal when the ESC pressed

document.addEventListener('keydown', function (event) {
  // you can put "e" or anything instead of "event"
  // the event argument passed as an argument
  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      // if the model doesn't contain the 'hidden' class
      closeModal();
    }
  }
});

