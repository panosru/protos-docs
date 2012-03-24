
var app = protos.app,
    util = require('util'),
    inflect = protos.inflect,
    IncomingMessage = require('http').IncomingMessage;

/**
  Sets the page title
  
  @param {string} title
  @public
 */

IncomingMessage.prototype.setPageTitle = function(title) {
  this.__pageTitle = util.format('%s &raquo; %s', app.config.title, inflect.capitalize(title));
}

/**
  Gets the page title
  
  @param {string} title
  @returns {string} Page title
  @public
 */

IncomingMessage.prototype.pageTitle = function() {
  return this.__pageTitle || app.config.title;
}

