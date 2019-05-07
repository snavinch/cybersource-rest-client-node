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
    define(['ApiClient', 'model/PtsV1TransactionBatchesGet200ResponseLinks', 'model/PtsV1TransactionBatchesGet200ResponseTransactionBatches'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV1TransactionBatchesGet200ResponseLinks'), require('./PtsV1TransactionBatchesGet200ResponseTransactionBatches'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV1TransactionBatchesGet200Response = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV1TransactionBatchesGet200ResponseLinks, root.CyberSource.PtsV1TransactionBatchesGet200ResponseTransactionBatches);
  }
}(this, function(ApiClient, PtsV1TransactionBatchesGet200ResponseLinks, PtsV1TransactionBatchesGet200ResponseTransactionBatches) {
  'use strict';




  /**
   * The PtsV1TransactionBatchesGet200Response model module.
   * @module model/PtsV1TransactionBatchesGet200Response
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV1TransactionBatchesGet200Response</code>.
   * @alias module:model/PtsV1TransactionBatchesGet200Response
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PtsV1TransactionBatchesGet200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV1TransactionBatchesGet200Response} obj Optional instance to populate.
   * @return {module:model/PtsV1TransactionBatchesGet200Response} The populated <code>PtsV1TransactionBatchesGet200Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('transactionBatches')) {
        obj['transactionBatches'] = ApiClient.convertToType(data['transactionBatches'], [PtsV1TransactionBatchesGet200ResponseTransactionBatches]);
      }
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = PtsV1TransactionBatchesGet200ResponseLinks.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('submitTimeUtc')) {
        obj['submitTimeUtc'] = ApiClient.convertToType(data['submitTimeUtc'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/PtsV1TransactionBatchesGet200ResponseTransactionBatches>} transactionBatches
   */
  exports.prototype['transactionBatches'] = undefined;
  /**
   * @member {module:model/PtsV1TransactionBatchesGet200ResponseLinks} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` Example `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC. 
   * @member {String} submitTimeUtc
   */
  exports.prototype['submitTimeUtc'] = undefined;



  return exports;
}));


