import axios from 'axios';
import moment from 'moment';

class Helpers {
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3000/',
    });
  }

  static decodeDate(time) {
    return moment(time).format('D MMM YYYY');
  }
}

export default Helpers;
