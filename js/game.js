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
}
