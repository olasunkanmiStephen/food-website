const bars = document.querySelector('#bars');
const ul = document.querySelector('.ul');



bars.addEventListener('click', () => {
    ul.classList.toggle('active')
})