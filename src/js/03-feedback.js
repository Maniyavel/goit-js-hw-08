import throttle from 'lodash.throttle';

const form=document.querySelector(".feedback-form")
const keyFeedbackForm='feedback-form-state';
let formValues = JSON.parse(localStorage.getItem(keyFeedbackForm));


const { email, message } = form.elements;

const onFormInput = throttle(event => {
  formValues = { email: email.value, message: message.value };
  localStorage.setItem(keyFeedbackForm, JSON.stringify(formValues));
}, 500);

if (formValues) {
  email.value = formValues.email;
  message.value = formValues.message;
}

function submitOn(evt) {
  evt.preventDefault();
  localStorage.removeItem(keyFeedbackForm);
  console.log(formValues);
  evt.currentTarget.reset();
  if (email.value===""||message.value===""){
    return alert('всі поля повинні бути заповнені');
  }
}

form.addEventListener('input', onFormInput);
form.addEventListener('submit', submitOn);



