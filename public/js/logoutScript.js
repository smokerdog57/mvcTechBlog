// Add this script in your HTML or include it in your front-end JavaScript file
window.addEventListener('beforeunload', async function (event) {
  // Make an asynchronous request to your server to perform cleanup
  await fetch('/user/logout', {
    method: 'GET',
    credentials: 'include', // Include credentials (cookies) in the request
  });
});
