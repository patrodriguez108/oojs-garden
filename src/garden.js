/*

Use object literal syntax to create a garden object with
the attributes and behaviors described in spec/garden_spec.js.

*/

var garden = {
	name: "Kula Botanical Garden",
	location: "Makawao",
	flowers: [],
	addFlower: function(flower) {
		this.flowers.push(flower);
	}
};