
/* client.js */

(function($) {
  var codeOpen = /<pre><code>/g;
  var codeClose = /<\/code><\/pre>/g;
  
  $(document).ready(function() {
    $('h3 + .summary.description').prev().addClass('module-name');
    var srcOUt = $('#srcOut');
    $('div.base64-encoded').each(function() {
      var self = $(this).removeClass('base64-encoded').addClass('base64-decoded');
      var text = self.html();
      var html = $.base64.decode(text).replace(codeOpen, '<pre class="brush: js">').replace(codeClose, '</pre>');
      self.html(html);
    });
    SyntaxHighlighter.all();
  });
  
}).call(window, jQuery);