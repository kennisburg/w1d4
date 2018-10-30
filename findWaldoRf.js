function findWaldo(arr, found) {
    arr.forEach(function(person, index) {
        if (person === 'Waldo') {
            findWaldo.index = index;
            found();
        }
      })
    }
  
  function actionWhenFound() {
    console.log("Found Waldo at index " + findWaldo.index + '!');
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);