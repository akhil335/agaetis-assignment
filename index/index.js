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

// Getting Blog Post from local storage
if(localStorage.getItem('blogPosts')) {
    blogPost.push(...JSON.parse(localStorage.getItem('blogPosts')));

    const authorName = document.querySelector('.author-name');

    document.querySelector('.title').innerHTML = blogPost[blogPost.length - 1].blogTitle;
    document.querySelector('.blog-summery').innerHTML = blogPost[blogPost.length - 1].blogSummery;
    document.querySelector('.blog-paragraph').innerHTML = `<p>${blogPost[blogPost.length - 1].blogContent}</P>`;
    document.querySelector('.current-blog-date').innerHTML = `${blogPost[blogPost.length - 1].blogPostDate} <span class="author-name">${blogPost[blogPost.length - 1].blogAuthor}</span>`;
}