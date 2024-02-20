import { isValidElement } from "react";

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

 function playRound() {
  const roll = rollDice(2, 6)
  const total = sumDice(roll)
  let score = total
  if (isEven(total)) {
    score += 10
  } else {
    score -= 5
  }
 }

export default function Dice() {
  return (
    <>
        <div className="scoreboard">
        <div className="player-one"><span>Player 1 Score</span><span className="score"></span></div>
        <div className="player-two"><span>Player 2 Score</span><span className="score"></span></div>
        </div>
        <form action="/rollDice" method="post">
        <button className="roll-dice-button" type="submit">Roll Dice</button>
        </form>
    </>
  )
}
