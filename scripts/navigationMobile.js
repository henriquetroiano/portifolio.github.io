export default function navigationMobile() {

    const menubutton = document.querySelector('.mobileMenu')
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');

    menubutton.addEventListener('click', function() {
        menubutton.classList.toggle('pressed');
        menu.classList.toggle('pressed')

        
    })

    body.addEventListener('click', function(event) {
     
        if(!menubutton.contains(event.target)) {

            setTimeout(() => {
                menubutton.classList.remove('pressed');
                menu.classList.remove('pressed')
            }, 300)
        }
    })

    



}


