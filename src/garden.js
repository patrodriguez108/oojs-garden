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
	}
};