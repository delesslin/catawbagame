let Engine = Matter.Engine;
let World = Matter.World;
let Bodies = Matter.Bodies;
let engine;
let world;

let boxes = [];
let bounds = [];
function setup() {
	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;
	for(let i = 0; i < 20; i++){
		let len = 50;
		boxes.push(new Box(random(width), random(height), len, len));
	}
	
	bounds.push(new Boundary(width/2, height, width, 50));
	
	Engine.run(engine);
}

function draw() {
	background(33);
	for(let i = 0; i < boxes.length; i++){
		boxes[i].show();
	}
}

function Box(x, y, w, h){
	this.body = Bodies.rectangle(x, y, w, h);
	World.add(world, this.body);
	this.w = w;
	this.h = h;
	

	this.show = function(){
		let angle = this.body.angle;
		push();
			fill(255)
			stroke(255);
			translate(this.body.position.x, this.body.position.y);
			rotate(angle);
			rectMode(CENTER);
			rect(0, 0, this.w, this.h);
		pop();
	}
}

function Boundary(x, y, height, width){
	let options = {
		isStatic: true
	}

	this.body = Bodies.rectangle(x, y, height, width, options);
	World.add(world, this.body);
}