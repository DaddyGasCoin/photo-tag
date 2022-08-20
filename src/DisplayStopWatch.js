

const DisplayStopWatch = (props) => {
    const { time } = props
    return (
        <h1>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + (time / 10) % 1000).slice(-2)}</span>
        </h1>
    )

}

export default DisplayStopWatch