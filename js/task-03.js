const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');

 const createGallery =images.map(image => {
  return `<li class="gallery__item"><img src = ${image.url} alt = ${image.alt} width = 270px height = 200px ></li>`;
}).join("");

galleryEl.insertAdjacentHTML('beforeend' , createGallery);

 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onGetRandomHexColor(){
  galleryEl.style.backgroundColor = getRandomHexColor();

};
onGetRandomHexColor();