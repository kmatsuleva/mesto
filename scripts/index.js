let mainContainer = document.querySelector('.main'),
    popupContainer = mainContainer.querySelector('.popup'),
    profileContainer = mainContainer.querySelector('.profile'),

    userName = profileContainer.querySelector(".profile-info__name"),
    userPosition = profileContainer.querySelector(".profile-info__position"),

    popupCloseButton = popupContainer.querySelector('.popup__close'),
    profileEditButton = profileContainer.querySelector('.edit-button');

    form = popupContainer.querySelector(".popup__fields"),
    formNameField = popupContainer.querySelector(".popup__field_value_name"),
    formPositionField = popupContainer.querySelector(".popup__field_value_position");


profileEditButton.addEventListener('click', function() {
  popupContainer.classList.add('popup_opened');
});

popupCloseButton.addEventListener('click', function() {
  popupContainer.classList.remove('popup_opened');
});

function formSubmitHandler(evt) {
  evt.preventDefault();

  userName.textContent = formNameField.value;
  userPosition.textContent = formPositionField.value;

  popupContainer.classList.remove('popup_opened');
}

form.addEventListener('submit', formSubmitHandler);
