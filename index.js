





/*var SibApiV3Sdk = required('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['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'];
apiKey.apiKey = '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';

// Uncomment below two lines to configure authorization using: partner-key
 var partnerKey = defaultClient.authentications['partner-key'];
 partnerKey.apiKey = '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';

var apiInstance = new SibApiV3Sdk.ContactsApi();

var createContact = new SibApiV3Sdk.CreateContact(); // CreateContact | Values to create a contact

createContact = {
	email: 'testmail@example.com',
	attributes: {
		SMS: '919900993',
		FNAME: 'John',
		LNAME: 'Doe'
	},
	listIds: [11],
	emailBlacklisted: false,
	smsBlacklisted: false,
	updateEnabled: false
};

apiInstance.createContact(createContact).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
*/


const formEl = document.querySelector(".form");

formEl.addEventListener('submit', event => {
	event.preventDefault();

	const formData = new FormData(formEl);
	const data = new URLSearchParams(formData);

	fetch('https://api.brevo.com/v3/emailCampaigns/campaignId/sendTest', {
		method:'POST',
		body: data
	}).then(res => res.json())
	.then(data => console.log(data))
	.catch(error => console.log(error));
})
