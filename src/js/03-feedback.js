import throttle from 'lodash.throttle';

form=document.querySelector(".feedback-form")
const keyFeedbackForm='feedback-form-state';
let formValues = JSON.parse(localStorage.getItem(keyFeedbackForm));

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);


const { email, message } = form.elements;

const onFormInput = throttle(event => {
  formValues = { email: email.value, message: message.value };
  localStorage.setItem(keyFeedbackForm, JSON.stringify(formValues));
}, 500);

if (formValues) {
  email.value = formValues.email;
  message.value = formValues.message;
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(keyFeedbackForm);



  console.log(formValues);
  
}



