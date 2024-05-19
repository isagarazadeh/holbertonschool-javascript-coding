#!/usr/bin/node
const request = require('request');
const args = process.argv;

request.get(args[2], (err, res, body) => {
  if (err) {
    console.log(err);
  } else {
    const todos = JSON.parse(body);
    const results = {};
    for (const todo of todos) {
      if (todo.completed) {
        if (results[`${todo.userId}`] === undefined) {
          results[`${todo.userId}`] = 1;
        } else {
          results[`${todo.userId}`] += 1;
        }
      }
    }
    console.log(results);
  }
});
