describe("a flower", function() {
  var flower;

  beforeEach(function() {
    flower = new Flower("daffodil", "yellow");
  });

  it("has a name",
  	expect(flower.name).toEqual("daffodil");
  );

  it("has a color",
  	expect(flower.color).toEqual("yellow");
  );
});
