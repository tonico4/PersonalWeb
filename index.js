const menutoggle = document.querySelector('.navtoggle');
const btn = document.querySelector('.menubtn');
const nav = document.querySelector('.navdiv');

btn.addEventListener('click', () => {
    menutoggle.classList.toggle('active');
})

window.addEventListener('scroll', () => {
    nav.classList.toggle('fixed', window.scrollY > 0);
})