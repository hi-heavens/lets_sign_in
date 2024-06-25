'use strict';

const googleSignup = function (req, res) {
  return res.send('This is me, again!');
};

const googleCallback = function (req, res) {
  return res.send(`Google called us back!`);
};

const logout = function (req, res) {
  return res.send(`You have logged out!`);
};

module.exports = { googleSignup, googleCallback, logout };
