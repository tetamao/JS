// JavaScript Event Listeners

//syntax: addEventListener("event, function, useCapture)

// const doSomething = () => {
//   alert("doint something");
// };

// h2.addEventListener("click", doSomething, false);
// h2.removeEventListener("click", doSomething, false);

// h2.addEventListener("click", function (event) {
//   console.log(event.target);
//   event.target.textContent = "Clicked";
// });

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readySate: complete");
    initApp();
  }
});

const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener(
    "click",
    (event) => {
      // view.style.backgroundColor = "purple";
      // view.classList.add("purple");
      // view.classList.remove("darkblue");
      view.classList.toggle("purple");
      view.classList.toggle("darkblue"); //change something and change something back
    },
    false
  );
  div.addEventListener(
    "click",
    (event) => {
      // div.style.backgroundColor = "blue"; //change div to event.target the reaction will be different.
      div.classList.toggle("blue");
      div.classList.toggle("black");
    },
    false
  );
  h2.addEventListener(
    "click",
    (event) => {
      const myText = event.target.textContent;
      myText === "My 2nd View"
        ? (event.target.textContent = "Clicked")
        : (event.target.textContent = "My 2nd View");
      // event.target.textContent = "Clicked";
    },
    false
  );

  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("height100");
    nav.addEventListener("mouseout", (event) => {
      event.target.classList.remove("height100");
    });
  });
};
