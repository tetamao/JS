document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readySate: complete");
    initApp();
  }
});

const initApp = () => {
  const view3 = document.querySelector("#view3");
  const myForm = view3.querySelector("#myForm");
  myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit event");
  });
};
