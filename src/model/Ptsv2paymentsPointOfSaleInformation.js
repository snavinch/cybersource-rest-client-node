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
    define(['ApiClient', 'model/Ptsv2paymentsPointOfSaleInformationEmv'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsPointOfSaleInformationEmv'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsPointOfSaleInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsPointOfSaleInformationEmv);
  }
}(this, function(ApiClient, Ptsv2paymentsPointOfSaleInformationEmv) {
  'use strict';




  /**
   * The Ptsv2paymentsPointOfSaleInformation model module.
   * @module model/Ptsv2paymentsPointOfSaleInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsPointOfSaleInformation</code>.
   * @alias module:model/Ptsv2paymentsPointOfSaleInformation
   * @class
   */
  var exports = function() {
    var _this = this;























  };

  /**
   * Constructs a <code>Ptsv2paymentsPointOfSaleInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsPointOfSaleInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsPointOfSaleInformation} The populated <code>Ptsv2paymentsPointOfSaleInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('terminalId')) {
        obj['terminalId'] = ApiClient.convertToType(data['terminalId'], 'String');
      }
      if (data.hasOwnProperty('terminalSerialNumber')) {
        obj['terminalSerialNumber'] = ApiClient.convertToType(data['terminalSerialNumber'], 'String');
      }
      if (data.hasOwnProperty('laneNumber')) {
        obj['laneNumber'] = ApiClient.convertToType(data['laneNumber'], 'String');
      }
      if (data.hasOwnProperty('catLevel')) {
        obj['catLevel'] = ApiClient.convertToType(data['catLevel'], 'Number');
      }
      if (data.hasOwnProperty('entryMode')) {
        obj['entryMode'] = ApiClient.convertToType(data['entryMode'], 'String');
      }
      if (data.hasOwnProperty('terminalCapability')) {
        obj['terminalCapability'] = ApiClient.convertToType(data['terminalCapability'], 'Number');
      }
      if (data.hasOwnProperty('pinEntryCapability')) {
        obj['pinEntryCapability'] = ApiClient.convertToType(data['pinEntryCapability'], 'Number');
      }
      if (data.hasOwnProperty('operatingEnvironment')) {
        obj['operatingEnvironment'] = ApiClient.convertToType(data['operatingEnvironment'], 'String');
      }
      if (data.hasOwnProperty('emv')) {
        obj['emv'] = Ptsv2paymentsPointOfSaleInformationEmv.constructFromObject(data['emv']);
      }
      if (data.hasOwnProperty('amexCapnData')) {
        obj['amexCapnData'] = ApiClient.convertToType(data['amexCapnData'], 'String');
      }
      if (data.hasOwnProperty('trackData')) {
        obj['trackData'] = ApiClient.convertToType(data['trackData'], 'String');
      }
      if (data.hasOwnProperty('storeAndForwardIndicator')) {
        obj['storeAndForwardIndicator'] = ApiClient.convertToType(data['storeAndForwardIndicator'], 'String');
      }
      if (data.hasOwnProperty('cardholderVerificationMethod')) {
        obj['cardholderVerificationMethod'] = ApiClient.convertToType(data['cardholderVerificationMethod'], ['String']);
      }
      if (data.hasOwnProperty('terminalInputCapability')) {
        obj['terminalInputCapability'] = ApiClient.convertToType(data['terminalInputCapability'], ['String']);
      }
      if (data.hasOwnProperty('terminalCardCaptureCapability')) {
        obj['terminalCardCaptureCapability'] = ApiClient.convertToType(data['terminalCardCaptureCapability'], 'String');
      }
      if (data.hasOwnProperty('terminalOutputCapability')) {
        obj['terminalOutputCapability'] = ApiClient.convertToType(data['terminalOutputCapability'], 'String');
      }
      if (data.hasOwnProperty('terminalPinCapability')) {
        obj['terminalPinCapability'] = ApiClient.convertToType(data['terminalPinCapability'], 'Number');
      }
      if (data.hasOwnProperty('deviceId')) {
        obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'String');
      }
      if (data.hasOwnProperty('pinBlockEncodingFormat')) {
        obj['pinBlockEncodingFormat'] = ApiClient.convertToType(data['pinBlockEncodingFormat'], 'Number');
      }
      if (data.hasOwnProperty('encryptedPin')) {
        obj['encryptedPin'] = ApiClient.convertToType(data['encryptedPin'], 'String');
      }
      if (data.hasOwnProperty('encryptedKeySerialNumber')) {
        obj['encryptedKeySerialNumber'] = ApiClient.convertToType(data['encryptedKeySerialNumber'], 'String');
      }
      if (data.hasOwnProperty('partnerSdkVersion')) {
        obj['partnerSdkVersion'] = ApiClient.convertToType(data['partnerSdkVersion'], 'String');
      }
    }
    return obj;
  }

  /**
   * Identifier for the terminal at your retail location. You can define this value yourself, but consult the processor for requirements.  For Payouts: This field is applicable for CtV. 
   * @member {String} terminalId
   */
  exports.prototype['terminalId'] = undefined;
  /**
   * Terminal serial number assigned by the hardware manufacturer. This value is provided by the client software that is installed on the POS terminal.  CyberSource does not forward this value to the processor. Instead, the value is forwarded to the CyberSource reporting functionality.  This field is supported only on American Express Direct, FDC Nashville Global, and SIX. 
   * @member {String} terminalSerialNumber
   */
  exports.prototype['terminalSerialNumber'] = undefined;
  /**
   * Identifier for an alternate terminal at your retail location. You define the value for this field.  This field is supported only for MasterCard transactions on FDC Nashville Global. Use the _terminalID_ field to identify the main terminal at your retail location. If your retail location has multiple terminals, use this _alternateTerminalID_ field to identify the terminal used for the transaction.  This field is a pass-through, which means that CyberSource does not check the value or modify the value in any way before sending it to the processor. 
   * @member {String} laneNumber
   */
  exports.prototype['laneNumber'] = undefined;
  /**
   * Type of cardholder-activated terminal. Possible values:   - 1: Automated dispensing machine  - 2: Self-service terminal  - 3: Limited amount terminal  - 4: In-flight commerce (IFC) terminal  - 5: Radio frequency device  - 6: Mobile acceptance terminal  - 7: Electronic cash register  - 8: E-commerce device at your location  - 9: Terminal or cash register that uses a dialup connection to connect to the transaction processing network  * Applicable only for CTV for Payouts. 
   * @member {Number} catLevel
   */
  exports.prototype['catLevel'] = undefined;
  /**
   * Method of entering credit card information into the POS terminal. Possible values:   - contact: Read from direct contact with chip card.  - contactless: Read from a contactless interface using chip data.  - keyed: Manually keyed into POS terminal.  - msd: Read from a contactless interface using magnetic stripe data (MSD).  - swiped: Read from credit card magnetic stripe.  The contact, contactless, and msd values are supported only for EMV transactions. * Applicable only for CTV for Payouts. 
   * @member {String} entryMode
   */
  exports.prototype['entryMode'] = undefined;
  /**
   * POS terminal’s capability. Possible values:   - 1: Terminal has a magnetic stripe reader only.  - 2: Terminal has a magnetic stripe reader and manual entry capability.  - 3: Terminal has manual entry capability only.  - 4: Terminal can read chip cards.  - 5: Terminal can read contactless chip cards.  The values of 4 and 5 are supported only for EMV transactions. * Applicable only for CTV for Payouts.   
   * @member {Number} terminalCapability
   */
  exports.prototype['terminalCapability'] = undefined;
  /**
   * A one-digit code that identifies the capability of terminal to capture PINs.  This code does not necessarily mean that a PIN was entered or is included in this message.  For Payouts: This field is applicable for CtV. 
   * @member {Number} pinEntryCapability
   */
  exports.prototype['pinEntryCapability'] = undefined;
  /**
   * Operating environment. Possible values:   - 0: No terminal used or unknown environment.  - 1: On merchant premises, attended.  - 2: On merchant premises, unattended, or cardholder terminal. Examples: oil, kiosks, self-checkout, home       computer, mobile telephone, personal digital assistant (PDA). Cardholder terminal is supported only for       MasterCard transactions on **CyberSource through VisaNet**.  - 3: Off merchant premises, attended. Examples: portable POS devices at trade shows, at service calls, or in       taxis.  - 4: Off merchant premises, unattended, or cardholder terminal. Examples: vending machines, home computer,       mobile telephone, PDA. Cardholder terminal is supported only for MasterCard transactions on **CyberSource       through VisaNet**.  - 5: On premises of cardholder, unattended.  - 9: Unknown delivery mode.  - S: Electronic delivery of product. Examples: music, software, or eTickets that are downloaded over the       internet.  - T: Physical delivery of product. Examples: music or software that is delivered by mail or by a courier.  This field is supported only for **American Express Direct** and **CyberSource through VisaNet**.  **CyberSource through VisaNet**\\ For MasterCard transactions, the only valid values are 2 and 4. 
   * @member {String} operatingEnvironment
   */
  exports.prototype['operatingEnvironment'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPointOfSaleInformationEmv} emv
   */
  exports.prototype['emv'] = undefined;
  /**
   * Point-of-sale details for the transaction. This value is returned only for **American Express Direct**. CyberSource generates this value, which consists of a series of codes that identify terminal capability, security data, and specific conditions present at the time the transaction occurred. To comply with the CAPN requirements, this  value must be included in all subsequent follow-on requests, such as captures and follow-on credits.  When you perform authorizations, captures, and credits through CyberSource, CyberSource passes this value from the authorization service to the subsequent services for you. However, when you perform authorizations through CyberSource and perform subsequent services through other financial institutions, you must ensure that your requests for captures and credits include this value. 
   * @member {String} amexCapnData
   */
  exports.prototype['amexCapnData'] = undefined;
  /**
   * Card’s track 1 and 2 data. For all processors except FDMS Nashville, this value consists of one of the following:   - Track 1 data  - Track 2 data  - Data for both tracks 1 and 2  For FDMS Nashville, this value consists of one of the following:  - Track 1 data  - Data for both tracks 1 and 2  Example: %B4111111111111111^SMITH/JOHN ^1612101976110000868000000?;4111111111111111=16121019761186800000? 
   * @member {String} trackData
   */
  exports.prototype['trackData'] = undefined;
  /**
   * When connectivity is unavailable, the client software that is installed on the POS terminal can store a transaction in its memory and send it for authorization when connectivity is restored. This value is provided by the client software that is installed on the POS terminal.  CyberSource does not forward this value to the processor. Instead, the value is forwarded to the CyberSource reporting functionality.  Possible values: - Y: Transaction was stored and then forwarded. - N (default): Transaction was not stored and then forwarded.  This field is supported only on American Express Direct, FDC Nashville Global, and SIX. 
   * @member {String} storeAndForwardIndicator
   */
  exports.prototype['storeAndForwardIndicator'] = undefined;
  /**
   * @member {Array.<String>} cardholderVerificationMethod
   */
  exports.prototype['cardholderVerificationMethod'] = undefined;
  /**
   * @member {Array.<String>} terminalInputCapability
   */
  exports.prototype['terminalInputCapability'] = undefined;
  /**
   * Indicates whether the terminal can capture the card.  Possible values: - 1: Terminal can capture card. - 0: Terminal cannot capture card.  This field is supported only on American Express Direct. 
   * @member {String} terminalCardCaptureCapability
   */
  exports.prototype['terminalCardCaptureCapability'] = undefined;
  /**
   * Indicates whether the terminal can print or display messages.  Possible values: - 1: Neither - 2: Print only - 3: Display only - 4: Print and display  This field is supported only on American Express Direct. 
   * @member {String} terminalOutputCapability
   */
  exports.prototype['terminalOutputCapability'] = undefined;
  /**
   * Maximum PIN length that the terminal can capture.  Possible values: -  0: No PIN capture capability -  1: PIN capture capability unknown -  4: Four characters -  5: Five characters -  6: Six characters -  7: Seven characters -  8: Eight characters -  9: Nine characters - 10: Ten characters - 11: Eleven characters - 12: Twelve characters  This field is supported only on American Express Direct and SIX. 
   * @member {Number} terminalPinCapability
   */
  exports.prototype['terminalPinCapability'] = undefined;
  /**
   * Value created by the client software that uniquely identifies the POS device. This value is provided by the client software that is installed on the POS terminal.  CyberSource does not forward this value to the processor. Instead, the value is forwarded to the CyberSource reporting functionality.  This field is supported only on American Express Direct, FDC Nashville Global, and SIX. 
   * @member {String} deviceId
   */
  exports.prototype['deviceId'] = undefined;
  /**
   * Format that is used to encode the PIN block. This value is provided by the client software that is installed on the POS terminal.  Possible values: - 0: ISO 9564 format 0 - 1: ISO 9564 format 1 - 2: ISO 9564 format 2 - 3: ISO 9564 format 3  In the Credit Card Guide for the auth service: This field is supported only on American Express Direct, FDC Nashville Global, and SIX. 
   * @member {Number} pinBlockEncodingFormat
   */
  exports.prototype['pinBlockEncodingFormat'] = undefined;
  /**
   * Encrypted PIN.  This value is provided by the client software that is installed on the POS terminal.  In the Credit Card Guide for the auth service: This field is supported only on American Express Direct, FDC Nashville Global, and SIX. 
   * @member {String} encryptedPin
   */
  exports.prototype['encryptedPin'] = undefined;
  /**
   * This is a combination of the device's unique identifier and a transaction counter that is used in the process of decrypting the encrypted PIN.  For all terminals that are using derived unique key per transaction (DUKPT) encryption, this is generated as a single number within the terminal. 
   * @member {String} encryptedKeySerialNumber
   */
  exports.prototype['encryptedKeySerialNumber'] = undefined;
  /**
   * Version of the software installed on the POS terminal. This value is provided by the client software that is installed on the POS terminal.  CyberSource does not forward this value to the processor. Instead, the value is forwarded to the CyberSource reporting functionality.  This field is supported only on American Express Direct, FDC Nashville Global, and SIX. 
   * @member {String} partnerSdkVersion
   */
  exports.prototype['partnerSdkVersion'] = undefined;



  return exports;
}));


