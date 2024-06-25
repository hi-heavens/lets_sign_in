'use strict';

exports.verifyCallback = function (accessToken, refreshToken, profile, done) {
  console.log('Google profile ' + profile);
  console.log('access token ' + accessToken);
  done(null, profile);
};
