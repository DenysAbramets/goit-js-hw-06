const inputEl = document.querySelector('#font-size-control');
 const spanEl = document.querySelector('#text');
 spanEl.style.fontSize = "15px";
 

inputEl.addEventListener( "input" ,onChangeSizeText );


 function onChangeSizeText(event){
spanEl.style.fontSize = event.currentTarget.value + 'px' ;

};
