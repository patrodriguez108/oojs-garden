beforeEach(function(){
  jasmine.addMatchers({
    toHaveSameElementsAs: function(actual, expected) {
      return {
        compare: function(actual, expected) {
          if (actual.length !== expected.length) {
            return { pass: false };
          }

          var unmatchedElements = actual.filter(function(actual_element) {
            return !expected.find(function(expected_element) {
              return actual_element === expected_element;
            });
          });

          return { pass: (unmatchedElements.length === 0) };
        }
      };
    }
  });
});
