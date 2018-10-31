/**
 * CyberSource Flex API
 * Simple PAN tokenization service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse2001', 'model/InlineResponseDefault', 'model/TokenizeRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2001'), require('../model/InlineResponseDefault'), require('../model/TokenizeRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TokenizationApi = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse2001, root.CyberSource.InlineResponseDefault, root.CyberSource.TokenizeRequest);
  }
}(this, function(ApiClient, InlineResponse2001, InlineResponseDefault, TokenizeRequest) {
  'use strict';

  /**
   * Tokenization service.
   * @module api/TokenizationApi
   * @version 0.0.1
   */

  /**
   * Constructs a new TokenizationApi. 
   * @alias module:api/TokenizationApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the tokenize operation.
     * @callback module:api/TokenizationApi~tokenizeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Tokenize card
     * Returns a token representing the supplied card details. The token replaces card data and can be used as the Subscription ID in the CyberSource Simple Order API or SCMP API. This is an unauthenticated call that you should initiate from your customer’s device or browser.
     * @param {Object} opts Optional parameters
     * @param {module:model/TokenizeRequest} opts.tokenizeRequest 
     * @param {module:api/TokenizationApi~tokenizeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    this.tokenize = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['tokenizeRequest'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/flex/v1/tokens/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));