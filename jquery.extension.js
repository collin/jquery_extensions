;(function(_){
  _.create_element = function(tag) {
    return _('<'+tag+'>');
  };

  _.fn.extend({
    'join': function() {
      return [].join.apply(this, arguments);
    }

    ,hide_if_empty: function() {
      return this.if_empty(function(){this.hide();});
    }
    
    ,id: function() {
      return this.attr('id');
    }
    
    ,tag_name: function() {
      return this.attr('tagName').toLowerCase();
    }
    
    ,classes: function() {
      var classes = this.attr('class');
      if(classes == '') return [];
      return classes.split(/ /);  
    }
    
    ,not_empty: function() {
      return this.removeClass('empty');
    }
    
    ,remove_class_on_all_children_and_self: function(cls) {
      this.find('.'+cls).andSelf().removeClass(cls);
      return this;
    }
    
    ,dragstart: function(fn) {
      return this.bind('dragstart', fn);
    }
    
    ,dragend: function(fn) {
      return this.bind('dragend', fn);
    }
    
    ,size_to_fit: function() {
      return this.attr('size', this.val().length + 1 || 1);
    }
    
    ,keypress_size_to_fit: function() {
      return this.keypress(function(e) {
        var _this = _(this);
        setTimeout(function() {_this.size_to_fit();}, 0);
      });
    }

    ,blank: function() {
      return this.text().match(/^\s*$/);
    }
  
    ,remove_if_empty: function() {
      return this.if_empty(function() {this.remove();});
    }
    
    ,if_empty: function(fn) {
      if(this.html() === "") fn.call(this);
      return this;
    }
    
    ,blur_all: function() {
      this.find('input').blur();
      return this;
    }
 
    ,replace: function(replacement) {
      return this.map(function() {
        _(this)
          .after(replacement)
          .find(':input')
            .blur()
            .end()
          .remove();
        return this;
      });
    }
    
    ,log: function(msg) {
      console.log.apply(console, [this].concat(arguments));
      return this;
    }
    
    ,whitelist: function(expr) {
      return this.keypress(function(e) {
        if( e.charCode > 0 
        && !String.fromCharCode(e.which).match(expr)) e.preventDefault();
      });
    }
    
    ,blacklist: function(expr) {
      return this.keypress(function(e) {
        if( e.charCode > 0 
        && String.fromCharCode(e.which).match(expr)) e.preventDefault();
      });
    }
  });

  _.fn.clear = _.fn.empty;
})(jQuery);
