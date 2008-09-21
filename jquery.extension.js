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
    
    ,clear: function() {
      return this.html('');
    }
    
    ,remove_class_on_all_children_and_self: function(cls) {
      this.find('.'+cls).removeClass(cls);
      this.removeClass(cls);
      return this;
    }
    
    ,dragstart: function(fn) {
      return this.bind('dragstart', fn);
    }
    
    ,dragend: function(fn) {
      return this.bind('dragend', fn);
    }
    
    ,size_to_fit: function() {
      return this.attr('size', this.val().length || 1);
    }
    
    ,keyup_size_to_fit: function() {
      return this.keyup(function(e) {
        _(this).size_to_fit();
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
    
    ,log: function() {
      console.log(this[0]);
      return this;
    }
  });
})(jQuery);
