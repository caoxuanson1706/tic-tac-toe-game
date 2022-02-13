export function getCellElementList() {
  return document.querySelectorAll("#cellList > li");
}
export function getCurrentTurnElement() {
  return document.querySelector("#currentTurn");
}
export function getCellElementAtIdx(index) {
  return document.querySelector(`#cellList > li:nth-child(${index + 1})`);
}
export function getGameStatusElement() {
  return document.querySelector("#gameStatus");
}

export function getReplayButtonElement() {
  return document.querySelector("#replayGame");
}

export function getCellListElement() {
  return document.querySelector("#cellList");
}
