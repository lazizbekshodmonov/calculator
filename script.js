let   display = document.querySelector('.display'),
      value = document.querySelectorAll('.value'),
      equal = document.querySelector('.equal'),
      clear = document.querySelector('.clear'),
      plus = document.querySelector('.plus'),
      multiply = document.querySelector('.multiply'),
      divide = document.querySelector('.divide'),
      subtract = document.querySelector('.subtract'),
      dot = document.querySelector('.dot'),
      result, number;

value.forEach((item, i) => {
      let number = value[i].textContent;
      item.addEventListener('click', ()=>{
            display.innerHTML += `${number}`;
            
      });
      
});
plus.addEventListener('click', (item)=>{
      display.innerHTML += `+`;   
});
multiply.addEventListener('click', (item)=>{
      display.innerHTML += `*`;    
});
divide.addEventListener('click', (item)=>{
      display.innerHTML += `/`;    
});
subtract.addEventListener('click', (item)=>{
      display.innerHTML += `-`;  
});
dot.addEventListener('click', (item)=>{
      display.innerHTML += `.`; 
});
clear.addEventListener('click', (item)=>{
      display.innerHTML = '';     
});

equal.addEventListener('click', (item)=>{
     result = eval(display.textContent);
     display.innerHTML = `${result}`;
});
       

