const box = document.querySelector('.box');

const colors = ['red', 'blue', 'green', 'black'];

let i = 0;
setInterval(() => {
  box.style.borderColor = colors[i];
  i = (i + 1) % colors.length;
}, 3000);
