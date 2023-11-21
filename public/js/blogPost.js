// /public/js/blogpost.js
document.addEventListener('DOMContentLoaded', function () {
    const postTitles = document.querySelectorAll('.blog-post-title');

    if (postTitles) {
        postTitles.forEach(title => {
            title.addEventListener('click', function () {
                const postId = this.dataset.postId;

                window.location.href = `/blogpost/${postId}/commentform`;
            });
        });
    }
});