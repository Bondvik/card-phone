const tabListElement = document.querySelector('.tab-list');
const tabListItemElement = document.querySelectorAll('.tab-list__item');
const articlesElement = document.querySelectorAll('.article');

const tabListClickHandler = (evt) => {
  const id = evt.target.dataset.id;
  if (id) {
    tabListItemElement.forEach((tab) => {
      tab.classList.remove('tab-list__item--active');
    });
    evt.target.classList.add('tab-list__item--active');

    articlesElement.forEach((article) => {
      article.classList.remove('article--active');
    });
    const element = document.getElementById(id);
    element.classList.add('article--active');
  }
}

tabListElement.addEventListener('click', tabListClickHandler);