'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Robots
const robots = exports.robots = (req, res) => {
  res.type('text/plain');
  res.send('User-agent: *\nDisallow: /');
};

// Index Route
const index = exports.index = (req, res) => {
  let viewData = {
    pageTitle: 'DVSA Node Starter Kit'
  };
  res.render('main/index', viewData);
};