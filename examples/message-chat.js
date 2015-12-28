// Generated by CoffeeScript 1.10.0
(function() {
  var TCPConnection, XbmcApi, config, connection, prompt, readline, rl, xbmcApi;

  process.stdout.write('\u001B[2J\u001B[0;0f');

  TCPConnection = require('../lib/TCPConnection');

  XbmcApi = require('../lib/XbmcApi');

  config = require('./config');

  connection = new TCPConnection({
    host: config.connection.host,
    port: config.connection.port,
    verbose: false
  });

  xbmcApi = new XbmcApi({
    silent: true,
    connection: connection
  });

  readline = require('readline');

  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  prompt = function() {
    return rl.question('xbmc-chat> ', function(name) {
      xbmcApi.message(name);
      return prompt();
    });
  };

  xbmcApi.on('connection:open', prompt);

}).call(this);
