var shreks = [];
var shrek = [];

var width = 887;
var height = 540;

function Shrek(img) {

	this.x = mouseX;
	this.y = mouseY;

	this.xspeed = 5;
	this.yspeed = 5;

	this.img = img;

	this.move = function() {

		this.x += this.xspeed;
		this.y += this.yspeed;

	}

	this.show = function() {

		this.offset = random(-1, 1);

		if (this.y <= 0) { this.y *= 0; this.yspeed *= -1 + this.offset; donkey.play(); }
		if (this.y >= height) { this.y = height; this.yspeed *= -1 + this.offset; donkey.play(); }

		if (this.x <= 0) { this.x = 0; this.xspeed *= -1 + this.offset; donkey.play(); }
		if (this.x >= width) { this.x = width; this.xspeed *= -1 + this.offset; donkey.play(); }

		imageMode(CENTER);
		image(this.img, this.x, this.y, 125, 125);

	}

}

function preload() {

	shreksHead = loadImage("Images/shrek.png");

	song = loadSound("Sounds/song.mp3");
	donkey = loadSound("Sounds/donkey.mp3");

	swamp = loadImage("Images/background.png");

}

function setup() {

	createCanvas(887, 540);
	
	imageMode(CENTER);
	image(swamp, width / 2, height / 2, width, height);

}

function draw() {

	frameRate(60);

	if (!song.isPlaying()) {

		song.setVolume(3);
		donkey.setVolume(3);

		song.play();

	}
	
	background(255, 0, 255);

	imageMode(CENTER);
	image(swamp, width / 2, height / 2, width, height);

	for (var i = 0; i < shrek.length; i++) {

		shrek[i].move();
		shrek[i].show();

	}

	if (shrek.length > 15) {

		shrek.splice(0, 1);

	}


}

function mouseClicked() {

	shrek.push(new Shrek(shreksHead));

}