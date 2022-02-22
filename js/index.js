let fourComponents = document.querySelectorAll(".four div");
let zeroComponents = document.querySelectorAll(".zero div");
let scene0 = document.getElementById("scene");
let errorText = document.getElementById("error-text").innerHTML;

for (let i = 0; i < 10; i++) {
  let li = document.createElement("li");
  let h1 = document.createElement("h1");
  let random = Math.floor(Math.random() * 2);
  if (random === 0) {
    li.style.marginTop = "-120%";
  } else {
    li.style.marginTop = "120%";
  }

  li.setAttribute("data-depth", ".1" + i);
  li.classList.add("layer");
  h1.innerHTML = errorText;
  li.appendChild(h1);
  scene0.appendChild(li);
}

let layer0 = document.getElementsByClassName("layer");

let definition = document.getElementById("definition").innerText;
document.getElementById("definition").innerHTML = "";

for (let i = 0; i < definition.length; i++) {
  let span = document.createElement("span");
  span.innerHTML = definition.charAt(i);
  document.getElementById("definition").appendChild(span);
}

let counter = 0;
let span = document.querySelectorAll("#definition span");

window.addEventListener("load", () => {
  for (let i = 0; i < fourComponents.length; i++) {
    fourComponents[i].style.margin = 0;
  }
  for (let i = 0; i < zeroComponents.length; i++) {
    zeroComponents[i].style.margin = 0;
    if (i === 3) {
      zeroComponents[i].style.transform = "rotate(180deg) scale(1)";
    } else {
      zeroComponents[i].style.transform = "scale(1)";
    }
  }
  for (let i = 0; i < layer0.length; i++) {
    layer0[i].style.transition = "1s";
    layer0[i].style.transitionDelay = "." + i + "s";
    layer0[i].style.margin = 0;
  }
  setTimeout(() => {
    for (let i = 0; i < layer0.length; i++) {
      layer0[i].style.transition = "";
      layer0[i].style.transitionDelay = "";
    }
  }, 2000);
  setTimeout(() => {
    let timer = setInterval(function () {
      span[counter].style.fontSize = "40px";
      if (counter === definition.length - 1) {
        clearInterval(timer);
      }
      counter++;
    }, 50);
  }, 1000);
});
