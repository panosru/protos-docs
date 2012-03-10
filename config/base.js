
/* Main Configuration */

module.exports = {
  
  title: 'CoreJS &mdash; Web Application Framework',
  language: 'en-US',
  encoding: 'utf-8',
  rawViews: false,
  
  headers: {
    'Content-Type': function(req, res) { return "text/html; charset=" + this.config.encoding; },
    'Date': function() { return new Date().toUTCString(); },
    'Status': function(req, res) {  return res.statusCode + " " + this.httpStatusCodes[res.statusCode]; },
    'X-Powered-By': 'corejs'
  },
  
  server: {
    strictRouting: false,
  },
  
  cacheControl: {
    maxAge: 10 * 365 * 24 * 60 * 60,
    static: 'public',
    dynamic: 'private, must-revalidate, max-age=0',
    error: 'no-cache',
    json: 'private'
  },
  
  json: {
    pretty: true,
    replacer: null,
    contentType: 'application/json',
    connection: 'close'
  },
  
  engines: {
    liquor: {
      pretty: true,
      indent: 0
    }
  },
  
  viewExtensions: {
    html: 'liquor',
    mustache: 'hogan'
  }

}