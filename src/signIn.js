const form = document.getElementById('user-form');
const button = document.getElementById('sign-up');

button.addEventListener('click', (event) => {
  event.preventDefault();
  window.location = 'sign-up.html';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const username = formData.get('username');
  const password = formData.get('password');
  const p = document.getElementById('message');

  return fetch('https://joliliah.herokuapp.com/api/v1/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
    credentials: 'include'
  })
    .then(res => {
      if(res.ok) {
        window.location = 'index.html'; 
      } 
      else {
        p.textContent = 'Sign in failed! GO SIGN UP!'; 
      }
    });
});
