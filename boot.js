
var CoreJS = require('corejs');

var env = 'development';

CoreJS.bootstrap(__dirname, {
  
  // Server configuration
  
  server: {
    host: (env == 'production') ? 'corejs.org' : 'localhost',
    port: 8080,
    multiProcess: false,
    stayUp: 'production'
  },
  
  // Application environments
  
  environments: {
    
    // Default Environment
    default: env,
    
    development: function(app) {
      
      // Debug messages on development
      app.debugLog = false;
      
      // Development Logging
      app.use('logger', {
        accessLog: true,
        accessLogFormat: 'default',
        accessLogConsole: true,
        infoLevel: {console: true},
        errorLevel: {console: true}
      });

    },

    production: function(app) {
      
      // Debug messages on production
      app.debugLog = false;
      
      // Production Logging
      app.use('logger', {
        accessLog: true,
        accessLogFormat: 'detailed',
        accessLogConsole: false,
        infoLevel: {file: 'info.log'},
        errorLevel: {file: 'error.log'}
      });

    }
  },
  
  // Application events
  
  events: {
    
    init: function(app) {
      
      // Markdown processing
      app.use('markdown', {
        flags: {
          content: ['autolink', 'extraFootnote'],
          untrusted: ['noHTML', 'noTables', 'strict']
        },
        sanitize: ['untrusted']
      });
      
      // Shortcodes
      app.use('shortcode');
      
      // Static file server
      app.use('static_server');
      
      // Asset compiler, for LESS
      app.use('asset_compiler');
      
      // Optimize performance by caching responses in storage
      app.use('response_cache', {
        storage: 'redis:response_cache'
      });
    }
  
  }
  
});

module.exports = corejs.app;