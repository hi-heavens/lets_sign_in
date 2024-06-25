'use strict';

const checkLoggedIn = function (req, res, next) {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return res.status(401).json({
      error: 'You are not logged in!',
    });
  }
  next();
};

module.exports = checkLoggedIn;
