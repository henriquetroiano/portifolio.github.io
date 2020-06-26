export default function navigationmobile() {

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