document.addEventListener('DOMContentLoaded', function () {
    const postTitles = document.querySelectorAll('.blog-post-title');
    const commentForm = document.querySelector('.comment-form');

    if (postTitles) {
        postTitles.forEach(title => {
            title.addEventListener('click', function () {
                const postId = this.dataset.postId;
                console.log('Clicked postId:', postId);
                console.log('Event handler triggered!');

                window.location.href = `/blogpost/${postId}/commentform`;
            });
        });
    }

    if (commentForm) {
        commentForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const commentText = document.getElementById('comment-text').value;
            
            // Replace this with the actual code to get postId
            // const postId = /* Replace this with the actual code to get postId */

            // Simulate a POST request to /api/blogpost/comment
            fetch(`/api/blogpost/comment/${postId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: commentText,
                    // ... (other data)
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    // Assuming the server sends the created comment
                    // Update the UI with the new comment
                    updatePageWithComment(data.newComment);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        });
    }

    function updatePageWithComment(newComment) {
        const commentsContainer = document.getElementById('commentsContainer');
        const commentElement = document.createElement('p');
        commentElement.textContent = `${newComment.text} - ${newComment.created_date}`;
        commentsContainer.appendChild(commentElement);
    }
});