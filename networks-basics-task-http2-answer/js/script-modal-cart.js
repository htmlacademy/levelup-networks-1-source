// Открытие модального окна при добавлении товара в корзину

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
