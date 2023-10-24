// Открытие мобильного меню

var navMain = document.querySelector(".main-navigation");
var navToggle = document.querySelector(".main-navigation__toggle");

navMain.classList.remove("main-navigation--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-navigation--closed")) {
    navMain.classList.remove("main-navigation--closed");
    navMain.classList.add("main-navigation--opened");
  } else {
    navMain.classList.add("main-navigation--closed");
    navMain.classList.remove("main-navigation--opened");
  }
});


// Открытие модального окна

var cardButtons = document.querySelectorAll('.button-cart');
var modalCard = document.querySelector(".modal-catalog");

cardButtons.forEach(function(cardButton) {
  cardButton.addEventListener("click", function(event) {
    event.preventDefault();
    modalCard.classList.remove("modal-catalog--hidden");
  })
})

document.addEventListener("DOMContentLoaded", function() {
  var modal = document.querySelector('.modal-catalog');
  var modalButton = document.querySelector('.modal-catalog__button');

  modalButton.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.add('modal-catalog--hidden');
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.classList.add('modal-catalog--hidden');
    }
  });
});


// Отзывы 

document.addEventListener('DOMContentLoaded', function () {
  const reviews = document.querySelectorAll('.slider__item');
  let currentReviewIndex = 0;

  function showReview(index) {
    reviews.forEach((review, i) => {
      if (i === index) {
        review.style.display = 'block';
      } else {
        review.style.display = 'none';
      }
    });
  }

  const prevButton = document.querySelector('.reviews__prev');
  const nextButton = document.querySelector('.reviews__next');

  prevButton.addEventListener('click', function () {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    showReview(currentReviewIndex);
  });

  nextButton.addEventListener('click', function () {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    showReview(currentReviewIndex);
  });

  showReview(currentReviewIndex);
});
