// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(waldo, i){
    if (waldo === "Waldo") {
      found(waldo, i);   // execute callback
    }
  }) 
}

function actionWhenFound(name, ind) {
  console.log("Found him!", name, ind);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);