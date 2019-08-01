const form = document.getElementById('user-signup');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const username = formData.get('username');
  const password = formData.get('password');
  const p = document.getElementById('message');
  
  return fetch('https://joliliah.herokuapp.com/api/v1/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
    credentials: 'include'
  })
    .then(res => {
      if(!res.ok) {
        p.textContent = 'Sign up failed! Try again but BETTER THIS TIME!'; 
      } 
      else {
        window.location = 'index.html'; 
      }
    });
});
