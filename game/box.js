function Box(x, y, len){
	this.body = Bodies.rectangle(x, y, len, len);
	World.add(world, this.body);
	this.len = len;


	this.show = function(){
		let angle = this.body.angle;
		let imgLen = this.len*0.9;
		push();
			fill(this.clr);
			stroke(222);
			translate(this.body.position.x, this.body.position.y);
			rotate(angle);
			rectMode(CENTER);
			rect(0, 0, this.len, this.len);
			image(this.icon, 0-imgLen/2, 0-imgLen/2, imgLen, imgLen);
		pop();
	}
}
