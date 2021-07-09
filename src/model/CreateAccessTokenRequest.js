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
    root.CyberSource.CreateAccessTokenRequest = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateAccessTokenRequest model module.
   * @module model/CreateAccessTokenRequest
   * @version v3
   */

  /**
   * Constructs a new <code>CreateAccessTokenRequest</code>.
   * @alias module:model/CreateAccessTokenRequest
   * @class
   * @param clientId {String} The client ID that you received when you registered your application in the CyberSource Business Center. This identifies your client application.
   * @param clientSecret {String} The client secret that you received when you registered your application in the CyberSource Business Center.
   */
  var exports = function(clientId, clientSecret) {
    var _this = this;

    _this['client_id'] = clientId;
    _this['client_secret'] = clientSecret;



  };

  /**
   * Constructs a <code>CreateAccessTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateAccessTokenRequest} obj Optional instance to populate.
   * @return {module:model/CreateAccessTokenRequest} The populated <code>CreateAccessTokenRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
      }
      if (data.hasOwnProperty('client_secret')) {
        obj['client_secret'] = ApiClient.convertToType(data['client_secret'], 'String');
      }
      if (data.hasOwnProperty('grant_type')) {
        obj['grant_type'] = ApiClient.convertToType(data['grant_type'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('refresh_token')) {
        obj['refresh_token'] = ApiClient.convertToType(data['refresh_token'], 'String');
      }
    }
    return obj;
  }

  /**
   * The client ID that you received when you registered your application in the CyberSource Business Center. This identifies your client application.
   * @member {String} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * The client secret that you received when you registered your application in the CyberSource Business Center.
   * @member {String} client_secret
   */
  exports.prototype['client_secret'] = undefined;
  /**
   * The grant type value determines which type of flow is used to obtain the access token. The first time your application requests a token, use the value `authorization_code`. When you use this value, you must also include the `code` field in the request. For subsequent request, use `refresh_token`. When you use this value, you must also include the `refresh_token` field in the request. Valid values: - authorization_code - refresh_token 
   * @member {String} grant_type
   */
  exports.prototype['grant_type'] = undefined;
  /**
   * This value is sent by CyberSource in the redirect URL. For security reasons, the code expires in 10 minutes. If it expires, you must repeat the redirect to request another. Conditional. This value is equired if grant_type is `authorization_code`.
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Conditional. Required if grant_type is `refresh_token`.
   * @member {String} refresh_token
   */
  exports.prototype['refresh_token'] = undefined;



  return exports;
}));

