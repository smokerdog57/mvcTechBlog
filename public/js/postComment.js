// /public/js/postComment.js
// /public/js/postComment.js

// Function to handle the form submission
async function handleCommentSubmission(event) {
    event.preventDefault();
  
    const commentText = document.querySelector('#comment-text').value;
  
    if (commentText) {
      const user_id = req.session.userId; // Use the user ID from the session
      const post_id = getPostId(); // You need to implement a function to get the post's ID
      const created_date = new Date().toISOString();
  
      // Send a POST request to the server to create a new comment
      try {
        const response = await fetch('/api/blogpost/comment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_id, text: commentText, post_id, created_date }),
        });
  
        if (response.ok) {
          // Comment posted successfully, update the UI
          const comment = {
            user: { name: getUserName() }, // You need to implement a function to get the user's name
            created_date,
            text: commentText,
          };
  
          displayComment(comment);
  
          // Clear the comment input field
          document.querySelector('#comment-text').value = '';
        } else {
          console.error('Failed to post comment');
        }
      } catch (error) {
        console.error(error);
      }
    }
  }  
  
  // Function to get the post's ID
  function getPostId() {
    // Implement this function to obtain the post's ID, possibly from the page context.
    // You may use a hidden input field, parse it from the URL, or any other method.
    // For example, if you have a hidden input field with id `post-id`:
    // return document.querySelector('#post-id').value;
  }
  