const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const ulRef = document.querySelector('#ingredients');

 const elements = ingredients.map(ingredient => {
  const listREf = document.createElement( 'li');
  listREf.classList.add('item');
  listREf.textContent = ingredient;

  return listREf;

 })
 ulRef.append(...elements);