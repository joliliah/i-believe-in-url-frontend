const checkAuth = () => {
  return fetch('https://joliliah.herokuapp.com/ap1/v1/auth/verify', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include'
  })
    .then(res => {
      if(res.ok) {
        console.log('GOOD JOB YOU CAN ACCESS OUR SITE HOORAY')
      }
      else {
        window.location = '/sign-in.html';
      }
    });
};

export default checkAuth;
