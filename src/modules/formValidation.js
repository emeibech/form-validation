const form = document.querySelector('form');
const email = document.querySelector('#email');
const emailError = document.querySelector('[data-email]');
const zipError = document.querySelector('[data-zip]');
const passwordError = document.querySelector('[data-password]');
const confirmError = document.querySelector('[data-confirm]');

const validateEmail = () => {
  const showError = () => {
    if (email.validity.valueMissing) {
      emailError.textContent = 'Please enter your email address';
    } else if (email.validity.typeMismatch) {
      emailError.textContent = 'That is not a valid email address';
    } else if (email.validity.tooShort) {
      emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }

    emailError.className = 'error active';
    email.className = 'invalid';
  };

  const testEmail = () => {
    if (email.validity.valid) {
      emailError.textContent = '';
      emailError.className = 'error';
      email.className = 'valid';
    } else {
      showError();
      email.addEventListener('input', testEmail);
    }
  };

  email.addEventListener('blur', testEmail);
  form.addEventListener('submit', (e) => {
    if (!email.validity.valid) {
      showError();
      e.preventDefault();
    }
  });
};

const validateZip = () => {
  console.log('yay');
};

export {
  validateEmail,
  validateZip,
};
