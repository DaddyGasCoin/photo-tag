

const DisplayGameOver = (props) => {
  const { name, submit, time } = props
  return (
    <div className="gameover-screen">
      <p className="title">Congratulations!!</p>
      <p className="game-text">You finished in {time}</p>
      <p className="game-text">Enter a name to submit your score to the leaderboards</p>
      <label htmlFor="name">Enter Name</label>
      <input type="text" id="name" onChange={(e) => { name(e.target.value) }} />
      <button className="submit-btn" onClick={submit}>SUMBIT</button>
    </div>
  )
}

export default DisplayGameOver