var juego = new Phaser.Game(370,550, Phaser.CANVAS,'bloque_juego');
var fondoJuego;
var boton;
var flappy;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;
var texto;
var style;


var estadoPrincipal={
	preload: function(){
		juego.load.image('fondo','img/bg.jpeg');
		juego.load.spritesheet('pajaros','img/aveazul.png',37.5,25);
	},

	create: function(){
		fondoJuego = juego.add.tileSprite(0,0,370,550,'fondo');
		flappy = juego.add.sprite(100,100,'pajaros');
		flappy.frame=1;
		flappy.animations.add('vuelo',[0,1,2,3],10,true);

		teclaDerecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		teclaIzquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		teclaArriba = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
		teclaAbajo = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);

		texto = juego.add.text(0,525,"DIEGO ACHO ",{font:"20px Arial", fill:"#ffffff", align:"center"});


	},

	update:function(){
		fondoJuego.tilePosition.x-=1;
		flappy.animations.play('vuelo');
		if (teclaDerecha.isDown) {
			flappy.x++;
			flappy.scale.setTo(1,1);
		}
		else if (teclaIzquierda.isDown) {
			flappy.x--;
			flappy.scale.setTo(-1,1);
		}
		else if (teclaArriba.isDown) {
			flappy.y--;
		}
		else if (teclaAbajo.isDown) {
			flappy.y++;
		}

	}

};
juego.state.add('principal',estadoPrincipal);
juego.state.start('principal');