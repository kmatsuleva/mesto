const mainContainer = document.querySelector('.main'),
  editProfilePopup = document.querySelector('.popup_action_edit-profile'),
  addCardPopup = document.querySelector('.popup_action_add-card'),
  openCardImagePopup = document.querySelector('.popup_action_open-card-image'),
  addCardButton = document.querySelector('.profile__add-button'),
  profileContainer = mainContainer.querySelector('.profile'),
  userName = profileContainer.querySelector('.profile__name'),
  userProfession = profileContainer.querySelector('.profile__profession'),
  editProfileButton = profileContainer.querySelector('.profile__edit-button'),
  placesSection = mainContainer.querySelector('.places'),
  placeTemplate = document.querySelector('#place').content;
  // form = editProfilePopup.querySelector('.popup__fields'),
  // formNameField = editProfilePopup.querySelector('.popup__field_value_name'),
  // formPositionField = editProfilePopup.querySelector('.popup__field_value_position'),


const initialCards = [
  {
    name: 'Байкал',
    link: './images/baikal.jpg'
  },
  {
    name: 'Москва',
    link: './images/moscow.jpg'
  },
  {
    name: 'Онега',
    link: './images/onega.jpg'
  },
  {
    name: 'Красноярск',
    link: './images/krasnoyarsk.jpg'
  },
  {
    name: 'Казань',
    link: './images/kazan.jpg'
  },
  {
    name: 'Санкт-Петербург',
    link: './images/saint-petersburg.jpg'
  }
];


const popupToggle = (popup) => {
  popup.classList.toggle('popup_opened');
}


// const popupOpen = (container, selector) => {
//   // formNameField.value = userName.textContent;
//   // formPositionField.value = userProfession.textContent;

//   container.classList.add(selector);
// }

// const popupClose = () => {
//   popupContainer.classList.remove('popup_opened');
// }

const formSubmitHandler = evt => {
  evt.preventDefault();

  userName.textContent = formNameField.value;
  userProfession.textContent = formPositionField.value;

  popupClose();
}

const bindPopupClose = () => {
  const popupCloseButtons = document.querySelectorAll('.popup__close');

  popupCloseButtons.forEach(item => {
    item.addEventListener('click', event => popupToggle(event.target.closest('.popup')));
  });
}


const editProfile = (event) => {
  popupToggle(editProfilePopup);
}

const addCard = () => {
  popupToggle(addCardPopup);
}

const openCardImage = () => {

}






initialCards.forEach(item => {
  const placeElement = placeTemplate.querySelector('.place').cloneNode(true),
        deleteButton = placeElement.querySelector('.place__remove'),
        likeButton = placeElement.querySelector('.place__rate');

  placeElement.querySelector('.place__title').textContent = item.name;
  placeElement.querySelector('.place__image').style.backgroundImage = `url(${item.link}`;

  deleteButton.addEventListener('click', event => event.target.closest('.place').remove());
  likeButton.addEventListener('click', event => event.target.classList.toggle('place__rate_active'));

  placesSection.append(placeElement);
});

editProfileButton.addEventListener('click', event => editProfile(event));
addCardButton.addEventListener('click', event => addCard(event));
// popupCloseButton.addEventListener('click', () => popupClose(popupContainer, 'popup_opened'));

// form.addEventListener('submit', formSubmitHandler);

bindPopupClose();
