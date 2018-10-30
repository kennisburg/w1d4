function findWaldo(arr, found) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "Waldo") {
          findWaldo.index = i;
          found();
        }
    }
}

  function actionWhenFound() {
    console.log("Found Waldo at index " + findWaldo.index + '!');
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);