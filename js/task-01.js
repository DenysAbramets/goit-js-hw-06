 const ulRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${ulRef.length}`);



ulRef.forEach(element => {
    console.log('Category: ' + element.firstElementChild.textContent);  
    console.log('Elements: ' + element.lastElementChild.children.length);  
});