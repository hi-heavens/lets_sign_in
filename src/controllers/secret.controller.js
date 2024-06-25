'use strict';

const yourSecret = function (req, res) {
  return res.send(`Welcome ${req.user.name}. Your personal secret is ${92}!`);
};

module.exports = { yourSecret };
