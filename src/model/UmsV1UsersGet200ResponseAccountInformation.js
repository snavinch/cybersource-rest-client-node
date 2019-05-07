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
    root.CyberSource.UmsV1UsersGet200ResponseAccountInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UmsV1UsersGet200ResponseAccountInformation model module.
   * @module model/UmsV1UsersGet200ResponseAccountInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>UmsV1UsersGet200ResponseAccountInformation</code>.
   * @alias module:model/UmsV1UsersGet200ResponseAccountInformation
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>UmsV1UsersGet200ResponseAccountInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UmsV1UsersGet200ResponseAccountInformation} obj Optional instance to populate.
   * @return {module:model/UmsV1UsersGet200ResponseAccountInformation} The populated <code>UmsV1UsersGet200ResponseAccountInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
      if (data.hasOwnProperty('roleId')) {
        obj['roleId'] = ApiClient.convertToType(data['roleId'], 'String');
      }
      if (data.hasOwnProperty('permissions')) {
        obj['permissions'] = ApiClient.convertToType(data['permissions'], ['String']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('createdTime')) {
        obj['createdTime'] = ApiClient.convertToType(data['createdTime'], 'Date');
      }
      if (data.hasOwnProperty('lastAccessTime')) {
        obj['lastAccessTime'] = ApiClient.convertToType(data['lastAccessTime'], 'Date');
      }
      if (data.hasOwnProperty('languagePreference')) {
        obj['languagePreference'] = ApiClient.convertToType(data['languagePreference'], 'String');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;
  /**
   * @member {String} roleId
   */
  exports.prototype['roleId'] = undefined;
  /**
   * @member {Array.<String>} permissions
   */
  exports.prototype['permissions'] = undefined;
  /**
   * @member {module:model/UmsV1UsersGet200ResponseAccountInformation.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Date} createdTime
   */
  exports.prototype['createdTime'] = undefined;
  /**
   * @member {Date} lastAccessTime
   */
  exports.prototype['lastAccessTime'] = undefined;
  /**
   * @member {String} languagePreference
   */
  exports.prototype['languagePreference'] = undefined;
  /**
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "active"
     * @const
     */
    "active": "active",
    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive",
    /**
     * value: "locked"
     * @const
     */
    "locked": "locked",
    /**
     * value: "disabled"
     * @const
     */
    "disabled": "disabled",
    /**
     * value: "forgotpassword"
     * @const
     */
    "forgotpassword": "forgotpassword",
    /**
     * value: "deleted"
     * @const
     */
    "deleted": "deleted"  };


  return exports;
}));


