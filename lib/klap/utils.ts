import crypto from 'crypto';
import Order from "./model/order";


/**
 * Class containing needed authenticaction and configuration to interact with the API.
 * Environment correspond to the environment to use, it can be Integration or Production, each has
 * a unique URL.
 */
const Utils = {
  /**
   * @param headerApikey value of apiKey parameter received in request
   * @param ecommerceApiKey the secret used to authenticate against the API
   * @param order value of order received in request
   */
  validateHeaderApikey: (headerApikey: string, ecommerceApiKey: string, order: Order) => {
    let compositeKey = order.reference_id + order.order_id + ecommerceApiKey;

    // este hash es el que debes comparar con el que te llegará en el header "Apikey"
    // mediante el request a tus webhooks
    let hashApiKey = crypto.createHash('sha256').update(compositeKey).digest('hex');
    return hashApiKey === headerApikey;
  },
};

export default Utils;
