#!/usr/bin/node
const request = require('request');
const args = process.argv;

request.get(args[2], (err, res, body) => {
  if (err) {
    console.log(err);
  } else {
    const results = JSON.parse(body).results;
    let count = 0;
    for (const result of results) {
      const characters = result.characters;
      const id = characters.find(x => x.split('/')[5] === '18');
      if (id !== undefined) {
        count++;
      }
    }
    console.log(count);
  }
});
