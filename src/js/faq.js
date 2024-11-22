import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const faqContainer = document.querySelector('.questions-container');

const accordion = new Accordion(faqContainer, {
  // options
  showMultiple: false,
  duration: 400,
  onOpen: function (el) {
    el.style.overflow = 'visible';
    const allQuestions = document.querySelectorAll('.ac');
    allQuestions.forEach(question => {
      question.style.backgroundColor = 'white';
      question.style.borderRadius = 'none';
      question.style.borderBottom = '1px solid #e4e5e6';
    });

    const question = el.closest('.ac');
    const prevQuestion = question.previousElementSibling;
    console.log(prevQuestion);

    if (prevQuestion) {
      prevQuestion.style.borderBottom = 'none';
    }

    question.style.backgroundColor = '#BCDFD1';
    question.style.borderRadius = '16px';
    question.style.borderBottom = 'none';
  },
  onClose: function (el) {
    const question = el.closest('.ac');
    const prevQuestion = question.previousElementSibling;

    if (prevQuestion) {
      prevQuestion.style.borderBottom = '1px solid #e4e5e6';
    }

    question.style.borderRadius = 'none';
    question.style.backgroundColor = 'white';
    question.style.borderBottom = '1px solid #e4e5e6';
  },
});
