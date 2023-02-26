const submitBlog = document.querySelector('.blog-form');
let blogData = [];

// Get Post from local storage
if(localStorage.getItem('blogPosts')) {
    blogData.push(...JSON.parse(localStorage.getItem('blogPosts'))); 
    console.log(blogData, 'jo')
}

// Blog submit action
submitBlog.addEventListener('submit', (e)=> {
    e.preventDefault();
    const blogAuthor = document.querySelector('#blog-author').value;
    const blogTitle = document.querySelector('#blog-title').value;
    const blogSummery = document.querySelector('#blog-summery').value;
    const blogContent = document.querySelector('#blog-content').value;
    const blogPostDate = `${new Date().toLocaleString('default', { month: 'long' })} ${new Date().getDate()}, ${new Date().getFullYear()}`;

    blogData.push({
        blogAuthor,
        blogTitle,
        blogSummery,
        blogContent,
        blogPostDate
    })

    localStorage.setItem('blogPosts', JSON.stringify(blogData));
    window.location.href = "index.html";
    submitBlog.reset();
})