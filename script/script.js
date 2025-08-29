// Heart Icon Count
let count = 0;
const countElement = document.getElementById("count");
const heartsButton = document.querySelectorAll(".heart-btn");

heartsButton.forEach((button) => {
  button.addEventListener("click", function () {
    count++;
    countElement.textContent = count;
  });
});

let coins = 100;
const callButton = document.querySelectorAll(".call-btn");
callButton.forEach((button) => {
  button.addEventListener("click", function () {
    // console.log("Call Button Clicked");
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
    // console.log(serviceName, serviceNumber);
    alert(`Service: ${serviceName} ServiceNum: ${serviceNumber}`);

    //And
  });
});

// callButton.forEach((button) => {
//   button.addEventListener("click", function () {
//     const cardContainer = document.getElementById("card-container");

//     const newCard = document.createElement("div");

//     newCard.innerHTML = `
//  <div class="bg-gray-50 p-5 rounded-lg my-5">
//             <h4 class="font-bold text-[1.50rem]">Fire Service Number</h4>
//             <span class="text-gray-500">999</span>
//           </div>
// `;
//     cardContainer.append("");
//   });
// });

// const callButtons = document.querySelectorAll(".call-btn");
// const historyCards = document.getElementById("history-section");
// const clearBtn = document.getElementById("clear-history");
// // console.log(callButtons, historyCards, clearBtn);

// callButtons.forEach((button) => {
//   button.addEventListener("click", function () {
//     const card = button.closest(".card");

//     const serviceName = card.querySelector(".service-name").textContent;
//     const serviceNumber = card.querySelector(".service-number").textContent;

//     const div = document.getElementById("div");
//     div.classList.add("historyCards");
//     div.innerHTML = `<strong>${serviceName}</strong> </br> Number : ${serviceNumber}`;

//     historyCards.prepend("div");
//   });
// });
function getCurrentTime() {
  return new Date().toLocaleTimeString();
}
const cardButtons = document.getElementsByClassName("btn");
// console.log(cardButtons);

for (let cardBtns of cardButtons) {
  cardBtns.addEventListener("click", function () {
    // console.log("btn clicked");
    const serviceName = cardBtns.parentNode.parentNode.children[1].innerText;
    const serviceNumber = cardBtns.parentNode.parentNode.children[3].innerText;

    // console.log(serviceNumber);
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

// clearHistory
const clearHistory = document.getElementById("clearHistory");

clearHistory.addEventListener("click", () => {
  cardContainer.innerHTML = "";
});
