const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const form = document.getElementById('form');

const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

const getFieldName = (input) => {
  return input.id[0].toUpperCase() + input.id.substring(1);
};

const checkLength = (input, min, max) => {
  if (input.value.length > max) {
  } else if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} needs to be atleast ${min} characters`
    );
  }
};

const checkEmail = (input) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // return re.test(String(email).toLowerCase());
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
};

const checkPasswords = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
};

const showError = (input, message) => {
  const formController = input.parentElement;
  formController.className = 'form-control error';
  const small = formController.querySelector('small');
  small.innerText = message;
};

const showSuccess = (input, message) => {
  const formController = input.parentElement;

  formController.className = 'form-control success';
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // 1. make sure each field is filled out
  checkRequired([username, email, password, password2]);

  // 2. make sure username and passsowrd have min and max length
  checkLength(username, 3, 15);
  checkLength(password, 6, 20);

  // 3. make sure email is valid
  checkEmail(email);

  // 4. make sure passwords match\
  checkPasswords(password, password2);
});
