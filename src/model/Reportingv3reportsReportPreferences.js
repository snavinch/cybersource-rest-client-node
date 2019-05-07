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
    root.CyberSource.Reportingv3reportsReportPreferences = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Reportingv3reportsReportPreferences model module.
   * @module model/Reportingv3reportsReportPreferences
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Reportingv3reportsReportPreferences</code>.
   * Report Preferences
   * @alias module:model/Reportingv3reportsReportPreferences
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Reportingv3reportsReportPreferences</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Reportingv3reportsReportPreferences} obj Optional instance to populate.
   * @return {module:model/Reportingv3reportsReportPreferences} The populated <code>Reportingv3reportsReportPreferences</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('signedAmounts')) {
        obj['signedAmounts'] = ApiClient.convertToType(data['signedAmounts'], 'Boolean');
      }
      if (data.hasOwnProperty('fieldNameConvention')) {
        obj['fieldNameConvention'] = ApiClient.convertToType(data['fieldNameConvention'], 'String');
      }
    }
    return obj;
  }

  /**
   * Indicator to determine whether negative sign infront of amount for all refunded transaction
   * @member {Boolean} signedAmounts
   */
  exports.prototype['signedAmounts'] = undefined;
  /**
   * Specify the field naming convention to be followed in reports (applicable to only csv report formats
   * @member {module:model/Reportingv3reportsReportPreferences.FieldNameConventionEnum} fieldNameConvention
   */
  exports.prototype['fieldNameConvention'] = undefined;


  /**
   * Allowed values for the <code>fieldNameConvention</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FieldNameConventionEnum = {
    /**
     * value: "SOAPI"
     * @const
     */
    "SOAPI": "SOAPI",
    /**
     * value: "SCMP"
     * @const
     */
    "SCMP": "SCMP"  };


  return exports;
}));


