import creeper from './images/characters/Creeper_JE2_BE1.jpg'
import ash from './images/characters/Ash_Ketchum_Journeys.png'
import deadpool from './images/characters/Deadpoool.png'


const ShowInsructions = (props) => {
  const { startTimer } = props
  return (
    <div className="instructions">
      <p className="big-para">HOW TO PLAY</p>
      <p className="med-para">Inspired from Where's Waldo, your aim is to find the three characters on the image</p>
      <div className="character-wrap">
        <div className='card-wrap'>
          <img src={creeper} className="char"></img>
          <div>CREEPER</div>
        </div>
        <div className='card-wrap'>
          <img src={ash} className="char"></img>
          <div>ASH</div>
        </div>
        <div className='card-wrap'>
          <img src={deadpool} className="char"></img>
          <div>DEADPOOL</div>
        </div>
      </div>
      <button className="start-btn" onClick={startTimer}>Start</button>
    </div>
  )

}

export default ShowInsructions