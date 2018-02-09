import Helpers from '../../../helpers';

export default class ProposalService extends Helpers {
  static encodeDate(array) {
    const result = [];
    array.forEach((each) => {
      const propose = super.decodeDate(each.proposeDate);
      const reject = super.decodeDate(each.rejectDate);
      const accept = super.decodeDate(each.acceptDate);
      const email = each.User.email;
      each.proposeDate = propose !== 'Invalid date' ? propose : null;
      each.rejectDate = reject !== 'Invalid date' ? reject : null;
      each.acceptDate = accept !== 'Invalid date' ? accept : null;
      each.User = email;
      result.push(each);
    });
    return result;
  }
}
