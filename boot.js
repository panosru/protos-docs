
var Protos = require('protos');

Protos.bootstrap(__dirname, {
  
  // Server configuration
  
  server: {
    host: 'localhost',
    port: 8080,
    multiProcess: false,
    stayUp: 'production'
  },
  
  // Application environments
  
  environments: {
    
    // Default Environment
    default: 'development',
    
    development: function(app) {
      
      // Debug messages on development
      app.debugLog = false;
      
      // Development Logging
      app.use('logger', {
        accessLog: false,
        accessLogFormat: 'default',
        accessLogConsole: false,
        infoLevel: {console: false},
        errorLevel: {console: false}
      });
      
    },

    production: function(app) {
      
      // Debug messages on production
      app.debugLog = false;
      
      // Production Logging
      app.use('logger', {
        accessLog: true,
        accessLogFormat: 'default',
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
      
      // Asset compiler
      if (app.environment === 'production') {
        // Serve minified assets on production
        app.use('asset_compiler', {
          minify: {
            'css/client.min.css': ['css/blueprint.css', 'css/print.less', 'css/main.less'],
            'js/client.min.js': 'js/client.js'
          }
        });
      } else {
        // Compile & Watch on development/debug
        app.use('asset_compiler');
      }
      
      // Optimize performance by caching responses in storage
      // app.use('response_cache', {
      //   storage: 'redis:response_cache'
      // });
    }
  
  }
  
});

module.exports = protos.app;
