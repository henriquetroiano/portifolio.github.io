export default function navigation() {
    const btn = document.querySelectorAll('.menu a');
    
    

    btn.forEach((button) => {
        

        button.addEventListener('click', function(event) {
            event.preventDefault();
            const home1 = document.querySelector('.personalData');
            const home2 = document.querySelector('.about');
            const arrow = document.querySelector('#arrow span')
            const arrow2 = document.querySelector('#arrow')
            const skills = document.querySelector('.skills');
            const projects = document.querySelector('.projects');
            const courses = document.querySelector('.courses');
            const contact = document.querySelector('.contact')
            
            const allbtns = document.querySelectorAll('.menu a')
            allbtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            button.classList.add('active')

            if(event.target.innerText == "HOME") {
                home1.classList.remove('none',  'nonedesktop');
                home2.classList.remove('none',  'nonedesktop');
                arrow.classList.remove('none',  'nonedesktop');
                projects.classList.add('none',  'nonedesktop');
                skills.classList.add('none',  'nonedesktop');
                courses.classList.add('none',  'nonedesktop');

                
            } else if(event.target.innerText == "SKILLS") {
                home1.classList.add('none',  'nonedesktop');
                home2.classList.add('none',  'nonedesktop');
                skills.classList.remove('none',  'nonedesktop')
                arrow.classList.add('none',  'nonedesktop')
                projects.classList.add('none',  'nonedesktop');
                courses.classList.add('none',  'nonedesktop');

            } else if (event.target.innerText == "PROJETOS") {
                home1.classList.add('none',  'nonedesktop');
                home2.classList.add('none',  'nonedesktop');
                skills.classList.add('none',  'nonedesktop');
                courses.classList.add('none',  'nonedesktop');
                arrow.classList.add('none',  'nonedesktop')
                projects.classList.remove('none',  'nonedesktop');

            } else if(event.target.innerText == "CURSOS") {
                home1.classList.add('none',  'nonedesktop');
                home2.classList.add('none',  'nonedesktop');
                skills.classList.add('none',  'nonedesktop');
                projects.classList.add('none',  'nonedesktop');
                arrow.classList.add('none',  'nonedesktop');
                contact.classList.add('none',  'nonedesktop');
                courses.classList.remove('none',  'nonedesktop');


            } else if(event.target.innerText == "CONTATO") { 
                home1.classList.add('none',  'nonedesktop');
                home2.classList.add('none',  'nonedesktop');
                skills.classList.add('none',  'nonedesktop');
                projects.classList.add('none',  'nonedesktop');
                courses.classList.add('none',  'nonedesktop');
                arrow.classList.add('none',  'nonedesktop');
                arrow2.classList.add('none',  'nonedesktop');
                contact.classList.remove('none',  'nonedesktop');
            }
        })
    })



    function switchMenu(event) {
        const topMenu = document.querySelector('.topMenu');
        topMenu.classList.toggle('active')

    }

    const menuButton = document.querySelector('.topMenu #menuButton');
    menuButton.addEventListener('click', switchMenu)


    function clickIn(event) {
        const topMenu = document.querySelector('.topMenu');
        topMenu.classList.remove('active')
    }
    function clickOut(event) {
    const menuButton = document.querySelector('.topMenu #menuButton');

        console.log(event.target)
        if(event.target != menuButton) {
        const topMenu = document.querySelector('.topMenu');

        topMenu.classList.remove('active')

        }

    }


    const clickInside = document.querySelector('.topMenu .menu');
    clickInside.addEventListener('click', clickIn);

    const clickOutside = document.querySelector('body');
    clickOutside.addEventListener('click', clickOut);



}