export default function navigation() {
    
    function switchMenu(event) {
        const topMenu = document.querySelector('.topMenu');
        topMenu.classList.toggle('active')

    }

    const menuButton = document.querySelector('.topMenu #menuButton');
    menuButton.addEventListener('click', switchMenu)


    function clickIn(event) {
        event.preventDefault();
        const topMenu = document.querySelector('.topMenu');
        topMenu.classList.remove('active')

        const allbtns = document.querySelectorAll(".menu a");
        const arrow = document.querySelector('#arrow span')
        
        allbtns.forEach((button) => {
            button.classList.remove('active');
            arrow.classList.add('none')
            
            const divs = document.querySelectorAll('.display > div');
            divs.forEach((div) => {
                div.classList.add('none', 'nonedesktop')
            })   
        })
        
        if(event.target.innerText == "HOME") {
            event.target.classList.add('active');
            arrow.classList.remove('none')
            const home1 = document.querySelector('.personalData');
            home1.classList.remove('none', 'nonedesktop');
            const home2 = document.querySelector('.about');
            home2.classList.remove('none', 'nonedesktop');

        } else if(event.target.innerText == 'SKILLS') {
            event.target.classList.add('active')
            const skills = document.querySelector('.skills');
            skills.classList.remove('none', 'nonedesktop');

        } else if(event.target.innerText == 'PROJETOS') {
            event.target.classList.add('active')
            const projects = document.querySelector('.projects');
            projects.classList.remove('none', 'nonedesktop');

        } else if(event.target.innerText == 'CURSOS') {
            event.target.classList.add('active')
            const courses = document.querySelector('.courses');
            courses.classList.remove('none', 'nonedesktop');

        } else if(event.target.innerText == 'CONTATO') {
            event.target.classList.add('active')
            const contacts = document.querySelector('.contact');
            contacts.classList.remove('none', 'nonedesktop')
        }
    }


    function clickOut(event) {
    const menuButton = document.querySelector('.topMenu #menuButton');

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