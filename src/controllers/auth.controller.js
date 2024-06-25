'use strict';

const googleSignup = function (req, res) {
  return res.send('This is me, again!');
};

const logout = function (req, res) {
  return res.send(`You have logged out!`);
};

module.exports = { googleSignup, logout };
