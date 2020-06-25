export default function navigation() {
    const btn = document.querySelectorAll('.menu a');
    
    

    btn.forEach((button) => {
        

        button.addEventListener('click', function(event) {
            event.preventDefault();
            const home1 = document.querySelector('.personalData');
            const home2 = document.querySelector('.about');
            const skills = document.querySelector('.skills');
            const allbtns = document.querySelectorAll('.menu a')
            allbtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            button.classList.add('active')

            if(event.target.innerText == "HOME") {
                skills.classList.toggle('none')
                
            } else if(event.target.innerText == "SKILLS") {
                home1.classList.toggle('none');
                home2.classList.toggle('none');
            }

            console.log(event.target.innerText == 'SKILLS')
        })
    })


}