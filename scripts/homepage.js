export default function homepage() {
    
const btn = document.querySelector('div.personalData .span span');

btn.addEventListener('click', function() { 
    const divNone = document.querySelector('#resume');
    divNone.classList.toggle('none') // esconde o menu da foto

    const divPai = document.querySelector('div.personalData');
    divPai.classList.toggle('abrir') // abre novamente o menu da foto


   
})














}