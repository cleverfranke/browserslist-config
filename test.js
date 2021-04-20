const tap = require('tap');
const browserslist = require('browserslist');
const config = require('./');

const prodBrowsers = browserslist(config.production);
const devBrowsers = browserslist(config.development);

// The production browserslist config has content
tap.not(prodBrowsers.length, 0);

// The production browserslist config doesn't have IE11
tap.notOk(prodBrowsers.includes('ie 11'));

// The development browserslist only has two browsers
tap.has(devBrowsers.length, 2);
