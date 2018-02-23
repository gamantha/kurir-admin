import moment from 'moment';

class Helpers {
  static decodeDate(time) {
    return moment(time).format('D MMM YYYY');
  }
}

export default Helpers;
