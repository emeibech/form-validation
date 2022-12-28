const form = document.querySelector('form');
const email = document.querySelector('#email');
const emailError = document.querySelector('[data-email]');
const zip = document.querySelector('#zipcode');
const zipError = document.querySelector('[data-zip]');
const country = document.querySelector('#country');
const password = document.querySelector('#password');
const passwordError = document.querySelector('[data-password]');
const confirm = document.querySelector('#confirm-password');
const confirmError = document.querySelector('[data-confirm]');

const showError = {};

const validateEmail = () => {
  showError.email = () => {
    email.className = 'invalid';
    emailError.className = 'error active';

    if (email.validity.valueMissing) {
      emailError.textContent = 'Please enter your email address';
    } else if (email.validity.typeMismatch) {
      emailError.textContent = 'That is not a valid email address';
    } else if (email.validity.tooShort) {
      emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
  };

  const testEmail = () => {
    if (email.validity.valid) {
      emailError.textContent = '';
      emailError.className = 'error';
      email.className = 'valid';
    } else {
      showError.email();
      email.addEventListener('input', testEmail);
    }
  };

  email.addEventListener('blur', testEmail);
  form.addEventListener('submit', (e) => {
    if (!email.validity.valid) {
      showError.email();
      e.preventDefault();
      email.addEventListener('input', testEmail);
    }
  });
};

// Change the placeholder and regex pattern expression based on selected country
const selectCountry = () => {
  const changePattern = () => {
    if (country.value === 'United States') {
      zip.placeholder = '99999';
      zip.pattern = '(\\d{5}([\\-]\\d{4})?)';
    }

    if (country.value === 'Canada') {
      zip.placeholder = 'A9A 9A9 or A9A-9A9';
      zip.pattern = '[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]';
    }

    if (country.value === 'Australia') {
      zip.placeholder = '9999';
      zip.pattern = '[0-9]{4}';
    }

    if (country.value === 'New Zealand') {
      zip.placeholder = '9999';
      zip.pattern = '[0-9]{4}';
    }

    if (country.value === 'United Kingdom') {
      zip.placeholder = 'AA99 9AA or AA9 9AA';
      zip.pattern = '[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}';
    }
  };

  changePattern();
  country.addEventListener('change', changePattern);
};

const validateZip = () => {
  showError.zip = () => {
    zip.className = 'invalid';
    zipError.className = 'error active';
    if (zip.validity.valueMissing) {
      zipError.textContent = 'Please enter your zip code';
    } else if (zip.validity.patternMismatch) {
      zipError.textContent = 'Please enter a valid zip code';
    }
  };

  const testZip = () => {
    if (zip.validity.valid) {
      zipError.textContent = '';
      zipError.className = 'error';
      zip.className = 'valid';
    } else {
      showError.zip();
      zip.addEventListener('input', testZip);
    }
  };

  selectCountry();
  zip.addEventListener('blur', testZip);
  form.addEventListener('submit', (e) => {
    if (!zip.validity.valid) {
      showError.zip();
      e.preventDefault();
      zip.addEventListener('input', testZip);
    }
  });
};

export {
  validateEmail,
  validateZip,
};
