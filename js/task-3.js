// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім`я для привітання. Обов`язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".
// На елементі input#name-input прослуховується подія input
// Під час набору тексту в інпуті його поточне значення підставляється в span#name-output як ім`я для привітання
// Значення в інпуті очищене від пробілів по краях
// Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous"

const userName = document.querySelector('#name-input');

const welcome = document.querySelector('#name-output');

userName.addEventListener('input', handleClick);

function handleClick(event) {
  const name = event.target.value.trim();

  if (name === '') {
    welcome.textContent = 'Anonymous';
  } else {
    welcome.textContent = name;
  }

  console.log(welcome.textContent);
}
