import { useEffect, useState } from "react";

 function rollDice(numOfDice: number, numOfSides: number): number[] {
  const results = [];
  for (let i = 0; i < numOfDice; i++) {
    results.push(Math.floor(Math.random() * numOfSides) + 1)
  }
  return results;
 }

 function sumDice(dice: number[]) {
  return dice.reduce((a, b) => a + b, 0);
 }

 function isEven(num: number) {
  return num % 2 === 0;
 }

 function isDouble(num: number[]) {
  return num[0] === num[1];
 }

 function playRound() {
  const roll = rollDice(2, 6)
  const total = sumDice(roll)
  let score = total
  if (isEven(total)) {
    score += 10
  } else {
    score -= 5
  } if (isDouble(roll)) {
    score += rollDice(1, 6)[0]
  } if (score < 0) {
    score = 0
  }
  return score

 }

 async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
 }

export default function Dice() {
  const [playerOneScore, setPlayerOneScore] = useState(0)
  const [playerTwoScore, setPlayerTwoScore] = useState(0)
  const [counter, setCounter] = useState(0)
  async function playGame() {
      setPlayerOneScore(prev => prev + playRound())
      setPlayerTwoScore(prev => prev + playRound())
      setCounter(prev => prev + 1)
   }
   useEffect(() => {
    if (counter < 5) return
      if (playerOneScore > playerTwoScore) {
        alert('Player 1 wins!')
        console.log(playerOneScore, playerTwoScore)
      } else if (playerTwoScore > playerOneScore) {
        alert('Player 2 wins!')
        console.log(playerOneScore, playerTwoScore)
      } else {
        console.log(playerOneScore, playerTwoScore)
        alert('The game is a tie!')
      }
  }, [counter])
  return (
    <>
        <div className="scoreboard">
        <div className="player-one"><span>Player 1 Score</span><div className="score">{playerOneScore}</div></div>
        <div className="player-two"><span>Player 2 Score</span><div className="score">{playerTwoScore}</div></div>
        </div>
        <button onClick={playGame} className="roll-dice-button" type="submit">Roll Dice</button>
    </>
  )
}
