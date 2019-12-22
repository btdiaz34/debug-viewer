const { oauth2 } = require('./salesforce-api/connect.js');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(
    express.static(
        __dirname
    )
)

app.use(
    express.static(path.join(__dirname,'modules/'))
)
app.use(
    express.static(path.join(__dirname,'resources/'))
)
app.use(
    express.static(path.join(__dirname,'/index.js'))
)

app.get('/oauth2/auth', (req, res) => {
    res.redirect(oauth2(true).getAuthorizationUrl({}));
});
app.get('/oauth2/callback', (req, res) => {
    const code = req.param('code');
    console.log(code);
    res.status(200).send('ok');
});
app.get('/', (req, res) => {
    console.log('teest')
    res.status(200).sendFile(path.join(__dirname,'/dist/index.html'));
});
const server = app.listen(port, () => {
    const serverPort = server.address().port;
    console.log('Example app listening at port %s', serverPort);
    console.log(path.join(__dirname,'/dist/'))
});
