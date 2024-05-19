#!/usr/bin/node
const request = require('request');
const args = process.argv;

request.get(args[2], (err, res, body) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`code: ${res.statusCode}`);
  }
});
