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
    define(['ApiClient', 'model/PtsV2PaymentsPost201ResponseClientReferenceInformation', 'model/PtsV2PaymentsPost201ResponseErrorInformation', 'model/PtsV2PaymentsPost201ResponseInstallmentInformation', 'model/PtsV2PaymentsPost201ResponseIssuerInformation', 'model/PtsV2PaymentsPost201ResponseLinks', 'model/PtsV2PaymentsPost201ResponseOrderInformation', 'model/PtsV2PaymentsPost201ResponsePaymentInformation', 'model/PtsV2PaymentsPost201ResponsePointOfSaleInformation', 'model/PtsV2PaymentsPost201ResponseProcessingInformation', 'model/PtsV2PaymentsPost201ResponseProcessorInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsPost201ResponseClientReferenceInformation'), require('./PtsV2PaymentsPost201ResponseErrorInformation'), require('./PtsV2PaymentsPost201ResponseInstallmentInformation'), require('./PtsV2PaymentsPost201ResponseIssuerInformation'), require('./PtsV2PaymentsPost201ResponseLinks'), require('./PtsV2PaymentsPost201ResponseOrderInformation'), require('./PtsV2PaymentsPost201ResponsePaymentInformation'), require('./PtsV2PaymentsPost201ResponsePointOfSaleInformation'), require('./PtsV2PaymentsPost201ResponseProcessingInformation'), require('./PtsV2PaymentsPost201ResponseProcessorInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PaymentsPost201Response = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost201ResponseClientReferenceInformation, root.CyberSource.PtsV2PaymentsPost201ResponseErrorInformation, root.CyberSource.PtsV2PaymentsPost201ResponseInstallmentInformation, root.CyberSource.PtsV2PaymentsPost201ResponseIssuerInformation, root.CyberSource.PtsV2PaymentsPost201ResponseLinks, root.CyberSource.PtsV2PaymentsPost201ResponseOrderInformation, root.CyberSource.PtsV2PaymentsPost201ResponsePaymentInformation, root.CyberSource.PtsV2PaymentsPost201ResponsePointOfSaleInformation, root.CyberSource.PtsV2PaymentsPost201ResponseProcessingInformation, root.CyberSource.PtsV2PaymentsPost201ResponseProcessorInformation);
  }
}(this, function(ApiClient, PtsV2PaymentsPost201ResponseClientReferenceInformation, PtsV2PaymentsPost201ResponseErrorInformation, PtsV2PaymentsPost201ResponseInstallmentInformation, PtsV2PaymentsPost201ResponseIssuerInformation, PtsV2PaymentsPost201ResponseLinks, PtsV2PaymentsPost201ResponseOrderInformation, PtsV2PaymentsPost201ResponsePaymentInformation, PtsV2PaymentsPost201ResponsePointOfSaleInformation, PtsV2PaymentsPost201ResponseProcessingInformation, PtsV2PaymentsPost201ResponseProcessorInformation) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201Response model module.
   * @module model/PtsV2PaymentsPost201Response
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201Response</code>.
   * @alias module:model/PtsV2PaymentsPost201Response
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201Response} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201Response} The populated <code>PtsV2PaymentsPost201Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = PtsV2PaymentsPost201ResponseLinks.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('submitTimeUtc')) {
        obj['submitTimeUtc'] = ApiClient.convertToType(data['submitTimeUtc'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('reconciliationId')) {
        obj['reconciliationId'] = ApiClient.convertToType(data['reconciliationId'], 'String');
      }
      if (data.hasOwnProperty('errorInformation')) {
        obj['errorInformation'] = PtsV2PaymentsPost201ResponseErrorInformation.constructFromObject(data['errorInformation']);
      }
      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = PtsV2PaymentsPost201ResponseClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('processingInformation')) {
        obj['processingInformation'] = PtsV2PaymentsPost201ResponseProcessingInformation.constructFromObject(data['processingInformation']);
      }
      if (data.hasOwnProperty('processorInformation')) {
        obj['processorInformation'] = PtsV2PaymentsPost201ResponseProcessorInformation.constructFromObject(data['processorInformation']);
      }
      if (data.hasOwnProperty('issuerInformation')) {
        obj['issuerInformation'] = PtsV2PaymentsPost201ResponseIssuerInformation.constructFromObject(data['issuerInformation']);
      }
      if (data.hasOwnProperty('paymentInformation')) {
        obj['paymentInformation'] = PtsV2PaymentsPost201ResponsePaymentInformation.constructFromObject(data['paymentInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = PtsV2PaymentsPost201ResponseOrderInformation.constructFromObject(data['orderInformation']);
      }
      if (data.hasOwnProperty('pointOfSaleInformation')) {
        obj['pointOfSaleInformation'] = PtsV2PaymentsPost201ResponsePointOfSaleInformation.constructFromObject(data['pointOfSaleInformation']);
      }
      if (data.hasOwnProperty('installmentInformation')) {
        obj['installmentInformation'] = PtsV2PaymentsPost201ResponseInstallmentInformation.constructFromObject(data['installmentInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseLinks} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * An unique identification number assigned by CyberSource to identify the submitted request. It is also appended to the endpoint of the resource.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` Example `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC. 
   * @member {String} submitTimeUtc
   */
  exports.prototype['submitTimeUtc'] = undefined;
  /**
   * The status of the submitted transaction.  Possible values:  - AUTHORIZED  - PARTIAL_AUTHORIZED  - AUTHORIZED_PENDING_REVIEW  - DECLINED  - INVALID_REQUEST 
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The reconciliation id for the submitted transaction. This value is not returned for all processors. 
   * @member {String} reconciliationId
   */
  exports.prototype['reconciliationId'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseErrorInformation} errorInformation
   */
  exports.prototype['errorInformation'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseProcessingInformation} processingInformation
   */
  exports.prototype['processingInformation'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseProcessorInformation} processorInformation
   */
  exports.prototype['processorInformation'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseIssuerInformation} issuerInformation
   */
  exports.prototype['issuerInformation'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponsePaymentInformation} paymentInformation
   */
  exports.prototype['paymentInformation'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponsePointOfSaleInformation} pointOfSaleInformation
   */
  exports.prototype['pointOfSaleInformation'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseInstallmentInformation} installmentInformation
   */
  exports.prototype['installmentInformation'] = undefined;



  return exports;
}));


