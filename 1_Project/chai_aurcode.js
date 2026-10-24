const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')


buttons.forEach(function(xyz) {
    xyz.addEventListener('click', function (e) {
         
        const selectedColor = e.target.id;

        buttons.forEach(function(btn) {
            btn.style.backgroundColor = selectedColor
        });
    });
});