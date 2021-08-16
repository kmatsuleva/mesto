const mainContainer = document.querySelector('.main'),
  popupContainer = document.querySelector('.popup'),
  profileContainer = mainContainer.querySelector('.profile'),
  userName = profileContainer.querySelector('.profile__name'),
  userProfession = profileContainer.querySelector('.profile__profession'),
  popupCloseButton = popupContainer.querySelector('.popup__close'),
  profileEditButton = profileContainer.querySelector('.profile__edit-button'),
  form = popupContainer.querySelector('.popup__fields'),
  formNameField = popupContainer.querySelector('.popup__field_value_name'),
  formPositionField = popupContainer.querySelector('.popup__field_value_position'),
  placesSection = mainContainer.querySelector('.places'),
  placeTemplate = placesSection.querySelector('#place').content;

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



const popupOpen = (container, selector) => {
  formNameField.value = userName.textContent;
  formPositionField.value = userProfession.textContent;

  container.classList.add(selector);
}

const popupClose = (container, selector) => {
  container.classList.remove(selector);
}

const formSubmitHandler = evt => {
  evt.preventDefault();

  userName.textContent = formNameField.value;
  userProfession.textContent = formPositionField.value;

  popupClose(popupContainer, 'popup_opened');
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

profileEditButton.addEventListener('click', () => popupOpen(popupContainer, 'popup_opened'));
popupCloseButton.addEventListener('click', () => popupClose(popupContainer, 'popup_opened'));

form.addEventListener('submit', formSubmitHandler);
