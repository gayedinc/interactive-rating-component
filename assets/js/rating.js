const stars = document.querySelectorAll('.star');
const rateNumber = document.querySelector('.rateNumber');

for (const star of stars) {
  star.addEventListener('click', handleFeedback);
}

submitBtn.addEventListener('click', handleSecondScreen);

function handleFeedback() {
  rateNumber.innerText = this.innerText;
}

const ratingContainer = document.querySelector('.ratingContainer');
const thankContainer = document.querySelector('.thankContainer');

thankContainer.classList.add('d-none');

function handleSecondScreen() {

  ratingContainer.classList.add('d-none');
  thankContainer.classList.remove('d-none');
  thankContainer.classList.add('d-block');

}