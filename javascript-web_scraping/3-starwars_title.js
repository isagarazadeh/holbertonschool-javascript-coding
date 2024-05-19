#!/usr/bin/node
const request = require('request');
const args = process.argv;

request.get(`https://swapi-api.hbtn.io/api/films/${args[2]}`, (err, res, body) => {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.parse(body).title);
  }
});
