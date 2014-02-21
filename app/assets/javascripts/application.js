// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require underscore/underscore
//= require eventable/eventable
//= require bigbird/bigbird


$(window).bind('orientationchange', function(e, onready){
  var holdall = $('.orient')
    if(onready) {
      holdall.addClass('orient-portrait');
      holdall.removeClass('orient-landscape');
      BigBird.Events.trigger('menu:closeMenu');
    }
    if (Math.abs(window.orientation) != 90){
      holdall.addClass('orient-portrait');
      holdall.removeClass('orient-landscape');
      BigBird.Events.trigger('menu:closeMenu');
   } 
   else {
      holdall.addClass('orient-landscape');
      holdall.removeClass('orient-portrait');
      BigBird.Events.trigger('menu:closeMenu');
   }
});
$(window).trigger('orientationchange', true);


var MobileNav = (function(){

  return BigBird.Module.extend({

    el: 'body',

    events: {
      "click .site-menu-toggler": "onTogglerClick",
      "click .site-nav_link": "closeMenu"
    },

    subscriptions: {
      'menu:closeMenu': 'closeMenu',
    },

    initialize: function() {
      console.log('asd');
    },

    onTogglerClick: function(e) {
      e.preventDefault();
      e.stopPropagation();
      $(this.el).toggleClass('js-menu_is_open');
    },

    closeMenu: function() {
      $(this.el).removeClass('js-menu_is_open');
    }

  });

})();

var App = {
  Common: {
    initialize: function() {
      new MobileNav();
    }
  }
};
var Initializer = new BigBird.Initializer({ modules: App, base: $('body') });
