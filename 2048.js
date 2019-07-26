


model2048 = {

  init: function(  ) {
  },
};



view2048 = {
  model: model2048,

  init: function(  ) {
    this.$grid = $("#grid-2048");
    this.$grid.append("<p>Tetris</p>");
  },
};




controller2048 = {
  model: model2048,
  view: view2048,

  init: function(  ) {
    this.model.init();
    this.view.init();
  },
}




$(document).ready( function() {
  controller2048.init();
});
