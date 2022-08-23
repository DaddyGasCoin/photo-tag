
const ShowAnswerDisplay = (props) => {
  const { answer } = props
  return (
    <>
      {answer ? <div className="answer-display">CORRECT</div> :
        <div className="answer-display wrong">INCORECT</div>}
    </>
  )
}

export default ShowAnswerDisplay