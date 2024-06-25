'use strict';

const checkLoggedIn = function (req, res, next) {
  console.log(`Current user is ${req.user}.`);
  const isLoggedIn = req.isAuthenticated() && req.user;
  if (!isLoggedIn) {
    return res.status(401).json({
      error: 'You are not logged in!',
    });
  }
  next();
};

module.exports = checkLoggedIn;
