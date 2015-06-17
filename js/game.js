//var game = new Kiwi.Game( null, 'myGame' , null , { deviceTarget: Kiwi.TARGET_COCOON } );
var state = new Kiwi.State( 'statovni' );

var nextstage = new Kiwi.State( 'dalsi' );

var gameOptions = {
	width: 1024,
	height: 768
};

var game = new Kiwi.Game('game-canvas', 'Menu', state, gameOptions);

game.states.addState( nextstage );

state.preload = function() {
    Kiwi.State.prototype.preload.call(this);

    this.addImage( 'background', 'assets/bg.png' );
}

state.create = function() {
    Kiwi.State.prototype.create.call( this );

    this.myButton = new Kiwi.HUD.Widget.Button( this.game, 'PRESS ME!', 50, 50 );
    this.game.huds.defaultHUD.addWidget( this.myButton );

    this.myButton.style.color = 'white';
    this.myButton.style.fontSize = '2em';
    this.myButton.style.fontWeight = 'bold';
    this.myButton.style.padding = '0.5em 1em';
    this.myButton.style.backgroundColor = 'black';
    this.myButton.style.cursor = 'pointer';

    this.myButton.input.onDown.add( this.buttonPressed, this );

    this.background = new Kiwi.GameObjects.StaticImage( this, this.textures.background, 0, 0 );
    this.addChild(this.background);
}

state.update = function(){
    Kiwi.State.prototype.update.call(this);
}

state.buttonPressed = function() {
    game.states.switchState( nextstage );
}
