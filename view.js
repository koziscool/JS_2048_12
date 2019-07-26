

view2048 = {
  model: model2048,

  colors: [ "papayawhip", "darkkhaki", "coral", "orange", "aquamarine", "lime", "green", 
    "dodgerblue", "mediumblue", "darkred", "purple", "brown", "black" ],
  
  init: function(  ) {
    this.update();
  },

  update: function(  ) {
    this.$grid = $("#grid-2048");
    for( var i = 0; i < this.model.numSquares ; i++ ) {
      var value = this.model.values[i] || "&nbsp";
      var color = this.colors[0];
      if( value > 0 ) color = this.colors[ Math.log2(value) ];
      var $square = $("<div><div class='value'>" + value + "</div></div>");
      $square.addClass("square");
      $square.css("background-color", color);
      this.$grid.append($square);
    }
  },


};

