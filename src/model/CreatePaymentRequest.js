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
    define(['ApiClient', 'model/Ptsv2paymentsAggregatorInformation', 'model/Ptsv2paymentsBuyerInformation', 'model/Ptsv2paymentsClientReferenceInformation', 'model/Ptsv2paymentsConsumerAuthenticationInformation', 'model/Ptsv2paymentsDeviceInformation', 'model/Ptsv2paymentsInstallmentInformation', 'model/Ptsv2paymentsIssuerInformation', 'model/Ptsv2paymentsMerchantDefinedInformation', 'model/Ptsv2paymentsMerchantInformation', 'model/Ptsv2paymentsOrderInformation', 'model/Ptsv2paymentsPaymentInformation', 'model/Ptsv2paymentsPointOfSaleInformation', 'model/Ptsv2paymentsProcessingInformation', 'model/Ptsv2paymentsRecipientInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsAggregatorInformation'), require('./Ptsv2paymentsBuyerInformation'), require('./Ptsv2paymentsClientReferenceInformation'), require('./Ptsv2paymentsConsumerAuthenticationInformation'), require('./Ptsv2paymentsDeviceInformation'), require('./Ptsv2paymentsInstallmentInformation'), require('./Ptsv2paymentsIssuerInformation'), require('./Ptsv2paymentsMerchantDefinedInformation'), require('./Ptsv2paymentsMerchantInformation'), require('./Ptsv2paymentsOrderInformation'), require('./Ptsv2paymentsPaymentInformation'), require('./Ptsv2paymentsPointOfSaleInformation'), require('./Ptsv2paymentsProcessingInformation'), require('./Ptsv2paymentsRecipientInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.CreatePaymentRequest = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsAggregatorInformation, root.CyberSource.Ptsv2paymentsBuyerInformation, root.CyberSource.Ptsv2paymentsClientReferenceInformation, root.CyberSource.Ptsv2paymentsConsumerAuthenticationInformation, root.CyberSource.Ptsv2paymentsDeviceInformation, root.CyberSource.Ptsv2paymentsInstallmentInformation, root.CyberSource.Ptsv2paymentsIssuerInformation, root.CyberSource.Ptsv2paymentsMerchantDefinedInformation, root.CyberSource.Ptsv2paymentsMerchantInformation, root.CyberSource.Ptsv2paymentsOrderInformation, root.CyberSource.Ptsv2paymentsPaymentInformation, root.CyberSource.Ptsv2paymentsPointOfSaleInformation, root.CyberSource.Ptsv2paymentsProcessingInformation, root.CyberSource.Ptsv2paymentsRecipientInformation);
  }
}(this, function(ApiClient, Ptsv2paymentsAggregatorInformation, Ptsv2paymentsBuyerInformation, Ptsv2paymentsClientReferenceInformation, Ptsv2paymentsConsumerAuthenticationInformation, Ptsv2paymentsDeviceInformation, Ptsv2paymentsInstallmentInformation, Ptsv2paymentsIssuerInformation, Ptsv2paymentsMerchantDefinedInformation, Ptsv2paymentsMerchantInformation, Ptsv2paymentsOrderInformation, Ptsv2paymentsPaymentInformation, Ptsv2paymentsPointOfSaleInformation, Ptsv2paymentsProcessingInformation, Ptsv2paymentsRecipientInformation) {
  'use strict';




  /**
   * The CreatePaymentRequest model module.
   * @module model/CreatePaymentRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>CreatePaymentRequest</code>.
   * @alias module:model/CreatePaymentRequest
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>CreatePaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreatePaymentRequest} obj Optional instance to populate.
   * @return {module:model/CreatePaymentRequest} The populated <code>CreatePaymentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = Ptsv2paymentsClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('processingInformation')) {
        obj['processingInformation'] = Ptsv2paymentsProcessingInformation.constructFromObject(data['processingInformation']);
      }
      if (data.hasOwnProperty('issuerInformation')) {
        obj['issuerInformation'] = Ptsv2paymentsIssuerInformation.constructFromObject(data['issuerInformation']);
      }
      if (data.hasOwnProperty('paymentInformation')) {
        obj['paymentInformation'] = Ptsv2paymentsPaymentInformation.constructFromObject(data['paymentInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = Ptsv2paymentsOrderInformation.constructFromObject(data['orderInformation']);
      }
      if (data.hasOwnProperty('buyerInformation')) {
        obj['buyerInformation'] = Ptsv2paymentsBuyerInformation.constructFromObject(data['buyerInformation']);
      }
      if (data.hasOwnProperty('recipientInformation')) {
        obj['recipientInformation'] = Ptsv2paymentsRecipientInformation.constructFromObject(data['recipientInformation']);
      }
      if (data.hasOwnProperty('deviceInformation')) {
        obj['deviceInformation'] = Ptsv2paymentsDeviceInformation.constructFromObject(data['deviceInformation']);
      }
      if (data.hasOwnProperty('merchantInformation')) {
        obj['merchantInformation'] = Ptsv2paymentsMerchantInformation.constructFromObject(data['merchantInformation']);
      }
      if (data.hasOwnProperty('aggregatorInformation')) {
        obj['aggregatorInformation'] = Ptsv2paymentsAggregatorInformation.constructFromObject(data['aggregatorInformation']);
      }
      if (data.hasOwnProperty('consumerAuthenticationInformation')) {
        obj['consumerAuthenticationInformation'] = Ptsv2paymentsConsumerAuthenticationInformation.constructFromObject(data['consumerAuthenticationInformation']);
      }
      if (data.hasOwnProperty('pointOfSaleInformation')) {
        obj['pointOfSaleInformation'] = Ptsv2paymentsPointOfSaleInformation.constructFromObject(data['pointOfSaleInformation']);
      }
      if (data.hasOwnProperty('merchantDefinedInformation')) {
        obj['merchantDefinedInformation'] = ApiClient.convertToType(data['merchantDefinedInformation'], [Ptsv2paymentsMerchantDefinedInformation]);
      }
      if (data.hasOwnProperty('installmentInformation')) {
        obj['installmentInformation'] = Ptsv2paymentsInstallmentInformation.constructFromObject(data['installmentInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsProcessingInformation} processingInformation
   */
  exports.prototype['processingInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsIssuerInformation} issuerInformation
   */
  exports.prototype['issuerInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPaymentInformation} paymentInformation
   */
  exports.prototype['paymentInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsBuyerInformation} buyerInformation
   */
  exports.prototype['buyerInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsRecipientInformation} recipientInformation
   */
  exports.prototype['recipientInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsDeviceInformation} deviceInformation
   */
  exports.prototype['deviceInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsMerchantInformation} merchantInformation
   */
  exports.prototype['merchantInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsAggregatorInformation} aggregatorInformation
   */
  exports.prototype['aggregatorInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsConsumerAuthenticationInformation} consumerAuthenticationInformation
   */
  exports.prototype['consumerAuthenticationInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPointOfSaleInformation} pointOfSaleInformation
   */
  exports.prototype['pointOfSaleInformation'] = undefined;
  /**
   * The description for this field is not available.
   * @member {Array.<module:model/Ptsv2paymentsMerchantDefinedInformation>} merchantDefinedInformation
   */
  exports.prototype['merchantDefinedInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsInstallmentInformation} installmentInformation
   */
  exports.prototype['installmentInformation'] = undefined;



  return exports;
}));


