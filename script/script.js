// Heart Icon Function
let count = 0;
const countElement = document.getElementById("count");
const heartsButton = document.querySelectorAll(".heart-btn");

heartsButton.forEach((button) => {
  button.addEventListener("click", function () {
    count++;
    countElement.textContent = count;
  });
});
// Call Button Function
let coins = 100;
const callButton = document.querySelectorAll(".call-btn");
callButton.forEach((button) => {
  button.addEventListener("click", function () {
    if (coins >= 20) {
      coins -= 20;
      document.getElementById("coin-count").textContent = coins;
    } else if (coins < 20) {
      alert("❌ Not enough coins! At least 20 coins are required.");
      return;
    }
    const card = button.closest(".card");

    const serviceName = card.querySelector(".service-name").textContent;
    const serviceNumber = card.querySelector(".service-number").textContent;
    alert(`Service: ${serviceName} ServiceNum: ${serviceNumber}`);
  });
});

// Copy Button Function

let counts = 0;
const copyCount = document.getElementById("copyCount");
const copyBtn = document.querySelectorAll(".copyBtn");

copyBtn.forEach((button) => {
  button.addEventListener("click", function () {
    const serviceNumbers = button.parentNode.parentNode.children[3].innerText;
    navigator.clipboard.writeText(serviceNumbers).then(() => {
      alert(`Number Copied : ${serviceNumbers}`);
    });
    counts++;
    copyCount.innerText = counts;
  });
});

// Time Function
function getCurrentTime() {
  return new Date().toLocaleTimeString();
}

// Call & History Function

const cardButtons = document.getElementsByClassName("call-btn");
for (let cardBtns of cardButtons) {
  cardBtns.addEventListener("click", function () {
    if (coins < 20) {
      return;
    }
    const serviceName = cardBtns.parentNode.parentNode.children[1].innerText;
    const serviceNumber = cardBtns.parentNode.parentNode.children[3].innerText;
    const cardContainer = document.getElementById("cardContainer");
    const newCard = document.createElement("div");
    newCard.innerHTML = `
  <div
      class="bg-gray-50 p-5 rounded-lg my-5 flex justify-between items-center"
    >
      <div>
        <h4 class="font-bold text-[1rem]">${serviceName}</h4>
        <span class="text-gray-500">${serviceNumber}</span>
      </div>
      <div>${getCurrentTime()}</div>
    </div>
`;
    cardContainer.append(newCard);
  });
}

// ClearHistory Function
const clearHistory = document.getElementById("clearHistory");

clearHistory.addEventListener("click", () => {
  cardContainer.innerHTML = "";
});
