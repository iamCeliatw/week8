"use strict";

document.querySelector(".fetch").addEventListener("click", (e) => {
  console.log("clicked");

  fetch("https://www.google.com")
    .then((res) => {
      console.log("response", res);
      return res.text();
    })
    .catch((error) => console.log("error" + error));
});

// document.querySelector(".fetch").addEventListener("click", (e) => {
//   console.log("clicked");

//   fetch("https://www.google.com", {
//     mode: "no-cors",
//   })
//     .then((res) => {
//       console.log("response", res);
//       return res.text();
//     })
//     .catch((error) => console.log("error" + error));
// });
