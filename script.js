let accordion=document.querySelectorAll('.accordion');
accordion.forEach((el)=>{
  let icon=el.querySelector('.icon');  
  let answer=el.querySelector('.answer');  
  el.addEventListener("click",()=>{
  icon.classList.toggle('active_icon');
  answer.classList.toggle('active_answer');

 });
});