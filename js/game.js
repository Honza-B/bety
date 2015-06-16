//var game = new Kiwi.Game( null, 'myGame' , null , { deviceTarget: Kiwi.TARGET_COCOON } );
var game = new Kiwi.Game( );
var state = new Kiwi.State( 'statovni' );

state.preload = function() {
    Kiwi.State.prototype.preload.call(this);

    this.addImage( 'background', 'assets/bg.png' );
}

state.create = function() {
    Kiwi.State.prototype.create.call( this );

    this.background = new Kiwi.GameObjects.StaticImage( this, this.textures.background, 0, 0 );
    this.addChild(this.background);
}

state.update = function(){
    Kiwi.State.prototype.update.call(this);
}

game.states.addState( state );
game.states.switchState( 'startovni' );
