/**
 * OAuth2 API
 * OAuth2 Token Service (OAuth2)
 *
 * OpenAPI spec version: v3
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
    root.CyberSource.AccessTokenResponse = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AccessTokenResponse model module.
   * @module model/AccessTokenResponse
   * @version v3
   */

  /**
   * Constructs a new <code>AccessTokenResponse</code>.
   * @alias module:model/AccessTokenResponse
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>AccessTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccessTokenResponse} obj Optional instance to populate.
   * @return {module:model/AccessTokenResponse} The populated <code>AccessTokenResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('access_token')) {
        obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
      }
      if (data.hasOwnProperty('token_type')) {
        obj['token_type'] = ApiClient.convertToType(data['token_type'], 'String');
      }
      if (data.hasOwnProperty('refresh_token')) {
        obj['refresh_token'] = ApiClient.convertToType(data['refresh_token'], 'String');
      }
      if (data.hasOwnProperty('expires_in')) {
        obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Number');
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
      }
      if (data.hasOwnProperty('refresh_token_expires_in')) {
        obj['refresh_token_expires_in'] = ApiClient.convertToType(data['refresh_token_expires_in'], 'Number');
      }
      if (data.hasOwnProperty('client_status')) {
        obj['client_status'] = ApiClient.convertToType(data['client_status'], 'String');
      }
    }
    return obj;
  }

  /**
   * Created JWT token.
   * @member {String} access_token
   */
  exports.prototype['access_token'] = undefined;
  /**
   * Bearer.
   * @member {String} token_type
   */
  exports.prototype['token_type'] = undefined;
  /**
   * Newly created JWT token for initial request or if refresh token expired, else the same refresh token as in the request.
   * @member {String} refresh_token
   */
  exports.prototype['refresh_token'] = undefined;
  /**
   * Number of seconds left till the access token gets expired.
   * @member {Number} expires_in
   */
  exports.prototype['expires_in'] = undefined;
  /**
   * List of permissions for APIs.
   * @member {String} scope
   */
  exports.prototype['scope'] = undefined;
  /**
   * Number of seconds left till the refresh token gets expired.
   * @member {Number} refresh_token_expires_in
   */
  exports.prototype['refresh_token_expires_in'] = undefined;
  /**
   * Successful response can be returned only if client status is active.
   * @member {String} client_status
   */
  exports.prototype['client_status'] = undefined;



  return exports;
}));


