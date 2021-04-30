import axios from 'axios';

const axiosMainInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
      common: {
        'X-Auth-Token': 'Auth_Token_From_Axios_Instance'
      }
    }
  });


export default axiosMainInstance;