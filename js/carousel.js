const imgCarouselElement = document.querySelector('.img-carousel');
const imgFullElement = document.querySelector('.img-carousel__item:nth-child(1) img');
const imgItemsElement = document.querySelectorAll('.img-carousel__item');

const imgCarouselClickHandler = (evt) => {
  if (!evt.target.parentElement.classList.contains('img-carousel__item')) {
    return
  }

  imgItemsElement.forEach((item) => {
    item.classList.remove('img-carousel__item--current');
  })

  evt.target.parentElement.classList.add('img-carousel__item--current');
  
  let pathToImage = evt.target.src;
  let match = pathToImage.match(/photo-\d+/);
  let res = pathToImage.replace(match[0], match[0] + '-big');
  imgFullElement.src = res;
  if (pathToImage.match(/photo-\d+-big/)) {
    imgFullElement.src = pathToImage;
  }
}

imgCarouselElement.addEventListener('click', imgCarouselClickHandler);