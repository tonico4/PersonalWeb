const menutoggle = document.querySelector('.navtoggle');
const btn = document.querySelector('.menubtn');

btn.addEventListener('click', () => {
    menutoggle.classList.toggle('active')
})