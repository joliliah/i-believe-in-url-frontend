const form = document.getElementById('user-form');
const p = document.getElementById('sign-in-message')

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const userName = formData.get('userName');
  const password = formData.get('password');

  return fetch('https://joliliah.herokuapp.com/api/v1/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userName, password }),
    credentials: 'include'
  })
    .then(res => {
      console.log(res.ok);
      res.ok ? window.location = 'index.html' : p.textContent = 'NO BUENO FAM' 
    })
})