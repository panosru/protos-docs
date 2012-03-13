
/* Client Side JavaScript */

(function($) {
  
var wdata, cw, tw, hh, wlimit;

var toc = ['<ul>'],
    allowed = ['guide', 'middleware'];
  
$(document).ready(function() {
  initClosureVars();
  beautifyLists();
  addLinkIDs();
  if (allowed.indexOf($body.attr('id')) >= 0) {
    $w.resize(adjustLayout);
    $w.scroll(scrollEvent);
  } else {
    $toc.remove();
    $expander.remove();
  }
  
});

var $body, $w, $content, $toc, $top, $expander;

function initClosureVars() {
  $expander = $('span#expander');
  $content = $('#content');
  $body = $('body');
  $toc = $('#toc-sidebar');
  $toc.width(tw=300);
  $top = $('#top-btn');
  $w = $(window);
  wlimit = 800 + 2*tw + 90;
  cw = $content.width();
  wdata = {
    w: $w.width(),
    h: $w.height()
  }
  
  var state;
  
  $toc.collapse = function() {
    var self = $toc;
    state = 'collapsed';
    self.width(0);
    $expander.css('left', '10px').html('+');
  }
  
  $toc.expand = function() {
    var self = $toc;
    state = 'expanded';
    self.width(tw);
    $expander.css('left', (tw+10)+'px').html('-');
  }
  
  $toc.toggle = function() {
    if (state == 'expanded') $toc.collapse();
    else $toc.expand();
  }
  
  $expander.click($toc.toggle);
  
  if ($w.width() < wlimit) $toc.collapse();
  else $toc.expand();
  
}

function beautifyLists() {
  $content.find('ul').each(function(i, ul) {
    $(ul).addClass('pretty').find('> li').each(function(j, li) { li = $(li);
      li.html('<span>'+ li.html() +'</span>');
    });
  });
}

function adjustLayout() {
  var w = $w.width();
  if (w != wdata.w) {
    if (w < wlimit) $toc.collapse();
    else $toc.expand();
  }
}

function scrollEvent() {
  if ($w.scrollTop() > 242) $top.show();
  else $top.hide();
}

function addLinkIDs() {
  var text, prefix, id;
  $content.find('h2, h3').each(function(i, elem) { elem = $(elem);
    text = elem.html();
    if (elem.is('h2')) {
      prefix = lowerDash(text);
      elem.attr('id', prefix);
      toc.push('<li class="section"><a href="#'+ prefix +'">'+ text +'</a></li>');
    } else if (elem.is('h3')) {
      id = prefix + '_' + lowerDash(text);
      elem.attr('id', id);
      toc.push('<li class="sub"><a href="#'+ id +'">'+ text +'</a></li>');
    }
  });
  toc.push('</ul>')
  toc = toc.join('\n');
  $toc.append(toc);
  $toc.find('ul > li > a').click(function() {
    if ($w.width() < wlimit) $toc.collapse();
  });
}

var amp = /&amp;/g;
var spaces = /\s+|\-/g;
var invalid = /[^a-z_\- ]/gi;

function lowerDash(str) {
  return str.toLowerCase()
    .replace(amp, '')
    .replace(invalid, '')
    .replace(spaces, '-');
}
  
}).call(window, jQuery);
