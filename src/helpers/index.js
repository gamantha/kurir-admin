import axios from 'axios';
import VueCookie from 'vue-cookie';

const Authorization = VueCookie.get('token');

class Helpers {
  constructor() {
    this.allInstance = axios.create({
      baseURL: 'http://localhost:3000/',
    });
    this.authInstance = axios.create({
      baseURL: 'http://localhost:3000/',
      headers: { Authorization },
    });
  }
}

const helpers = new Helpers();

export default helpers;
