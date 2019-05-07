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
    define(['ApiClient', 'model/CreateInstrumentIdentifierRequest', 'model/InlineResponse4001', 'model/TmsV1InstrumentIdentifiersDelete409Response', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200Response', 'model/TmsV1InstrumentIdentifiersPost200Response', 'model/UpdateInstrumentIdentifierRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateInstrumentIdentifierRequest'), require('../model/InlineResponse4001'), require('../model/TmsV1InstrumentIdentifiersDelete409Response'), require('../model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200Response'), require('../model/TmsV1InstrumentIdentifiersPost200Response'), require('../model/UpdateInstrumentIdentifierRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InstrumentIdentifierApi = factory(root.CyberSource.ApiClient, root.CyberSource.CreateInstrumentIdentifierRequest, root.CyberSource.InlineResponse4001, root.CyberSource.TmsV1InstrumentIdentifiersDelete409Response, root.CyberSource.TmsV1InstrumentIdentifiersPaymentInstrumentsGet200Response, root.CyberSource.TmsV1InstrumentIdentifiersPost200Response, root.CyberSource.UpdateInstrumentIdentifierRequest);
  }
}(this, function(ApiClient, CreateInstrumentIdentifierRequest, InlineResponse4001, TmsV1InstrumentIdentifiersDelete409Response, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200Response, TmsV1InstrumentIdentifiersPost200Response, UpdateInstrumentIdentifierRequest) {
  'use strict';

  /**
   * InstrumentIdentifier service.
   * @module api/InstrumentIdentifierApi
   * @version 0.0.1
   */

  /**
   * Constructs a new InstrumentIdentifierApi. 
   * @alias module:api/InstrumentIdentifierApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the createInstrumentIdentifier operation.
     * @callback module:api/InstrumentIdentifierApi~createInstrumentIdentifierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TmsV1InstrumentIdentifiersPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an Instrument Identifier
     * @param {String} profileId The id of a profile containing user specific TMS configuration.
     * @param {String} vCMerchantId CyberSource merchant id.
     * @param {String} vCCorrelationId The mandatory correlation id passed by upstream (calling) system.
     * @param {module:model/CreateInstrumentIdentifierRequest} createInstrumentIdentifierRequest Please specify either a Card, Bank Account or Enrollable Card
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientApplication Client application name
     * @param {module:api/InstrumentIdentifierApi~createInstrumentIdentifierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TmsV1InstrumentIdentifiersPost200Response}
     */
    this.createInstrumentIdentifier = function(profileId, vCMerchantId, vCCorrelationId, createInstrumentIdentifierRequest, opts, callback) {
      opts = opts || {};
      var postBody = createInstrumentIdentifierRequest;

      // verify the required parameter 'profileId' is set
      if (profileId === undefined || profileId === null) {
        throw new Error("Missing the required parameter 'profileId' when calling createInstrumentIdentifier");
      }

      // verify the required parameter 'vCMerchantId' is set
      if (vCMerchantId === undefined || vCMerchantId === null) {
        throw new Error("Missing the required parameter 'vCMerchantId' when calling createInstrumentIdentifier");
      }

      // verify the required parameter 'vCCorrelationId' is set
      if (vCCorrelationId === undefined || vCCorrelationId === null) {
        throw new Error("Missing the required parameter 'vCCorrelationId' when calling createInstrumentIdentifier");
      }

      // verify the required parameter 'createInstrumentIdentifierRequest' is set
      if (createInstrumentIdentifierRequest === undefined || createInstrumentIdentifierRequest === null) {
        throw new Error("Missing the required parameter 'createInstrumentIdentifierRequest' when calling createInstrumentIdentifier");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': profileId,
        'v-c-merchant-id': vCMerchantId,
        'v-c-correlation-id': vCCorrelationId,
        'Client-Application': opts['clientApplication']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/hal+json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = TmsV1InstrumentIdentifiersPost200Response;

      return this.apiClient.callApi(
        '/tms/v1/instrumentidentifiers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteInstrumentIdentifier operation.
     * @callback module:api/InstrumentIdentifierApi~deleteInstrumentIdentifierCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an Instrument Identifier
     * @param {String} profileId The id of a profile containing user specific TMS configuration.
     * @param {String} vCMerchantId CyberSource merchant id.
     * @param {String} vCCorrelationId The mandatory correlation id passed by upstream (calling) system.
     * @param {String} tokenId The TokenId of an Instrument Identifier.
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientApplication Client application name
     * @param {module:api/InstrumentIdentifierApi~deleteInstrumentIdentifierCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteInstrumentIdentifier = function(profileId, vCMerchantId, vCCorrelationId, tokenId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'profileId' is set
      if (profileId === undefined || profileId === null) {
        throw new Error("Missing the required parameter 'profileId' when calling deleteInstrumentIdentifier");
      }

      // verify the required parameter 'vCMerchantId' is set
      if (vCMerchantId === undefined || vCMerchantId === null) {
        throw new Error("Missing the required parameter 'vCMerchantId' when calling deleteInstrumentIdentifier");
      }

      // verify the required parameter 'vCCorrelationId' is set
      if (vCCorrelationId === undefined || vCCorrelationId === null) {
        throw new Error("Missing the required parameter 'vCCorrelationId' when calling deleteInstrumentIdentifier");
      }

      // verify the required parameter 'tokenId' is set
      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling deleteInstrumentIdentifier");
      }


      var pathParams = {
        'tokenId': tokenId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': profileId,
        'v-c-merchant-id': vCMerchantId,
        'v-c-correlation-id': vCCorrelationId,
        'Client-Application': opts['clientApplication']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['*/*'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/tms/v1/instrumentidentifiers/{tokenId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllPaymentInstruments operation.
     * @callback module:api/InstrumentIdentifierApi~getAllPaymentInstrumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all Payment Instruments associated with an Instrument Identifier
     * @param {String} profileId The id of a profile containing user specific TMS configuration.
     * @param {String} vCMerchantId CyberSource merchant id.
     * @param {String} vCCorrelationId The mandatory correlation id passed by upstream (calling) system.
     * @param {String} tokenId The TokenId of an Instrument Identifier.
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientApplication Client application name
     * @param {Number} opts.offset Starting Payment Instrument record in zero-based dataset that should be returned as the first object in the array. Default is 0. (default to 0)
     * @param {Number} opts.limit The maximum number of Payment Instruments that can be returned in the array starting from the offset record in zero-based dataset. Default is 20, maximum is 100. (default to 20)
     * @param {module:api/InstrumentIdentifierApi~getAllPaymentInstrumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200Response}
     */
    this.getAllPaymentInstruments = function(profileId, vCMerchantId, vCCorrelationId, tokenId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'profileId' is set
      if (profileId === undefined || profileId === null) {
        throw new Error("Missing the required parameter 'profileId' when calling getAllPaymentInstruments");
      }

      // verify the required parameter 'vCMerchantId' is set
      if (vCMerchantId === undefined || vCMerchantId === null) {
        throw new Error("Missing the required parameter 'vCMerchantId' when calling getAllPaymentInstruments");
      }

      // verify the required parameter 'vCCorrelationId' is set
      if (vCCorrelationId === undefined || vCCorrelationId === null) {
        throw new Error("Missing the required parameter 'vCCorrelationId' when calling getAllPaymentInstruments");
      }

      // verify the required parameter 'tokenId' is set
      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling getAllPaymentInstruments");
      }


      var pathParams = {
        'tokenId': tokenId
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      var headerParams = {
        'profile-id': profileId,
        'v-c-merchant-id': vCMerchantId,
        'v-c-correlation-id': vCCorrelationId,
        'Client-Application': opts['clientApplication']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['*/*'];
      var accepts = ['*/*'];
      var returnType = TmsV1InstrumentIdentifiersPaymentInstrumentsGet200Response;

      return this.apiClient.callApi(
        '/tms/v1/instrumentidentifiers/{tokenId}/paymentinstruments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInstrumentIdentifier operation.
     * @callback module:api/InstrumentIdentifierApi~getInstrumentIdentifierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TmsV1InstrumentIdentifiersPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an Instrument Identifier
     * @param {String} profileId The id of a profile containing user specific TMS configuration.
     * @param {String} vCMerchantId CyberSource merchant id.
     * @param {String} vCCorrelationId The mandatory correlation id passed by upstream (calling) system.
     * @param {String} tokenId The TokenId of an Instrument Identifier.
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientApplication Client application name
     * @param {module:api/InstrumentIdentifierApi~getInstrumentIdentifierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TmsV1InstrumentIdentifiersPost200Response}
     */
    this.getInstrumentIdentifier = function(profileId, vCMerchantId, vCCorrelationId, tokenId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'profileId' is set
      if (profileId === undefined || profileId === null) {
        throw new Error("Missing the required parameter 'profileId' when calling getInstrumentIdentifier");
      }

      // verify the required parameter 'vCMerchantId' is set
      if (vCMerchantId === undefined || vCMerchantId === null) {
        throw new Error("Missing the required parameter 'vCMerchantId' when calling getInstrumentIdentifier");
      }

      // verify the required parameter 'vCCorrelationId' is set
      if (vCCorrelationId === undefined || vCCorrelationId === null) {
        throw new Error("Missing the required parameter 'vCCorrelationId' when calling getInstrumentIdentifier");
      }

      // verify the required parameter 'tokenId' is set
      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling getInstrumentIdentifier");
      }


      var pathParams = {
        'tokenId': tokenId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': profileId,
        'v-c-merchant-id': vCMerchantId,
        'v-c-correlation-id': vCCorrelationId,
        'Client-Application': opts['clientApplication']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['*/*'];
      var accepts = ['*/*'];
      var returnType = TmsV1InstrumentIdentifiersPost200Response;

      return this.apiClient.callApi(
        '/tms/v1/instrumentidentifiers/{tokenId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateInstrumentIdentifier operation.
     * @callback module:api/InstrumentIdentifierApi~updateInstrumentIdentifierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TmsV1InstrumentIdentifiersPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Instrument Identifier
     * @param {String} profileId The id of a profile containing user specific TMS configuration.
     * @param {String} vCMerchantId CyberSource merchant id.
     * @param {String} vCCorrelationId The mandatory correlation id passed by upstream (calling) system.
     * @param {String} tokenId The TokenId of an Instrument Identifier.
     * @param {module:model/UpdateInstrumentIdentifierRequest} updateInstrumentIdentifierRequest Specify the previous transaction ID to update.
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientApplication Client application name
     * @param {module:api/InstrumentIdentifierApi~updateInstrumentIdentifierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TmsV1InstrumentIdentifiersPost200Response}
     */
    this.updateInstrumentIdentifier = function(profileId, vCMerchantId, vCCorrelationId, tokenId, updateInstrumentIdentifierRequest, opts, callback) {
      opts = opts || {};
      var postBody = updateInstrumentIdentifierRequest;

      // verify the required parameter 'profileId' is set
      if (profileId === undefined || profileId === null) {
        throw new Error("Missing the required parameter 'profileId' when calling updateInstrumentIdentifier");
      }

      // verify the required parameter 'vCMerchantId' is set
      if (vCMerchantId === undefined || vCMerchantId === null) {
        throw new Error("Missing the required parameter 'vCMerchantId' when calling updateInstrumentIdentifier");
      }

      // verify the required parameter 'vCCorrelationId' is set
      if (vCCorrelationId === undefined || vCCorrelationId === null) {
        throw new Error("Missing the required parameter 'vCCorrelationId' when calling updateInstrumentIdentifier");
      }

      // verify the required parameter 'tokenId' is set
      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling updateInstrumentIdentifier");
      }

      // verify the required parameter 'updateInstrumentIdentifierRequest' is set
      if (updateInstrumentIdentifierRequest === undefined || updateInstrumentIdentifierRequest === null) {
        throw new Error("Missing the required parameter 'updateInstrumentIdentifierRequest' when calling updateInstrumentIdentifier");
      }


      var pathParams = {
        'tokenId': tokenId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': profileId,
        'v-c-merchant-id': vCMerchantId,
        'v-c-correlation-id': vCCorrelationId,
        'Client-Application': opts['clientApplication']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['*/*'];
      var accepts = ['*/*'];
      var returnType = TmsV1InstrumentIdentifiersPost200Response;

      return this.apiClient.callApi(
        '/tms/v1/instrumentidentifiers/{tokenId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
