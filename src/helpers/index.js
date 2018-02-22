import axios from 'axios';
import moment from 'moment';
import { BASE_API_URL } from '../constants';

class Helpers {
  constructor() {
    this.instance = axios.create({
      baseURL: BASE_API_URL,
    });
  }

  static decodeDate(time) {
    return moment(time).format('D MMM YYYY');
  }
}

export default Helpers;
