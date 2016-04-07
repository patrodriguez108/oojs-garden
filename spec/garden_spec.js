describe("the garden object", function() {
  it("is named Kula Botanical Garden", function() {
    expect(garden.name).toEqual("Kula Botanical Garden");
  });

  it("is located in Makawao", function() {
    expect(garden.location).toEqual("Makawao");
  });

  describe("has a collection of flowers", function() {
    it("has an empty collection of flowers", function() {
      expect(garden.flowers).toEqual([]);
    });

    describe("adding and removing flowers", function() {
      var daffodil = { name: "daffodil", color: "yellow" };
      var iris     = { name: "iris", color: "purple" }
      var aster    = { name: "aster", color: "red" }

      beforeEach(function() {
        garden.flowers = [daffodil];
      });

      afterAll(function() {
        garden.flowers = [];
      });


      it("can add a flower to its flowers", function() {
        expect(garden.flowers).toEqual([daffodil]);
        garden.addFlower(iris);
        expect(garden.flowers).toEqual([daffodil, iris]);
      });

      it("can plant multiple flowers", function() {
        expect(garden.flowers).toEqual([daffodil]);
        garden.plant([iris, aster]);
        expect(garden.flowers).toHaveSameElementsAs([daffodil, iris, aster]);
      });

      it("can remove a flower", function() {
        expect(garden.flowers).toEqual([daffodil]);
        garden.remove(daffodil);
        expect(garden.flowers).toEqual([]);
      });
    });

    describe("filtering its flowers", function() {
      it("filters flowers by color", function() {
        var yellowFlower1 = { color: "yellow" };
        var yellowFlower2 = { color: "yellow" };
        var redFlower1    = { color: "red" };

        garden.flowers = [yellowFlower1, redFlower1, yellowFlower2];
        expect(garden.flowersByColor("yellow")).toHaveSameElementsAs([yellowFlower1, yellowFlower2]);
      });

      it("filters flowers by name", function() {
        var iris1  = { name: "iris" };
        var iris2  = { name: "iris" };
        var aster1 = { name: "aster" };

        garden.flowers = [aster1, iris1, iris2];
        expect(garden.flowersByName("iris")).toHaveSameElementsAs([iris1, iris2]);
      });
    });
  });
});
