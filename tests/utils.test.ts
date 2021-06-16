import { Utils as u } from '../lib';
import Order from '../lib/klap/model/order';

test('correct integration environment url', () => {
    const order = new Order('oid1', 'ref1');

    console.log('Order: ' + order.toJson());
    console.log(u.validateHeaderApikey('asd', 'asd2', order));

    expect(true).toBe(true);

});
