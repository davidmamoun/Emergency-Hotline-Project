let count = 0;
const countElement = document.getElementById("count");
const heartsButton = document.querySelectorAll(".heart-btn");

heartsButton.forEach((button) => {
  button.addEventListener("click", function () {
    count++;
    countElement.textContent = count;
  });
});
