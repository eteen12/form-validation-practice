const emailFunc = () => {
  const emailInput = document.querySelector('#email');
  const emailError = document.querySelector('.email-error');
  const emailErrorContent = document.createElement('p');
  emailErrorContent.classList.add('email-error-text');
  emailError.appendChild(emailErrorContent);

  emailInput.addEventListener('input', () => {
    const emailValue = emailInput.value.trim();

    if (emailValue.length > 0 && emailValue.length < 4) {
      emailErrorContent.textContent = 'Please Enter 5 or More Letters!';
    } else {
      emailErrorContent.textContent = '';
    }
  });
  
};
document.addEventListener('DOMContentLoaded', () => {
  emailFunc();
});

export default emailFunc;
