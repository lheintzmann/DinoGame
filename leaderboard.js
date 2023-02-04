
const LEADERBOARD_KEY = "leaderboard";
const LEADERBOARD_SIZE = 20;

let leaderboard = sessionStorage.getItem(LEADERBOARD_KEY);

function setupLeaderboard() {
    leaderboard = JSON.parse(sessionStorage.getItem(LEADERBOARD_KEY));
    }

function displayLeaderboard() {
  const leaderboardElement = document.getElementById("leaderboard");
  if (leaderboardElement) {
      leaderboardElement.innerHTML = "";
      leaderboard.forEach((entry, index) => {
          const entryElement = document.createElement("div");
          entryElement.innerText = `${index + 1}. ${entry.name} - ${entry.score}`;
          leaderboardElement.appendChild(entryElement);
      });
  }
}


