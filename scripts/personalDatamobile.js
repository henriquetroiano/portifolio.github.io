export default function personaldatamobile() {
    
const span = document.querySelector('.personalData .info #span span');

span.addEventListener('click', function() { 
    const active1 = document.querySelector('.personalData')
    const active2 = document.querySelector('.personalData .info #span')
    const active3 = document.querySelector('.personalData #resume')
   
    active1.classList.toggle('active')
    active2.classList.toggle('active')
    active3.classList.toggle('active')
})














}