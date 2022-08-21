import React, { useEffect, useState } from 'react';
import img from './images/9ufayzzd8ih91.jpg'
import db from './firebase.config';
import { collection, getDocs } from "firebase/firestore";
import ShowPopUp from './ShowPopUp';
import ShowAnswerDisplay from './ShowAnswerDisplay';
import DisplayStopWatch from './DisplayStopWatch';

function App() {

  const [popup, setPopup] = useState(false)
  const [coord, setCoord] = useState([0, 0]) //coordinate for popup
  const [characterCoord, setCharacterCoord] = useState()
  const [coordSelected, setCoordSelected] = useState([])
  const [answerDisplay, setanswerDisplay] = useState(false)
  const [answerStaus, setAnswerStatus] = useState()
  const [time, setTime] = useState(0)
  const [start, setStart] = useState(false)
  const [options, setOptions] = useState({ creeper: true, deadpool: true, ash: true })

  //Update time for stopwatch
  useEffect(() => {
    let intervel = null
    if (start) {
      intervel = setInterval(() => {
        setTime(PrevTime => PrevTime + 10)
      }, 10)
    } else {
      clearInterval(intervel)
    }
    return () => clearInterval(intervel)
  }, [start])

  let coordinates = {}
  useEffect(() => {
    async function getCharacterCoordFromDB() {
      const querySnapshot = await getDocs(collection(db, "coordinates"));
      querySnapshot.forEach((doc) => {
        coordinates[doc.id] = doc.data()
      });
    }
    getCharacterCoordFromDB()
    setCharacterCoord(coordinates)
  }, [])


  function loginfo(e) {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the element.
    const y = e.clientY - rect.top;  //y position within the element.
    setCoordSelected([x, y])
    const bool = !popup
    setPopup(bool)
    setCoord([e.clientX + 15, e.clientY])

  }

  function validateChoise(name, coords) {
    if (!(characterCoord[name]['min-x'] <= coords[0])) {
      return false
    }
    if (!(characterCoord[name]['max-x'] >= coords[0])) {
      return false
    }
    if (!(characterCoord[name]['min-y'] <= coords[1])) {
      return false
    }
    if (!(characterCoord[name]['max-y'] >= coords[1])) {
      return false
    }
    return true
  }

  function displayAnswer() {
    setanswerDisplay(true)
    setTimeout(() => {
      setanswerDisplay(false)
    }, 1000);
  }

  function handleclick(option, e) {
    setAnswerStatus(validateChoise(option, coordSelected))
    setPopup(!popup)
    displayAnswer()
    if (validateChoise(option, coordSelected))
      setOptions({ ...options, [option]: false })
  }

  return (
    <div className='wrapper'>
      <DisplayStopWatch time={time} />
      <div>
        <button onClick={() => setStart(true)}>start</button>
        <button onClick={() => setStart(false)}>stop</button>
      </div>
      <div className='answer-wrap'>
        <div className='img-wrapper'>
          <img src={img} onClick={loginfo}>
          </img>
        </div>
        {answerDisplay ? <ShowAnswerDisplay answer={answerStaus} /> : null}
      </div>
      {popup ? <ShowPopUp coord={coord} handler={handleclick} popStyle={options} /> : null}
    </div>

  );
}

export default App;
