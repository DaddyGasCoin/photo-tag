


const ShowInsructions = (props) => {
    const { startTimer } = props
    return (
        <div className="instructions">
            {/* TODO: Display insrtuctions to user */}
            <button onClick={startTimer}>Start Game</button>
        </div>
    )

}

export default ShowInsructions