var garden = {
	name: "Kula Botanical Garden",
	location: "Makawao",
	flowers: [],
	addFlower: function(flower) {
		this.flowers.push(flower);
	},
	plant: function(bouquet) {
		console.log(this.flowers);
		console.log(bouquet);
		var plants = this.flowers.concat(bouquet);
		console.log(plants)
	}
};