const button = document.getElementById('sign-out');

button.addEventListener('click', () => {

  return fetch('https://joliliah.herokuapp.com/api/v1/auth/signout', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({ username, password }),
    credentials: 'include'
  })
    // .then(res => {
    //   console.log('sign out', res);
    //   if(res.ok === true) {
    //     console.log('we are hitting our if block in signin js');
    //     window.location = 'index.html'; 
    //   } 
    //   else {
    //     console.log('we are hitting our else block fam');
    //     p.textContent = 'NO BUENO FAM'; 
    //   }
    // });
});
