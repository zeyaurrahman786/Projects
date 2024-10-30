document.addEventListener('DOMContentLoaded', function () {
    const blogList = document.getElementById('blog-list');
    const newPostBtn = document.getElementById('new-post-btn');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    const newPostForm = document.getElementById('new-post-form');

    // Sample blog data
    const blogData = [
        { title: 'Blog Post 1', content: 'This is the content of the first blog post.' },
        { title: 'Blog Post 2', content: 'This is the content of the second blog post.' },
    ];

    // Display blog posts on the homepage
    function displayBlogPosts() {
        blogList.innerHTML = '';
        blogData.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.classList.add('blog-post');
            postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><a href="#" class="read-more" onclick="showPost(${index})">Read More</a>`;
            blogList.appendChild(postElement);
        });
    }

    // Show individual blog post
    window.showPost = function (index) {
        alert(`Showing post titled: ${blogData[index].title}`);
        // You can implement a detailed view or navigate to a new page here.
    };

    // Show the modal for creating a new post
    newPostBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    // Close the modal
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Submit new post form
    newPostForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;
        blogData.push({ title, content });
        displayBlogPosts();
        modal.style.display = 'none';
    });

    // Initial display of blog posts
    displayBlogPosts();
});
