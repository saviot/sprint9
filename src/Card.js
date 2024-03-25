import PopupWithImage from './PopupWithImages.js';

export default class Card {
  constructor(link, name) {
    this._link = link;
    this._name = name;
    this._cardElement = '';
  }

  createCardHtml() {
    const cardTemplate = document.getElementById('card-template');
    const cardClone = cardTemplate.content.cloneNode(true);
    const cardImage = cardClone.querySelector('.card__image img');
    const cardTitle = cardClone.querySelector('.card__info-title');

    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;

    this._cardElement = cardClone;

    this.setEventListener();
  }

  setEventListener() {
    const parent = this._cardElement.querySelector('.card__item');
    const activeCardIcon =
      this._cardElement.querySelector('.card__icon.active');
    const xCardIcon = this._cardElement.querySelector('.card__icon-x');
    const cardImage = this._cardElement.querySelector('.card__image img');
    const cardDelete = this._cardElement.querySelector('.card__delete');

    cardImage.addEventListener('click', () =>
      this.handleCardClick(this._link, this._name),
    );
    activeCardIcon.addEventListener('click', () =>
      this.toggleSvgLove(activeCardIcon, xCardIcon),
    );
    xCardIcon.addEventListener('click', () =>
      this.toggleSvgLove(activeCardIcon, xCardIcon),
    );
    cardDelete.addEventListener('click', () => this.deleteCard(parent));
  }

  deleteCard(card) {
    card.remove();
  }

  toggleSvgLove(activeCardIcon, xCardIcon) {
    if (activeCardIcon.classList.contains('active')) {
      activeCardIcon.classList.remove('active');
      xCardIcon.classList.add('active');
    } else {
      xCardIcon.classList.remove('active');
      activeCardIcon.classList.add('active');
    }
  }

  handleCardClick(link, name) {
    const modalPreviewImage = new PopupWithImage('modalImagePreview');
    modalPreviewImage.open(link, name);
  }
}
