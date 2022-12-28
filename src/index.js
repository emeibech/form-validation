import './styles.css';
import {
  validateZip, validateEmail, validatePassword, confirmPassword,
} from './modules/formValidation';

document.addEventListener('DOMContentLoaded', () => {
  validateZip();
  validateEmail();
  validatePassword();
  confirmPassword();
});
