


model2048 = {

  numSquares: 16,
  values: [],


  init: function(  ) {
    for( var i = 0; i < this.numSquares ; i++ ) {
      this.values.push(0);
    }
    this.insertRandomTile();
    this.insertRandomTile();
  },


  insertRandomTile: function(  ) {
    var zeroes = [];
    for( var i = 0; i < this.numSquares ; i++ ) {
      if( this.values[i] === 0 ) zeroes.push(i);
    }
    var rand = Math.floor( Math.random() * zeroes.length );
    var newValue = Math.random < 0.9 ? 2 : 4;
    this.values[ zeroes[rand] ] = newValue;
  },
};


