const passwordFunc = () => {
  const password = document.querySelector('#password');
  const passwordError = document.querySelector('.password-error');
  const passwordErrorText = document.createElement('p');
  passwordErrorText.classList.add('password-error-text');
  passwordError.appendChild(passwordErrorText);

  const confirm = document.querySelector('#confirm');
  const confirmError = document.querySelector('.confirm-error');
  const confirmErrorText = document.createElement('p');
  confirmErrorText.classList.add('confirm-error-text');
  confirmError.appendChild(confirmErrorText);
};

document.addEventListener('DOMContentLoaded', () => {
  passwordFunc();
});
export default passwordFunc;
