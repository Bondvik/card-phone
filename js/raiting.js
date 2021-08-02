const starRateElement = document.querySelector('.star-rate');
const starRateItemsElement = document.querySelectorAll('.star-rate__item');

const starRateClickHandler = (evt) => {
  starRateItemsElement.forEach((elem) => {
    elem.classList.remove('active', 'current')
  })
  evt.target.classList.add('current');
  for (let i = 0; i <= evt.target.dataset.rate - 1; i++) {
    starRateItemsElement[i].classList.add('active');
  }
}

starRateElement.addEventListener('click', starRateClickHandler);
