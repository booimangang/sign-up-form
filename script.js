const form = document.getElementById('form');
const firstNameInput = document.querySelector(`[name="first-name"]`);
const email = document.querySelector("#email")
const passwordInput = document.querySelector(`#password`);
const confirmPasswordInput = document.querySelector(`#confirm-password`);
const showPasswordToggleBtn = document.querySelector(".show-password-toggle-tbn")
const submitBtn = document.querySelector(".submit-btn")

const firstNameErrorWarning = document.querySelector(".first-name-warning")
const emailErrorWarning = document.querySelector(".email-warning")
const passwordErrorWarning = document.querySelector(".invalid-password-warning")
const unmatchPasswordWarning = document.querySelector(".unmatch-password-warning")

const formSubmitStatus = document.querySelector(".form-submit-status")


firstNameInput.addEventListener("input", () => {
    if (firstNameInput.validity.valid) { firstNameErrorWarning.textContent = "" }
})

function firstNameErrorHandler() {
    if (firstNameInput.validity.valueMissing) {
        firstNameErrorWarning.textContent = "you need to enter your first-name"
    } else if (firstNameInput.validity.tooShort) {
        firstNameErrorWarning.textContent = "name must be at least 4 characters"
    }
}

email.addEventListener("input", () => {
    if (!email.validity.valueMissing) { emailErrorWarning.textContent = "" }
})

function emailErrorHandler() {
    if (email.validity.valueMissing) emailErrorWarning.textContent = "you must enter your email"
    else if (email.validity.typeMismatch) emailErrorWarning.textContent = "entered value must be an e-mail address";
}

passwordInput.addEventListener("input", () => {
    if (!passwordInput.validity.valueMissing) { passwordErrorWarning.textContent = "" };
})

let passwordStatus;

function passwordErrorHandler() {
    const regexForNumber = /\d/
    const regexForLowercase = /[a-z]/
    const regexForUppercase = /[A-Z]/

    if (passwordInput.validity.valueMissing) {
        passwordErrorWarning.textContent = "you must give a password";
        passwordStatus = false;
    }
    else if (!regexForNumber.test(passwordInput.value)) {
        passwordErrorWarning.textContent = "password must contained at least one number";
        passwordStatus = false;
    } else if (!regexForLowercase.test(passwordInput.value)) {
        passwordErrorWarning.textContent = "password must contained at least one lowercase character";
        passwordStatus = false;
    } else if (!regexForUppercase.test(passwordInput.value)) {
        passwordErrorWarning.textContent = "password must contained at least one uppercase character";
        passwordStatus = false;
    } else { passwordStatus = true; }
}

confirmPasswordInput.addEventListener("input", () => {
    if (checkPasswordFields()) {
        unmatchPasswordWarning.textContent = "";
    }
})

function checkPasswordFields() {
    return passwordInput.value == confirmPasswordInput.value
}

showPasswordToggleBtn.addEventListener("click", showPasswordToggleHandler)

function showPasswordToggleHandler(e) {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        confirmPasswordInput.type = "text";
        showPasswordToggleBtn.textContent = "hide password";
    } else {
        passwordInput.type = "password";
        confirmPasswordInput.type = "password";
        showPasswordToggleBtn.textContent = "show password";
    }
}

form.addEventListener('submit', formSubmitHandler)


function formSubmitHandler(e) {

    if (!firstNameInput.validity.valid) {
        firstNameErrorHandler();
        e.preventDefault();
    }

    if (!email.validity.valid) {
        emailErrorHandler();
        e.preventDefault();
    }

    passwordErrorHandler();

    if (!passwordStatus) {
        e.preventDefault();
    }

    if (!checkPasswordFields()) {
        e.preventDefault();
        unmatchPasswordWarning.textContent = "passwords do not match"
    }
}