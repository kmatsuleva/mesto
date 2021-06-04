let mainContainer = document.querySelector(".main"),
  popupContainer = mainContainer.querySelector(".popup"),
  profileContainer = mainContainer.querySelector(".profile"),
  userName = profileContainer.querySelector(".profile-info__name"),
  userPosition = profileContainer.querySelector(".profile-info__position"),
  popupCloseButton = popupContainer.querySelector(".popup__close"),
  profileEditButton = profileContainer.querySelector(".edit-button"),
  form = popupContainer.querySelector(".popup__fields"),
  formNameField = popupContainer.querySelector(".popup__field_value_name"),
  formPositionField = popupContainer.querySelector(".popup__field_value_position");


function popupOpen(container, selector) {
  container.classList.add(selector);
}

function popupClose(container, selector) {
  container.classList.remove(selector);
}

profileEditButton.addEventListener("click", function() {
  popupOpen(popupContainer, "popup_opened");
});

popupCloseButton.addEventListener("click", function() {
  popupClose(popupContainer, "popup_opened");
  formNameField.value = userName.textContent;
  formPositionField.value = userPosition.textContent;
});


function formSubmitHandler(evt) {
  evt.preventDefault();

  userName.textContent = formNameField.value;
  userPosition.textContent = formPositionField.value;

  popupClose(popupContainer, "popup_opened");
}

form.addEventListener("submit", formSubmitHandler);