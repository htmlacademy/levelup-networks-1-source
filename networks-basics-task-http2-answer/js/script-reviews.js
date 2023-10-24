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
