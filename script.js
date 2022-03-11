let   display = document.querySelector('.display'),
      value = document.querySelectorAll('.value'),
      equal = document.querySelector('.equal'),
      clear = document.querySelector('.clear'),
      result;

value.forEach((item, i) => {
      let number = value[i].textContent;
      item.addEventListener('click', ()=>{
            display.innerHTML += `${number}`;
            
      });
});
clear.addEventListener('click', (item)=>{
      display.innerHTML = '';     
});
equal.addEventListener('click', (item)=>{
     result = eval(display.textContent);
     display.innerHTML = `${result}`;
});
       

