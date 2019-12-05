const { oauth2 } = require('./salesforce-api/connect.js');

const app = require('express')();
const port = process.env.PORT || 3000;

app.get('/oauth2/auth', (req, res) => {
    res.redirect(oauth2(true).getAuthorizationUrl({}));
});
app.get('/oauth2/callback', (req, res) => {
    const code = req.param('code');
    console.log(code);
});
app.get('/', (req, res) => {
    res.status(200).send('ok');
});
const server = app.listen(port, () => {
    const serverPort = server.address().port;
    console.log('Example app listening at port %s', serverPort);
});
