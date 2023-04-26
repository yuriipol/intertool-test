import Inputmask from 'inputmask';
import JustValidate from 'just-validate';
import './just-validate.min.js';

//input mask
const form = document.querySelector('.registration__form');
const telselector = form.querySelector('input[type="tel"]');

const inputmask = new Inputmask('+38 099 999 99 99');
inputmask.mask(telselector);

// validation
new window.JustValidate('.registration__form', {
  rules: {
    tel: {
      required: true,
      function: () => {
        const phone = telselector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 9;
      },
    },
  },
  colorWrong: 'red',
  messages: {
    name: {
      required: 'Enter your name',
      minLength: 'Please enter 3 or more characters',
      maxLength: 'It is forbidden to enter more than 15 characters',
    },
    tel: {
      required: 'Enter phone number',
      function: 'It should be 9 characters without +38 0',
    },
  },
  submitHandler: function (thisForm) {
    console.log('Thanks!');
  },
});
