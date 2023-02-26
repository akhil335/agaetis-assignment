const hamburgerSwitch = document.querySelector('.hamburger');
const scrollTo = document.querySelector('.scrolled-to');
let blogPost = [];

// Hamburger icon Switching
hamburgerSwitch.addEventListener('click', () => {
    const navlinks = document.querySelector('.nav-links');
    document.querySelector('.hamburger-translate').classList.toggle('hamburger-translate-open');

    if(getComputedStyle(navlinks).display === 'none') navlinks.style.display = 'block';
    else navlinks.style.display = 'none';
})

// Scroll to top
scrollTo.addEventListener('click', () => {
    window.scrollTo(0, 0)
})