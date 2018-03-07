import moment from 'moment';
import jwt from 'jsonwebtoken';

class Helpers {
  static decodeDate(time) {
    return moment(time).format('D MMM YYYY');
  }

  static parseToken(token) {
    return jwt.verify(token, 'asdsa');
  }
}

export default Helpers;
