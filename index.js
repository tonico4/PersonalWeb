const menutoggle = document.querySelector('.navtoggle');
const btn = document.querySelector('.menubtn');

btn.addEventListener('openmenu', () => {
    menutoggle.classList.toggle('active')
})