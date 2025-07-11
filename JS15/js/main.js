// Your first interactive game
// Refactor the game with arrays

let playGame = confirm("Shall we play rock, paper, scissors?");
if (playGame) {
  //play
  while (playGame) {
    const playerChoice = prompt("Please enter rock, paper, or scissors.");
    if (playerChoice || playerChoice === "") {
      const playerOne = playerChoice.trim().toLowerCase();
      if (
        playerOne === "rock" ||
        playerOne === "paper" ||
        playerOne === "scissors"
      ) {
        const computerChoice = Math.floor(Math.random() * 3);
        const rpsArray = ["rock", "paper", "scissors"];
        const computer = rpsArray[computerChoice];

        const result =
          playerOne === computer
            ? "Tie game!"
            : playerOne === "rock" && computer === "paper"
            ? `playerOne:${playerOne}\nComputer: ${computer}\n Computer wins!`
            : playerOne === "paper" && computer === "scissors"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === "scissors" && computer === "rock"
            ? `palyerOne: ${playerOne}\nComputer: ${computer}\nComputer wins.`
            : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins.`;
        alert(result);
        playGame = confirm("Play Again?");
        if (!playGame) alert("Ok, thanks for playing.");
        continue;
      } else {
        alert("You didn't enter rock, paper, or scissors.");
        continue;
      }
    } else alert("I guess you changed your mind. Maybe next time.");
    break;
  }
} else {
  alert("Ok. Maybe next time.");
}
//   if (playerChoice || playerChoice ==="") {
//     const playerOne = playerChoice.trim().toLowerCase();
//     if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors")
//     {
//         const computerChoice = Math.floor(Math.random() * 3 );
//         const rpsArray = ["rock", "paper", "scissors"];
//         const computer = rpsArray[computerChoice];

//         const result = playerOne == computer
//         ? "Tie game!"
//         : playerOne === "rock" && computer === "paper"
//         ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//         : playerOne === "paper" && computer === "scissors"
//         ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//         : playerOne === "scissors" && computer === "rock"
//         ? `palyerOne: ${playerOne}\nComputer: ${computer}\nComputer wins.`
//         : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins.`;
//     }
//   }
//     let playerOne = playerChoice.trim().toLowerCase();
//     if (
//       playerOne === "rock" ||
//       playerOne === "paper" ||
//       playerOne === "scissors"
//     ) {
//       let computerChoice = Math.floor(Math.random() * 3 + 1);
//       let computer =
//         computerChoice === 1
//           ? "rock"
//           : computerChoice === 2
//           ? "paper"
//           : "scissors";

//       let result =
//         playerOne === computer
//           ? "Tie game!"
//           : playerOne === "rock" && computer === "paper"
//           ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//           : playerOne === "paper" && computer === "scissors"
//           ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//           : playerOne === "scissors" && computer === "rock"
//           ? `palyerOne: ${playerOne}\nComputer: ${computer}\nComputer wins.`
//           : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins.`;
//       alert(result);
//       let playAgain = confirm("Play Again?");
//       playAgain ? location.reload() : alert("Ok, thanks for playing.");
//     } else {
//       alert("You didn't enter rock, paper, or scissors.");
//     }
//   } else {
//     alert("I guess you changed your mind. Maybe next time.");
//   }
// } else {
//   alert("Ok, maybe next time.");
// }
