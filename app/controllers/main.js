/*jshint undef: false */

/**
  Main Controller
  
  The controller used as a namespace for the application's root path.
  
  Other controllers will use their alias as a namespace for the routes. For
  example, the route /admin on BlogController, will be accessed via
  http://localhost:8080/blog/admin.
  
  Routes defined in controllers take precedence over the static file routes. 
  This means you can control access to any of the static files available
  in the public/ directory.
 */

function MainController(app) {
  
  var production = (app.environment == 'production');
  
  get('/', function(req, res) {
    if (production) res.useCache('features');
    res.render('features', {
      activePage: 'features'
    });
  });
  
  get('/:page', {page: 'sitePages'}, function(req, res, params) {
    if (production) res.useCache(params.page);
    req.setPageTitle(params.page);
    res.render(params.page, {
      activePage: params.page
    });
  });

}

module.exports = MainController;