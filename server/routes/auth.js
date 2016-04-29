'use strict';

exports.getUser = function(req, res) {
  if (!req.isAuthenticated()) {
    res.status(200).json({error : 'Not Authenticated'});
    return;
  }
  res.status(200).json({user : req.user});
};

exports.login = function(req, res) {
  res.status(200).json({user : req.user});
};

exports.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};