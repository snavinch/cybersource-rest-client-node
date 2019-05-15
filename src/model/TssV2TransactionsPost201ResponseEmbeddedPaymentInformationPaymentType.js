/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
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
    root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType model module.
   * @module model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType</code>.
   * @alias module:model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType} The populated <code>TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('method')) {
        obj['method'] = ApiClient.convertToType(data['method'], 'String');
      }
    }
    return obj;
  }

  /**
   * The type of payment method. This is required for non-credit card payment.  Possible values:  - BANK_TRANSFER  - CARD (Default)  - EWALLET  - DIGITAL  - DIRECT_DEBIT  - INVOICE  - PUSH_PAYMENT  - CARRIER_BILLING  - CASH  - CHECK  - CRYPTOGRAPHIC  Please contact CyberSource Customer Support to enable the payment method of your choice and the value you should send in your payment request for this field. 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * This is an optional field.  Please contact CyberSource Customer Support to enable the payment method of your choice and the value you should send in your payment request for this field. 
   * @member {String} method
   */
  exports.prototype['method'] = undefined;



  return exports;
}));

