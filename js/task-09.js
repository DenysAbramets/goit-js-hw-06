function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');
const containerEl = document.querySelector('widget');


btnEl.addEventListener('click' , onGetRandomHexColor );

function onGetRandomHexColor() {
  
  document.body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = document.body.style.backgroundColor;

  console.log(document.body.style.backgroundColor);

}

