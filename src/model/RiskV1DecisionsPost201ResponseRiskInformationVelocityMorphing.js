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
    root.CyberSource.RiskV1DecisionsPost201ResponseRiskInformationVelocityMorphing = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RiskV1DecisionsPost201ResponseRiskInformationVelocityMorphing model module.
   * @module model/RiskV1DecisionsPost201ResponseRiskInformationVelocityMorphing
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>RiskV1DecisionsPost201ResponseRiskInformationVelocityMorphing</code>.
   * @alias module:model/RiskV1DecisionsPost201ResponseRiskInformationVelocityMorphing
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>RiskV1DecisionsPost201ResponseRiskInformationVelocityMorphing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiskV1DecisionsPost201ResponseRiskInformationVelocityMorphing} obj Optional instance to populate.
   * @return {module:model/RiskV1DecisionsPost201ResponseRiskInformationVelocityMorphing} The populated <code>RiskV1DecisionsPost201ResponseRiskInformationVelocityMorphing</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('fieldName')) {
        obj['fieldName'] = ApiClient.convertToType(data['fieldName'], 'String');
      }
      if (data.hasOwnProperty('informationCode')) {
        obj['informationCode'] = ApiClient.convertToType(data['informationCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * Morphing count. Note The count is not returned for the initial transaction.
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * Field name of the morphing element. specified by the setting that you chose in the Velocity Editor. For all possible values, Please refer to Simple Order API Developer Guide  on [CyberSource Business Center](https://ebc2.cybersource.com/ebc2/) - Look for 'Reply Fields': \"decisionReply_morphingElement_#_fieldName\". 
   * @member {String} fieldName
   */
  exports.prototype['fieldName'] = undefined;
  /**
   * Identifier that CYBS assigned to the velocity rule specified by the number.
   * @member {String} informationCode
   */
  exports.prototype['informationCode'] = undefined;



  return exports;
}));


