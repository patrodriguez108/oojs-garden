var garden = {
	name: "Kula Botanical Garden",
	location: "Makawao",
	flowers: [],
	addFlower: function(flower) {
		this.flowers.push(flower);
	},
	plant: function(bouquet) {
		this.flowers = this.flowers.concat(bouquet);
	},
	remove: function(flower) {
		var flowerIndex = this.flowers.indexOf(flower);
		this.flowers.splice(flowerIndex)
	},
	flowersByColor(color) {
		var flowers = [];
		for (var i = 0; i < this.flowers.length; i++) {
			if (this.flowers[i].color === color) {
				flowers.push(this.flowers[i]);
			};
		};
		return flowers
	},
	flowersByName(name) {
		var flowers = [];
		for (var i = 0; i < this.flowers.length; i++) {
			if (this.flowers[i].name === name) {
				flowers.push(this.flowers[i]);
			};
		};
		return flowers
	}
};