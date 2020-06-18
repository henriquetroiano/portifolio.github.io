export default function homepage() {
    
const btn = document.querySelector('#span span');

btn.addEventListener('click', function() { 
    const resume = document.querySelector('#resume');
    resume.classList.toggle('abrir') // com a combinação da classe abrir nno id resume, cnfigurei para que sem o abrir o texto da caixa expandida nao apareca, enquanto quando resume tem a calsse abrir, as informações vêm ao campo visível da tela.

    const divPai = document.querySelector('div.personalData');
    divPai.classList.toggle('abrir') // abre o menu da foto -- seta o width da segunda div de 0 para 15vw.

    const seta = document.querySelector('#span')
    seta.classList.toggle('abrir') // atribui a classe abrir para a div span, que estica o span junto com a caixa dando o efeito da seta andar junto com a caixa principal

   
})














}