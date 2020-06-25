export default function navigation() {
    const btn = document.querySelectorAll('.menu a');
    
    

    btn.forEach((button) => {
        

        button.addEventListener('click', function(event) {
            event.preventDefault();
            const home1 = document.querySelector('.personalData');
            const home2 = document.querySelector('.about');
            const arrow = document.querySelector('#arrow span')
            const skills = document.querySelector('.skills');
            const allbtns = document.querySelectorAll('.menu a')
            allbtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            button.classList.add('active')

            if(event.target.innerText == "HOME") {
                home1.classList.remove('none');
                home2.classList.remove('none');
                arrow.classList.remove('none')
                skills.classList.add('none')
                
            } else if(event.target.innerText == "SKILLS") {
                home1.classList.add('none');
                home2.classList.add('none');
                skills.classList.remove('none')
                arrow.classList.add('none')


            }

        })
    })


}