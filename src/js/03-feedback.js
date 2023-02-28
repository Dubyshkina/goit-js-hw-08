import throttle from 'lodash.throttle';
const userForm = document.querySelector('.feedback-form');

const information = JSON.parse(localStorage.getItem('feedback-form-state')) || {
  email: '',
  message: '',
};

userForm.email.value = information.email;
userForm.message.value = information.message;

const onInput = event => {
  information[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(information));
};
userForm.addEventListener('input', throttle(onInput, 500));

userForm.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
  console.log(information);
  information.email = '';
  information.message = '';
});
