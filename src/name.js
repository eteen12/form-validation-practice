const nameFunc = () => {
  const nameInput = document.querySelector('#name');
  const nameError = document.querySelector('.name-error');
  const nameErrorContent = document.createElement('p');
  nameErrorContent.classList.add('name-error-p');
  nameError.appendChild(nameErrorContent);

  nameInput.addEventListener('input', () => {
    const nameValue = nameInput.value.trim(); // the trim removes any white spaces
    if (nameValue.length > 0 && nameValue.length < 4) {
      nameErrorContent.textContent = 'Please Enter 5 or More Letters!';
    } else {
      nameErrorContent.textContent = '';
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  nameFunc();
});

export default nameFunc;
