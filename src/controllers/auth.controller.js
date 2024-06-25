'use strict';

const googleSignup = function (req, res) {
  return res.send('This is me, again!');
};

const googleCallback = function (req, res) {
  return res.send(`Google called us back!`);
};

const logout = function (req, res, next) {
  req.logout(err => {
    if (err) return next(err);
    res.redirect('/api/v1');
  });
  next();
};

module.exports = { googleSignup, googleCallback, logout };
