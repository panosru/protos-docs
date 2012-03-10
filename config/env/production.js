
/* Production */

function Production(app) {

  // Enable view caching in production
  app.viewCaching = true;
  
  // Remove port number when running in production
  app.use('production_url');

}

module.exports = Production;