#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(async function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'my_queue';
    var msg = 'Hello world';

    channel.assertQueue(queue, {
      durable: false
    });

    for (let i = 0; i < 100; i++) {
      channel.sendToQueue(queue, Buffer.from(msg));
      console.log(" [x] Sent %s", msg);
      await new Promise(r => setTimeout(r, 2000));
    }
  });
});
