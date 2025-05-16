// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.
// Зверни увагу, що функція getRandomHexColor() повертає колір у hex-форматі, в той час, як колір фону на <body> буде у форматі rgb. Це нормально й не потребує якихось правок.

//Фон на <body> задається тільки після кліку на button.change-color
// При кожному кліку на елемент button.change-color фон <body> зафарбовується новим рандомним кольором
// На <body> і span.color значення одного й того самого кольору

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
//console.log(body);

const colorChange = document.querySelector('.change-color');
//console.log(colorChange);

const spanColor = document.querySelector('.color');
//console.log(spanColor.textContent);

colorChange.addEventListener('click', handleClick);

function handleClick(event) {
  //console.log('ok');
  const color = getRandomHexColor();
  body.style.backgroundColor = color;

  spanColor.textContent = color;

  colorChange.style.backgroundColor = color;

  console.log(color);
}
