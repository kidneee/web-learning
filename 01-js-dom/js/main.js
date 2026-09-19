const button = document.getElementById('js-button');
const cardList = document.getElementById('js-card-list');

button.addEventListener('click', function () {
  cardList.classList.toggle('is-hidden');
});
