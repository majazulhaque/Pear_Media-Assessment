let noOfSpin = 0;
function spin() {
    noOfSpin++;
    wheel.play();
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

  let results = shuffle([
    TA[0],
    Flipkart[0],
    Myntra[0],
    Samsung[0],
    OnePlus[0],
    Realme[0],
    Whirlpool[0],
    Macbook[0],
    Speaker[0],
    Ipad[0],
  ]);
  if (TA.includes(results[0])) SelectedItem = "Try Again";
  if (Flipkart.includes(results[0])) SelectedItem = "10% Flipkart Discount";
  if (Myntra.includes(results[0])) SelectedItem = "Myntra Coupon";
  if (Samsung.includes(results[0])) SelectedItem = "Samsung Ideapad";
  if (OnePlus.includes(results[0])) SelectedItem = "OnePlus Airbud";
  if (Realme.includes(results[0])) SelectedItem = "Realme X9 5g";
  if (Whirlpool.includes(results[0])) SelectedItem = "Whirlpool AC";
  if (Macbook.includes(results[0])) SelectedItem = "MacBook Air";
  if (Speaker.includes(results[0])) SelectedItem = "Speaker Portable";
  if (Ipad.includes(results[0])) SelectedItem = "Ipad Mini";

  box.style.setProperty("transition", "all ease 5s");
  box.style.transform = "rotate(" + results[0] + "deg)";
  element.classList.remove("animate");

  setTimeout(function () {
    element.classList.add("animate");
  }, 5000);
  if (noOfSpin === 1 || SelectedItem === "Try Again") {
    setTimeout(function () {

    }, 5500);
  }
  if (noOfSpin === 2 && SelectedItem !== "Try Again") {
    setTimeout(function () {

    }, 5500);
  }
  setTimeout(function () {
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(90deg)";
  }, 6000);
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
