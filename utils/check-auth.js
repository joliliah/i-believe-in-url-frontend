const checkAuth = () => {
  return fetch('https://joliliah.herokuapp.com/api/v1/auth/verify', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include'
  })
    .then(res => {
      if(!res.ok) {
        window.location = './auth.html';
      }
    });
};

export default checkAuth;
