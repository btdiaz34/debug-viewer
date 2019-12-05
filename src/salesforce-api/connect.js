const force = require('jsforce');
const clientId =
    '3MVG9vtcvGoeH2bg15tg5S2koRmL7Ol5lQ2UmptPW9leOco.5p4aTtqaGR2ZDwAhQ3VdBk.DpehHXNdknG3ZD';
const clientSecret =
    'AB377232B27E9E58DF5E1FAC0DB8B63965FC394E226A8D1C71ECD9A0D37D5757';
const redirectUri = 'https://captains-log-viewer.herokuapp.com/';

const generateOauth = isSandbox => {
    const loginUrl = isSandbox
        ? 'https://test.salesforce.com'
        : 'https://login.salesforce.com';
    return new force.OAuth2({
        loginUrl,
        clientId,
        clientSecret,
        redirectUri
    });
};

exports.oauth2 = generateOauth;
