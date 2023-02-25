const counter = {
    value: 0 ,

    decrement(){
        this.value -= 1;
    },

    increment(){
     this.value += 1;
    },

}

 const decrementButton = document.querySelector('[data-action="decrement"]');
 const incrementButton = document.querySelector('[data-action="increment"]');
 const valueEl = document.querySelector('#value');

 decrementButton.addEventListener('click' , () =>{
    counter.decrement();
    valueEl.textContent = counter.value;
 })

 incrementButton.addEventListener('click' , () => {
    counter.increment();
    valueEl.textContent = counter.value;

 })