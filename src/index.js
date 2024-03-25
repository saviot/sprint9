import './blocks/index.css';

import Card from './Card.js';
import FormValidator from './FormValidator.js';
import PopupWithForm from './PopupWIthForm.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';

document.addEventListener('DOMContentLoaded', () => {
  // ######### PROFILE #########
  (function () {
    const btnOpenModal = document.getElementById('openModalBtn');
    const userInfo = new UserInfo();
    btnOpenModal.addEventListener('click', function () {
      // editProfilePopup.open();
      const popupForm = new PopupWithForm('modal', {
        handleFormSubmit,
      });
      popupForm.open();

      // set value
      document
        .getElementById('modal')
        .querySelector('.modal__content')
        .querySelector('input[name="nama"]').value =
        userInfo.getUserInfo().nama;
      this.titleElement = document
        .getElementById('modal')
        .querySelector('.modal__content')
        .querySelector('input[name="title"]').value =
        userInfo.getUserInfo().title;
    });

    // create new card
    const handleFormSubmit = (formData) => {
      userInfo.setUserInfo(formData);
    };
  })();

  // ######### CARD #########
  (function () {
    // staic card
    const initialCards = [
      {
        name: 'Lembah Yosemite',
        link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
      },
      {
        name: 'Danau Louise',
        link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
      },
      {
        name: 'Pegunungan Gundul',
        link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg',
      },
      {
        name: 'Gunung Latemar',
        link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg',
      },
      {
        name: 'Taman Nasional Vanoise',
        link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg',
      },
      {
        name: 'Lago di Braies',
        link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg',
      },
    ];

    // init card
    const initialCardsSection = new Section(
      {
        items: initialCards,
        renderer: (item) => {
          const card = new Card(item.link, item.name);
          card.createCardHtml();
          if (item.link && item.name) {
            initialCardsSection.addItemToContainer(card._cardElement);
          }
        },
      },
      '.card__container',
    );

    // open create card
    const btnCreateCard = document.getElementById('openModalCardBtn');
    btnCreateCard.addEventListener('click', function () {
      const popupForm = new PopupWithForm('modalCreateCard', {
        handleFormSubmit,
      });
      popupForm.open();
    });

    // create new card
    const handleFormSubmit = (formData) => {
      const card = new Card(formData.link_gambar, formData.nama_tempat);
      card.createCardHtml();
      if (formData.link_gambar && formData.nama_tempat) {
        document.querySelector('.card__container').prepend(card._cardElement);
      }
    };

    // create card
    initialCardsSection.renderer();
  })();

  // Run the enableValidation function
  new FormValidator({
    formSelector: '.form',
    inputSelector: '.input',
    submitButtonSelector: '.button',
    inactiveButtonClass: 'disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: '.error-message',
  });
});
