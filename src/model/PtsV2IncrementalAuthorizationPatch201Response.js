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
    define(['ApiClient', 'model/PtsV2IncrementalAuthorizationPatch201ResponseClientReferenceInformation', 'model/PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation', 'model/PtsV2IncrementalAuthorizationPatch201ResponseLinks', 'model/PtsV2IncrementalAuthorizationPatch201ResponseOrderInformation', 'model/PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformation', 'model/PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2IncrementalAuthorizationPatch201ResponseClientReferenceInformation'), require('./PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation'), require('./PtsV2IncrementalAuthorizationPatch201ResponseLinks'), require('./PtsV2IncrementalAuthorizationPatch201ResponseOrderInformation'), require('./PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformation'), require('./PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2IncrementalAuthorizationPatch201Response = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2IncrementalAuthorizationPatch201ResponseClientReferenceInformation, root.CyberSource.PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation, root.CyberSource.PtsV2IncrementalAuthorizationPatch201ResponseLinks, root.CyberSource.PtsV2IncrementalAuthorizationPatch201ResponseOrderInformation, root.CyberSource.PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformation, root.CyberSource.PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation);
  }
}(this, function(ApiClient, PtsV2IncrementalAuthorizationPatch201ResponseClientReferenceInformation, PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation, PtsV2IncrementalAuthorizationPatch201ResponseLinks, PtsV2IncrementalAuthorizationPatch201ResponseOrderInformation, PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformation, PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation) {
  'use strict';




  /**
   * The PtsV2IncrementalAuthorizationPatch201Response model module.
   * @module model/PtsV2IncrementalAuthorizationPatch201Response
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2IncrementalAuthorizationPatch201Response</code>.
   * @alias module:model/PtsV2IncrementalAuthorizationPatch201Response
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>PtsV2IncrementalAuthorizationPatch201Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2IncrementalAuthorizationPatch201Response} obj Optional instance to populate.
   * @return {module:model/PtsV2IncrementalAuthorizationPatch201Response} The populated <code>PtsV2IncrementalAuthorizationPatch201Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = PtsV2IncrementalAuthorizationPatch201ResponseLinks.constructFromObject(data['_links']);
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
        obj['errorInformation'] = PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation.constructFromObject(data['errorInformation']);
      }
      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = PtsV2IncrementalAuthorizationPatch201ResponseClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('processorInformation')) {
        obj['processorInformation'] = PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation.constructFromObject(data['processorInformation']);
      }
      if (data.hasOwnProperty('paymentInformation')) {
        obj['paymentInformation'] = PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformation.constructFromObject(data['paymentInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = PtsV2IncrementalAuthorizationPatch201ResponseOrderInformation.constructFromObject(data['orderInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PtsV2IncrementalAuthorizationPatch201ResponseLinks} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * An unique identification number assigned by CyberSource to identify the submitted request. It is also appended to the endpoint of the resource.  On incremental authorizations, this value with be the same as the identification number returned in the original authorization response. 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` Example `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  Returned by authorization service. 
   * @member {String} submitTimeUtc
   */
  exports.prototype['submitTimeUtc'] = undefined;
  /**
   * The status of the submitted transaction.  Possible values:  - AUTHORIZED  - AUTHORIZED_PENDING_REVIEW  - DECLINED 
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Reference number for the transaction. This value is not returned for all processors.  Returned by authorization service.  #### Atos Positive string (6)  #### All other processors String (60) 
   * @member {String} reconciliationId
   */
  exports.prototype['reconciliationId'] = undefined;
  /**
   * @member {module:model/PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation} errorInformation
   */
  exports.prototype['errorInformation'] = undefined;
  /**
   * @member {module:model/PtsV2IncrementalAuthorizationPatch201ResponseClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation} processorInformation
   */
  exports.prototype['processorInformation'] = undefined;
  /**
   * @member {module:model/PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformation} paymentInformation
   */
  exports.prototype['paymentInformation'] = undefined;
  /**
   * @member {module:model/PtsV2IncrementalAuthorizationPatch201ResponseOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;



  return exports;
}));

