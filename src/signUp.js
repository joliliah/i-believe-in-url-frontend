const form = document.getElementById('user-signup');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const username = formData.get('username');
  const password = formData.get('password');

  return fetch('https://joliliah.herokuapp.com/api/v1/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
    credentials: 'include'
  })
    .then(res => {
      console.log('sign in', res);
      if(res.ok === true) {
        console.log('we are hitting our if block in signin js');
        window.location = 'index.html'; 
      } 
      else {
        console.log('we are hitting our else block fam');
        p.textContent = 'NO BUENO FAM'; 
      }
    });
});