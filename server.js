const express = require("express");
const httpProxy = require("http-proxy");
const path = require("path")

const mainSite = express()
const werbeSite = express()

const port = 9080;
const host = "127.0.0.1";
const werbePort = 9081;
const werbeHost = "127.0.0.1";

mainSite.use(express.static(path.join(__dirname)));
werbeSite.use(express.static(path.join(__dirname)));
/*
httpProxy.createServer({
    hostnameOnly: true,
    router: {
        //web-development.cc
        'localhost:9080': '127.0.0.1:9080',
        'localhost:9081': '127.0.0.1:9081'
    }
}).listen(80);
*/
mainSite.get('/', function (req, res) {
    res.sendFile('index.html');
});
/*
mainSite.get('/werbung', function (req, res) {
    res.redirect('shop.html');
});
*/
werbeSite.get('/werbung', function (req, res) {
    res.redirect('shop.html');
});

werbeSite.get('/realsurvey', function (req, res) {
    res.redirect('survey.html');
});

werbeSite.get('/survey', function (req, res) {
    res.redirect('cookieJar.html');
});

mainSite.listen(port, host, () => {
    console.log('Server startet auf Port ' + port + '...');
});

werbeSite.listen(werbePort, werbeHost)