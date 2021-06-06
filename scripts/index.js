let mainContainer = document.querySelector('.main'),
  popupContainer = document.querySelector('.popup'),
  profileContainer = mainContainer.querySelector('.profile'),
  userName = profileContainer.querySelector('.profile__name'),
  userProfession = profileContainer.querySelector('.profile__profession'),
  popupCloseButton = popupContainer.querySelector('.popup__close'),
  profileEditButton = profileContainer.querySelector('.profile__edit-button'),
  form = popupContainer.querySelector('.popup__fields'),
  formNameField = popupContainer.querySelector('.popup__field_value_name'),
  formPositionField = popupContainer.querySelector('.popup__field_value_position');


function popupOpen(container, selector) {
  formNameField.value = userName.textContent;
  formPositionField.value = userProfession.textContent;

  container.classList.add(selector);
}

function popupClose(container, selector) {
  container.classList.remove(selector);
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  userName.textContent = formNameField.value;
  userProfession.textContent = formPositionField.value;

  popupClose(popupContainer, 'popup_opened');
}

profileEditButton.addEventListener('click', function() {
  popupOpen(popupContainer, 'popup_opened');
});

popupCloseButton.addEventListener('click', function() {
  popupClose(popupContainer, 'popup_opened');
});

form.addEventListener('submit', formSubmitHandler);
