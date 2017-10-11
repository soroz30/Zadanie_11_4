function Phone(brand, price, color, camera) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.camera = camera
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color +
				" and the price is " + this.price + ".");
}

Phone.prototype.cameraInfo = function() {
	console.log("The phone camera resolution is " + this.camera);
}

var iPhone6S = new Phone("Apple", 2250, "silver", "12 Mpx");
var samsungGalaxyS6 = new Phone("Samsung", 1600, "gold", "16 Mpx");
var onePlusOne = new Phone("OnePlus", 1300, "black", "13 Mpx");

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();

iPhone6S.cameraInfo();
samsungGalaxyS6.cameraInfo();
onePlusOne.cameraInfo();