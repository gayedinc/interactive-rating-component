const stars = document.querySelectorAll('.star');
const rateNumber = document.querySelector('.rateNumber');

for (const star of stars) {
  star.addEventListener('click', handleFeedback);
}

submitBtn.addEventListener('click', handleSecondScreen);

let selectedRating = null;

function handleFeedback() {
  selectedRating = this.innerText;
  rateNumber.innerText = selectedRating;

  for (const star of stars) {
    star.classList.remove('selected');
    star.classList.add('selected');
  }
}

const ratingContainer = document.querySelector('.ratingContainer');
const thankContainer = document.querySelector('.thankContainer');

thankContainer.classList.add('d-none');

function handleSecondScreen() {

  if (!selectedRating) {
    alert('Please provide feedback.')
    return;
  }

  ratingContainer.classList.add('d-none');
  thankContainer.classList.add('d-block');
}