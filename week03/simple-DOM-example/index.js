console.log("hi");

// Find html element with thhe id submit-button
const button = document.querySelector("#submit-button");
// document.getElementById("submit-button")

button.addEventListener("click", (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-field").value;
  alert(email);

  const input = document.querySelector("input");
  if (RegExp("^.+@.+..+$").test(email)) {
    input.style.background = "green";
  } else {
    input.style.background = "red";
  }
});
