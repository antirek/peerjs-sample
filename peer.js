
var PeerServer = require('peer').PeerServer;

var server = new PeerServer({port: 9000, path: '/myapp', debug: true});