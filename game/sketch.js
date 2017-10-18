//TODO: add wall boundaries
//TODO: remove icon on click
//TODO: add catawba word prompt
//TODO: add if statement for on click
//TODO:

let Engine = Matter.Engine;
let World = Matter.World;
let Bodies = Matter.Bodies;
let engine;
let world;

let boxes = [];
let bounds = [];

function setup() {
	createCanvas(windowWidth, windowHeight);

	//Matter.js stuff
	engine = Engine.create();
	world = engine.world;

	//create options
	for(let i = 0; i < 20; i++){
		let len = 100;
		let current = icons[floor(random(icons.length))];
		boxes.push(new Box(random(width), random(height), len));
		boxes[i].icon = loadImage(current.icon);
		boxes[i].clr = color(current.color[0], current.color[1], current.color[2]);
	}

	//create boundaries
	bounds.push(new Boundary(width/2, height, width, 50));

	//let's go
	Engine.run(engine);
}

function draw() {
	background(33);
	for(let i = 0; i < boxes.length; i++){
		boxes[i].show();
	}


}
