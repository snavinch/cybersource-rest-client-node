# CyberSource.PtsV2PaymentsCapturesPost201ResponsePointOfSaleInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terminalId** | **String** | Identifier for the terminal at your retail location. You can define this value yourself, but consult the processor for requirements.  #### CyberSource through VisaNet A list of all possible values is stored in your CyberSource account. If terminal ID validation is enabled for your CyberSource account, the value you send for this field is validated against the list each time you include the field in a request. To enable or disable terminal ID validation, contact CyberSource Customer Support.  When you do not include this field in a request, CyberSource uses the default value that is defined in your CyberSource account.  #### FDC Nashville Global To have your account configured to support this field, contact CyberSource Customer Support. This value must be a value that FDC Nashville Global issued to you.  #### For Payouts This field is applicable for CyberSource through VisaNet.  #### GPX Identifier for the terminal at your retail location. A list of all possible values is stored in your account. If terminal ID validation is enabled for your account, the value you send for this field is validated against the list each time you include the field in a request. To enable or disable terminal ID validation, contact customer support.  When you do not include this field in a request, the default value that is defined in your account is used.  Optional for authorizations.  #### Used by **Authorization** Optional for the following processors. When you do not include this field in a request, the default value that is defined in your account is used.   - American Express Direct   - Credit Mutuel-CIC   - FDC Nashville Global   - SIX - Chase Paymentech Solutions: Optional field. If you include this field in your request, you must also include &#x60;pointOfSaleInformation.catLevel&#x60;. - FDMS Nashville: The default value that is defined in your account is used. - GPX - OmniPay Direct: Optional field.  For the following processors, this field is not used. - GPN - JCN Gateway - RBS WorldPay Atlanta - TSYS Acquiring Solutions - Worldpay VAP  #### Card Present reply Terminal identifier assigned by the acquirer. This value must be printed on the receipt.  | [optional] 

