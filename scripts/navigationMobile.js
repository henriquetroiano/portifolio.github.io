export default function navigationmobile() {

    function switchMenu() {
        const topMenu = document.querySelector('.topMenu');
        topMenu.classList.toggle('active')
        
    }

    const menuButton = document.querySelector('.topMenu #menuButton');
    menuButton.addEventListener('click', switchMenu)


    
}