#!/usr/bin/node
const request = require('request');
const fs = require('fs');
const args = process.argv;

request.get(args[2], (err, res, body) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(args[3], body, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
});
