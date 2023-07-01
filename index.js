function spin() {
    // Fetch container div using id.
  const element = document.getElementById("container");
  let SelectedItem = "";
  // Array is generated using online array generater.
  let TA = shuffle([1770, 2130, 2490]);
  let Myntra = shuffle([1890, 2250, 2610]);
  let Flipkart = shuffle([1850, 2210, 2570]);
  let Samsung = shuffle([1810, 2170, 2530]);
  let OnePlus = shuffle([1750, 2110, 2470]);
  let Realme = shuffle([1630, 1990, 2350]);
  let Whirlpool = shuffle([1570, 1930, 2290]);
  let Macbook = shuffle([1530, 1890, 2250]);
  let Speaker = shuffle([1470, 1830, 2190]);
  let Ipad = shuffle([1410, 1770, 2130]);
}

function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[currentIndex],
        array[currentIndex],
      ];
    }
    return array;
  }
  
