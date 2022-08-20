
const ShowAnswerDisplay = (props) => {
    const { answer } = props
    return (
        <div className="answer-display">
            {answer ? 'CORRECT' : 'INCORRECT'}
        </div>
    )

}

export default ShowAnswerDisplay