// /public/js/blogpost.js

// dependencies  
//const helpers = require('../../utils');
//const format_date = helpers.format_date;

document.addEventListener('DOMContentLoaded', function () {

    // invoke the client side functions
    listenForBlogpostTitleClick();
    submitComment();

    // listen for blogpost title click and call server side route: /blogpost/${postId}/commentform
    function listenForBlogpostTitleClick() {

        const postTitles = document.querySelectorAll('.blog-post-title');

        if (postTitles) {
            postTitles.forEach(title => {
                title.addEventListener('click', function () {
                    const postId = this.dataset.postId;

                    window.location.href = `mvc/blogpost/commentform/${postId}`;
                });
            });
        };
    };

    // listen for comment form <submit> click and fetch server side route: /api/blogpost/comment/${postId}`
    function submitComment() {

        const commentForm = document.querySelector('.comment-form');

        commentForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const text = document.getElementById('comment-text').value;

            // Extract postId from the current URL
            const postId = window.location.pathname.split('/').pop();
            console.log('1. /public/js/blogpost postId:', postId); // Add this line for debugging

            // Make a POST request to the server to add a new comment
            const response = await fetch(`/api/blogpost/commentsave/${postId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text }),
            });

            if (response.ok) {
                // Parse the JSON response
                console.log(`2./public/js/blogpost: response ok`)
                const { message, newComment } = await response.json();
                // Update the DOM with the new comment information
                updateDOMWithNewComment(newComment);
            } else {
                // Handle error
                console.error('Failed to post comment:', response.statusText);
            }
        });
    };

    // update page with new comment
    function updateDOMWithNewComment(newComment) {
        // Create a new <p> element with the comment information
        const commentElement = document.createElement('p');

        // format the date
        const formattedDate = new Intl.DateTimeFormat('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }).format(new Date());
        console.log(formattedDate);

        commentElement.textContent = `${newComment.username}, ${formattedDate}`;
        console.log(`3. /public/js/blogpost: newComment signature is: ${newComment.username}, ${(formattedDate)}`)
        // Append the new <p> element after the form on your page
        const commentForm = document.querySelector('.comment-form');
        const submitBtn = document.querySelector('#submitBtn');

        // added for debug
        console.log('4. Comment form found:', commentForm);
        console.log('5. Comment element created:', commentElement);
        console.log('6. submitBtn found:', submitBtn);
        submitBtn.remove();
        commentForm.parentNode.insertBefore(commentElement, commentForm.nextSibling);
    };
});