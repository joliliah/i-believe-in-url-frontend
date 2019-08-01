import QUERY from '../utils/QUERY.js';

const URL = 'https://joliliah.herokuapp.com/';

const backendAPI = {
  getAPI(queryProps) {
    const query = QUERY.stringify(queryProps);
    const url = `${URL}?${query}`;

    return fetch(url)
      .then(response => {
        response.json();
      });
  }
};
export default backendAPI;
