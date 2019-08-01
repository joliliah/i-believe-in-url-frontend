const checkAuth = () => {
  return fetch('https://joliliah.herokuapp.com/api/v1/auth/verify', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include'
  })
    .then(res => {
      console.log(res);
      if(res.ok) {
        console.log('GOOD JOB YOU CAN ACCESS OUR SITE HOORAY');
      }
      else {
        console.log('everything is terrible forever in check auth js');
        window.location = './auth.html';
      }
    });
};

export default checkAuth;
