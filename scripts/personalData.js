export default function personalData() {
    
const span = document.querySelector('#span span');

span.addEventListener('click', function() { 
    const active1 = document.querySelector('.personalData')
    const active2 = document.querySelector('.personalData #span')
    const active3 = document.querySelector('.personalData #resume')
   
    active1.classList.toggle('active')
    active2.classList.toggle('active')
    active3.classList.toggle('active')
})














}