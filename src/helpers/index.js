import axios from 'axios';
import moment from 'moment';

// const localBaseUrl = 'http://localhost:3000/';
const devBaseUrl = 'https://kurirbackend-dev.herokuapp.com/';

class Helpers {
  constructor() {
    this.instance = axios.create({
      baseURL: devBaseUrl,
    });
  }

  static decodeDate(time) {
    return moment(time).format('D MMM YYYY');
  }
}

export default Helpers;
