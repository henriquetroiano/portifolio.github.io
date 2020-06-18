export default function navigation() {
    const btn = document.querySelectorAll('.menu a');
    
    

    btn.forEach((button) => {
        

        button.addEventListener('click', function(event) {
            event.preventDefault();
            const allbtns = document.querySelectorAll('.menu a')
            allbtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            button.classList.add('active')
        })
    })
}