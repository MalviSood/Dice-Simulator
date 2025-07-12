const buttonEl = document.getElementById("roll-button");

const diceEl = document.getElementById("dice");

const rollHistoryEl = document.getElementById("roll-history")


let historyList = [];

function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);

  diceEl.innerHTML = diceFace;
  historyList.push(rollResult);
  updateRollHistory();
}


function updateRollHistory() {
  rollHistoryEl.innerHTML = "";
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.classList.add("roll-entry");

    const labelSpan = document.createElement("span");
    labelSpan.classList.add("label");
    labelSpan.innerText = `Roll ${i + 1}:`;

    const diceSpan = document.createElement("span");
    diceSpan.classList.add("dice-face");
    diceSpan.innerHTML = getDiceFace(historyList[i]);

    listItem.appendChild(labelSpan);
    listItem.appendChild(diceSpan);
    rollHistoryEl.appendChild(listItem);
  }
}


function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
      default:
        return "";
  }
}

buttonEl.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
