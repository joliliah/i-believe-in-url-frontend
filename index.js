import checkAuth from './utils/check-auth.js';

checkAuth();

const form = document.getElementById('url-form');
const p = document.getElementById('short-url');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const longURL = formData.get('long-url');

  return fetch('https://joliliah.herokuapp.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ originalURL: longURL }),
    credentials: 'include'
  })
    .then(res => {
      console.log('sign in', res);
      if(res.ok === true) {
        console.log('we are hitting our if block in signin js')
        p.textContent = `https://joliliah.herokuapp.com/${res.shortURLId}`
      } 
      else {
        console.log('shorty aint working')
        p.textContent = 'NO BUENO FAM'; 
      }
    })
})