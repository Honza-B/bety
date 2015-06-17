//var game = new Kiwi.Game( null, 'myGame' , null , { deviceTarget: Kiwi.TARGET_COCOON } );
var state = new Kiwi.State( 'statovni' );

state.preload = function() {
    Kiwi.State.prototype.preload.call(this);

    this.addImage( 'background', 'bg.png' );
}

state.create = function() {
    Kiwi.State.prototype.create.call( this );

    this.background = new Kiwi.GameObjects.StaticImage( this, this.textures.background, 0, 0 );
    this.addChild(this.background);
}

state.update = function(){
    Kiwi.State.prototype.update.call(this);
}

var gameOptions = {
	width: 768,
	height: 1024
};

var game = new Kiwi.Game('game-canvas', 'Menu', state, gameOptions);
