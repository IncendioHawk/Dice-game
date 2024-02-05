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
