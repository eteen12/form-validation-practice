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

  password.addEventListener('input', () => {
    const passwordValue = password.value;
    const confirmValue = confirm.value;

    if (passwordValue.length > 0 && passwordValue.length < 8) {
      passwordErrorText.textContent = 'Password Must Be 8 Characters long!';
    } else {
      passwordErrorText.textContent = '';
    }

    if (confirmValue !== '' && passwordValue !== confirmValue) {
      confirmErrorText.textContent = 'Passwords Do Not Match!';
    } else {
      confirmErrorText.textContent = '';
    }
  });

  confirm.addEventListener('input', () => {
    const passwordValue = password.value;
    const confirmValue = confirm.value;

    if (confirmValue !== '' && passwordValue !== confirmValue) {
      confirmErrorText.textContent = 'Passwords do not match!';
    } else {
      confirmErrorText.textContent = '';
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  passwordFunc();
});
export default passwordFunc;
