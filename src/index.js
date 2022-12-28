import './styles.css';
import { validateZip, validateEmail } from './modules/formValidation';

document.addEventListener('DOMContentLoaded', () => {
  validateZip();
  validateEmail();
});
