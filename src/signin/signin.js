import {
  formEl,
  emailInputEl,
  emailErrorMessageEl,
  passwordErrorMessagesEl,
  passwordInputsEl,
} from "../constants/tags.js";
import { VALUE_EMPTY, isEmpty, isValidEmail, getAccessToken, redirectPath } from "../constants/common.js";
import { displayErrorMessage, addErrorClass, removeErrorClass } from "../constants/error-handling.js";
import generateEyeButton from "../utils/generate-eye-button.js";
import ERROR_MESSAGES from "../constants/error-messages.js";
import requestSignin from "../utils/request-signin.js";

const validateEmail = () => {
  const emailValue = emailInputEl.value;

  const isEmptyValue = isEmpty(emailValue);
  const isValidValue = isValidEmail(emailValue);
  const invalidMessage = ERROR_MESSAGES.email.invalid;

  if (isEmptyValue) {
    displayErrorMessage(emailErrorMessageEl, ERROR_MESSAGES.email.empty);
    addErrorClass(emailInputEl);
    return;
  }

  isValidValue
    ? (displayErrorMessage(emailErrorMessageEl, VALUE_EMPTY), removeErrorClass(emailInputEl))
    : (displayErrorMessage(emailErrorMessageEl, invalidMessage), addErrorClass(emailInputEl));
};

const validatePassword = (passwordInputEl, passwordErrorMessage) => {
  const passwordValue = passwordInputEl.value;
  const isEmptyValue = isEmpty(passwordValue);
  const emptyMessage = ERROR_MESSAGES.password.empty;

  displayErrorMessage(passwordErrorMessage, isEmptyValue ? emptyMessage : VALUE_EMPTY);
  isEmptyValue ? addErrorClass(passwordInputEl) : removeErrorClass(passwordInputEl);
};

const handleLoginFormSubmit = (event) => {
  event.preventDefault();

  passwordInputsEl.forEach(async (passwordInputEl, index) => {
    const emailInputValue = emailInputEl.value;
    const passwordInputValue = passwordInputEl.value;
    const submitErrorMessages = ERROR_MESSAGES.submit;
    const isMatchEmail = (field) => field === "email";

    await requestSignin(emailInputValue, passwordInputValue);

    Object.keys(submitErrorMessages).forEach((field) => {
      displayErrorMessage(
        isMatchEmail(field) ? emailErrorMessageEl : passwordErrorMessagesEl[index],
        submitErrorMessages[field]
      );
    });

    addErrorClass(emailInputEl, passwordInputEl);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  if (getAccessToken) {
    redirectPath();
  }
});

emailInputEl.addEventListener("focusout", validateEmail);

formEl.addEventListener("submit", handleLoginFormSubmit);

passwordInputsEl.forEach((passwordInputEl, index) =>
  passwordInputEl.addEventListener("focusout", () => validatePassword(passwordInputEl, passwordErrorMessagesEl[index]))
);

generateEyeButton();
