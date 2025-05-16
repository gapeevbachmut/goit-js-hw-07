// відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
// Прослуховується подія submit
// Під час відправлення форми сторінка не перезавантажується
// Якщо при сабміті у формі є незаповнені поля, виводиться alert
// При сабміті в консоль виводиться об’єкт з двома властивостями, де ключі — це ім’я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях
// Після сабміту елементи форми очищаються

const loginForm = document.querySelector('.login-form');
//console.log(login);

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  // console.log(event.target.elements);

  const elements = event.target.elements;
  //   console.log(elements.email.value);
  //   console.log(elements.password.value);
  const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };

  const email = elements.email.value.trim();
  const password = elements.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(info);
    event.target.reset();
  }
}
//////////////////////////////////////////

//     або так
// function handleSubmit(event) {
//   event.preventDefault();
//   // console.log(event.target.elements);

//   const elements = event.target.elements;
//   //   console.log(elements.email.value);
//   //   console.log(elements.password.value);

//   const emailValue = elements.email.value.trim();
//   const passwordValue = elements.password.value.trim();

//   if (emailValue === '' || passwordValue === '') {
//     alert('All form fields must be filled in');
//     return;
//   }
//   const info = {
//     emailValue: elements.email.value.trim(),
//     passwordValue: elements.password.value.trim(),
//   };
//   console.log(info);
//   event.target.reset();
// }
