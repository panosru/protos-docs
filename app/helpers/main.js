
/**
  Main Helper
  
  Methods provided by this helper are exposed in views as `$method`.
  
  This helper inherits the default methods provided by the Helper class,
  available in `corejs.lib.helper`.
  
  You can extend this helper and provide your own methods to be made
  available in all views using the naming convention explained above.
  
  Other helpers expose their methods as `${alias}_method`, alias being
  the Controller Alias they're associated with.
  
  This association is a convention used to better organize and group 
  the functionality associated with each controller. Not a functionality
  requirement.
 */
 
var util = require('util');

function MainHelper(app) {

  // Renders active menu items
  
  this.active_page = function(locals, page) {
    return (locals.activePage === page) ? ' class="active"' : '';
  }
  
  // Renders the page id
  
  this.page_id = function(locals) {
    var active = locals.activePage;
    if (active) return util.format(' id="%s"', active);
  }
  
}

module.exports = MainHelper;