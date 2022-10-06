import { currentUser } from "./game";

export const stopGame = () => {
  window.location.href = "/end.html";
};

export const updateLeaderBoard = () => {
  const leaders = JSON.parse(localStorage.getItem("leaders")!);
  const practiceLeaders = leaders.practice;
  const timeAttackLeaders = leaders["time-attack"];

  let leaderBoard;
  if (currentUser.gameMode === "practice") {
    leaderBoard = practiceLeaders;
  } else {
    leaderBoard = timeAttackLeaders;
  }
  if (currentUser.username in leaderBoard) {
    if (currentUser.score > leaderBoard[currentUser.username]) {
      leaderBoard[currentUser.username] = currentUser.score;
    }
  } else {
    leaderBoard[currentUser.username] = currentUser.score;
  }
  leaders.practice = practiceLeaders;
  leaders["time-attack"] = timeAttackLeaders;
  return leaders;
};
