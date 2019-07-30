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
    define(['ApiClient', 'model/ReportingV3ReportDefinitionsNameGet200ResponseAttributes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportingV3ReportDefinitionsNameGet200ResponseAttributes'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ReportingV3ReportDefinitionsNameGet200Response = factory(root.CyberSource.ApiClient, root.CyberSource.ReportingV3ReportDefinitionsNameGet200ResponseAttributes);
  }
}(this, function(ApiClient, ReportingV3ReportDefinitionsNameGet200ResponseAttributes) {
  'use strict';




  /**
   * The ReportingV3ReportDefinitionsNameGet200Response model module.
   * @module model/ReportingV3ReportDefinitionsNameGet200Response
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ReportingV3ReportDefinitionsNameGet200Response</code>.
   * @alias module:model/ReportingV3ReportDefinitionsNameGet200Response
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ReportingV3ReportDefinitionsNameGet200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportingV3ReportDefinitionsNameGet200Response} obj Optional instance to populate.
   * @return {module:model/ReportingV3ReportDefinitionsNameGet200Response} The populated <code>ReportingV3ReportDefinitionsNameGet200Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('reportDefinitionId')) {
        obj['reportDefinitionId'] = ApiClient.convertToType(data['reportDefinitionId'], 'Number');
      }
      if (data.hasOwnProperty('reportDefintionName')) {
        obj['reportDefintionName'] = ApiClient.convertToType(data['reportDefintionName'], 'String');
      }
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = ApiClient.convertToType(data['attributes'], [ReportingV3ReportDefinitionsNameGet200ResponseAttributes]);
      }
      if (data.hasOwnProperty('supportedFormats')) {
        obj['supportedFormats'] = ApiClient.convertToType(data['supportedFormats'], ['String']);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Number} reportDefinitionId
   */
  exports.prototype['reportDefinitionId'] = undefined;
  /**
   * @member {String} reportDefintionName
   */
  exports.prototype['reportDefintionName'] = undefined;
  /**
   * @member {Array.<module:model/ReportingV3ReportDefinitionsNameGet200ResponseAttributes>} attributes
   */
  exports.prototype['attributes'] = undefined;
  /**
   * @member {Array.<String>} supportedFormats
   */
  exports.prototype['supportedFormats'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;



  return exports;
}));


