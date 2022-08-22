

const DisplayGameOver = (props) => {
  const { name, submit } = props
  return (
    <div className="gameover-screen">
      <label htmlFor="name">Enter Name</label>
      <input type="text" id="name" onChange={(e) => { name(e.target.value) }} />
      <button onClick={submit}>SUMBIT</button>
    </div>
  )
}

export default DisplayGameOver