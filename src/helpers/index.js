import axios from 'axios';
import moment from 'moment';
import VueCookie from 'vue-cookie';

const Authorization = VueCookie.get('token');

class Helpers {
  constructor() {
    this.allInstance = axios.create({
      baseURL: 'http://localhost:3000/',
    });
    this.authInstance = axios.create({
      baseURL: 'http://localhost:3000/',
      headers: { Authorization: `bearer ${Authorization}` },
    });
  }

  static decodeDate(time) {
    return moment(time).format('D MMM YYYY');
  }
}

export default Helpers;
