import checkAuth from './utils/check-auth.js';

checkAuth();

const form = document.getElementById('url-form');
const p = document.getElementById('short-url');

const a = document.createElement('a');
p.appendChild(a);

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
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(ok) {
        console.log('we are hitting our if block in signin js');
        a.href = `https://joliliah.herokuapp.com/${json.shortURLId}`;
        a.textContent = `https://joliliah.herokuapp.com/${json.shortURLId}`;
        a.target = '_blank';
      } 
      else {
        console.log('shorty aint working');
        p.textContent = 'NO BUENO FAM'; 
      }
    });
});
