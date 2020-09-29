// App code goes here
var apiVersion = 'v30.0',
clientId = '3MVG9l2zHsylwlpTBQWp0nQ6hUoEYgwqQh3xs4_nzQQvvzQci5HYNsfN7KOPpV7N3gK7iBpgxhYvtORhvsiYH',
loginUrl = 'https://login.salesforce.com/',
redirectURI = 'http://localhost:3000/oauthcallback.html',
proxyURL = 'http://localhost:3000/proxy/',
client = new forcetk.Client(clientId, loginUrl, proxyURL);

function login() {
    var url = loginUrl + 'services/oauth2/authorize?display=popup&response_type=token'
                + '&client_id=' + encodeURIComponent(clientId)
                + '&redirect_uri=' + encodeURIComponent(redirectURI);
    window.open(url);
}

function oauthCallback(response) {
    if (response && response.access_token) {
        client.setSessionToken(response.access_token,
                               apiVersion,
                               response.instance_url);
        console.log('OAuth authentication succeeded');
    } else {
        alert("AuthenticationError: No Token");
    }
}

login();
