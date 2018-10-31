/**
 * CyberSource Flex API
 * Simple PAN tokenization service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.V2paymentsPaymentInformationTokenizedCard = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V2paymentsPaymentInformationTokenizedCard model module.
   * @module model/V2paymentsPaymentInformationTokenizedCard
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>V2paymentsPaymentInformationTokenizedCard</code>.
   * @alias module:model/V2paymentsPaymentInformationTokenizedCard
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>V2paymentsPaymentInformationTokenizedCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2paymentsPaymentInformationTokenizedCard} obj Optional instance to populate.
   * @return {module:model/V2paymentsPaymentInformationTokenizedCard} The populated <code>V2paymentsPaymentInformationTokenizedCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('expirationMonth')) {
        obj['expirationMonth'] = ApiClient.convertToType(data['expirationMonth'], 'String');
      }
      if (data.hasOwnProperty('expirationYear')) {
        obj['expirationYear'] = ApiClient.convertToType(data['expirationYear'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('cryptogram')) {
        obj['cryptogram'] = ApiClient.convertToType(data['cryptogram'], 'String');
      }
      if (data.hasOwnProperty('requestorId')) {
        obj['requestorId'] = ApiClient.convertToType(data['requestorId'], 'String');
      }
      if (data.hasOwnProperty('transactionType')) {
        obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
      }
      if (data.hasOwnProperty('assuranceLevel')) {
        obj['assuranceLevel'] = ApiClient.convertToType(data['assuranceLevel'], 'String');
      }
      if (data.hasOwnProperty('storageMethod')) {
        obj['storageMethod'] = ApiClient.convertToType(data['storageMethod'], 'String');
      }
      if (data.hasOwnProperty('securityCode')) {
        obj['securityCode'] = ApiClient.convertToType(data['securityCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * Customerâ€™s payment network token value. 
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * Two-digit month in which the payment network token expires. `Format: MM`. Possible values: 01 through 12. 
   * @member {String} expirationMonth
   */
  exports.prototype['expirationMonth'] = undefined;
  /**
   * Four-digit year in which the payment network token expires. `Format: YYYY`. 
   * @member {String} expirationYear
   */
  exports.prototype['expirationYear'] = undefined;
  /**
   * Type of card to authorize. - 001 Visa - 002 Mastercard - 003 Amex - 004 Discover 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * This field is used internally.
   * @member {String} cryptogram
   */
  exports.prototype['cryptogram'] = undefined;
  /**
   * Value that identifies your business and indicates that the cardholderâ€™s account number is tokenized. This value is assigned by the token service provider and is unique within the token service providerâ€™s database.  `Note` This field is supported only for **CyberSource through VisaNet** and **FDC Nashville Global**. 
   * @member {String} requestorId
   */
  exports.prototype['requestorId'] = undefined;
  /**
   * Type of transaction that provided the token data. This value does not specify the token service provider; it specifies the entity that provided you with information about the token.  Set the value for this field to 1. An application on the customerâ€™s mobile device provided the token data. 
   * @member {String} transactionType
   */
  exports.prototype['transactionType'] = undefined;
  /**
   * Confidence level of the tokenization. This value is assigned by the token service provider.  `Note` This field is supported only for **CyberSource through VisaNet** and **FDC Nashville Global**. 
   * @member {String} assuranceLevel
   */
  exports.prototype['assuranceLevel'] = undefined;
  /**
   * Type of technology used in the device to store token data. Possible values:   - 001: Secure Element (SE)  Smart card or memory with restricted access and encryption to prevent data tampering. For storing payment credentials, a SE is tested against a set of requirements defined by the payment networks.  `Note` This field is supported only for **FDC Compass**.  - 002: Host Card Emulation (HCE)  Emulation of a smart card by using software to create a virtual and exact representation of the card. Sensitive data is stored in a database that is hosted in the cloud. For storing payment credentials, a database must meet very stringent security requirements that exceed PCI DSS.  `Note` This field is supported only for **FDC Compass**. 
   * @member {String} storageMethod
   */
  exports.prototype['storageMethod'] = undefined;
  /**
   * CVN.
   * @member {String} securityCode
   */
  exports.prototype['securityCode'] = undefined;



  return exports;
}));

