'use strict';

const yourSecret = function (req, res) {
  return res.send(`Your personal secret is ${92}!`);
};

module.exports = { yourSecret };