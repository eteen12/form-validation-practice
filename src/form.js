const formFunc = () => {
  const form = document.querySelector('#form-wrapper');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Form Submitted!');
  });
};
document.addEventListener('DOMContentLoaded', () => {
  formFunc();
});
export default formFunc;
