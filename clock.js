function updateValueClasses(base, element, newValue) {
  if (!element) {
    return;
  }
  let classes = element.classList;
  for (let i = 0; i < classes.length; i++) {
    if (classes[i].startsWith(base + "-")) {
      element.classList.remove(classes[i]);
    }
  }
  element.classList.add(base + "-" + newValue);
}

function updateClock() {
  console.log("Updating clock...");
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let hours_tens = Math.floor(hours / 10);
  let hours_ones = hours % 10;
  let minutes_tens = Math.floor(minutes / 10);
  let minutes_ones = minutes % 10;

  updateValueClasses("units", document.querySelector("#cister-clock .units"), minutes_ones);
  updateValueClasses("tens", document.querySelector("#cister-clock .tens"), minutes_tens);
  updateValueClasses("hundreds", document.querySelector("#cister-clock .hundreds"), hours_ones);
  updateValueClasses("thousands", document.querySelector("#cister-clock .thousands"), hours_tens);
}

updateClock();
setInterval(updateClock, 10000);
