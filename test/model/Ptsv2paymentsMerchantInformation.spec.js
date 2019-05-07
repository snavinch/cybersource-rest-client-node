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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CyberSource);
  }
}(this, function(expect, CyberSource) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CyberSource.Ptsv2paymentsMerchantInformation();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Ptsv2paymentsMerchantInformation', function() {
    it('should create an instance of Ptsv2paymentsMerchantInformation', function() {
      // uncomment below and update the code to test Ptsv2paymentsMerchantInformation
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformation();
      //expect(instance).to.be.a(CyberSource.Ptsv2paymentsMerchantInformation);
    });

    it('should have the property merchantDescriptor (base name: "merchantDescriptor")', function() {
      // uncomment below and update the code to test the property merchantDescriptor
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformation();
      //expect(instance).to.be();
    });

    it('should have the property salesOrganizationId (base name: "salesOrganizationId")', function() {
      // uncomment below and update the code to test the property salesOrganizationId
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformation();
      //expect(instance).to.be();
    });

    it('should have the property categoryCode (base name: "categoryCode")', function() {
      // uncomment below and update the code to test the property categoryCode
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformation();
      //expect(instance).to.be();
    });

    it('should have the property categoryCodeDomestic (base name: "categoryCodeDomestic")', function() {
      // uncomment below and update the code to test the property categoryCodeDomestic
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformation();
      //expect(instance).to.be();
    });

    it('should have the property taxId (base name: "taxId")', function() {
      // uncomment below and update the code to test the property taxId
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformation();
      //expect(instance).to.be();
    });

    it('should have the property vatRegistrationNumber (base name: "vatRegistrationNumber")', function() {
      // uncomment below and update the code to test the property vatRegistrationNumber
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformation();
      //expect(instance).to.be();
    });

    it('should have the property cardAcceptorReferenceNumber (base name: "cardAcceptorReferenceNumber")', function() {
      // uncomment below and update the code to test the property cardAcceptorReferenceNumber
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformation();
      //expect(instance).to.be();
    });

    it('should have the property transactionLocalDateTime (base name: "transactionLocalDateTime")', function() {
      // uncomment below and update the code to test the property transactionLocalDateTime
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformation();
      //expect(instance).to.be();
    });

    it('should have the property serviceFeeDescriptor (base name: "serviceFeeDescriptor")', function() {
      // uncomment below and update the code to test the property serviceFeeDescriptor
      //var instane = new CyberSource.Ptsv2paymentsMerchantInformation();
      //expect(instance).to.be();
    });

  });

}));
