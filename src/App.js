import React, { useEffect, useState } from 'react';
import img from './images/9ufayzzd8ih91.jpg'
import db from './firebase.config';
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import ShowPopUp from './ShowPopUp';
import ShowAnswerDisplay from './ShowAnswerDisplay';
import DisplayStopWatch from './DisplayStopWatch';
import ShowInsructions from './ShowInstructions';
import DisplayGameOver from './DisplayGameOver';

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
  const [instructionsDisplay, showInstructionsDisplay] = useState(true)
  const [gameOver, setGameOverStatus] = useState(false)
  const [name, setname] = useState()

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


  useEffect(() => {
    if (isGameOver()) {
      setStart(false)
      setGameOverStatus(true)
    }
  }, [popup]);



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

  function startTimer() {
    setStart(true)
    showInstructionsDisplay(false)
  }

  function isGameOver() {
    let count = 0
    for (const key of Object.keys(options)) {
      if (options[key] === false) {
        count += 1
      }
    }
    if (count === 3) {
      return true
    }
    return false
  }

  function handleclick(option, e) {
    setAnswerStatus(validateChoise(option, coordSelected))
    setPopup(!popup)
    displayAnswer()
    if (validateChoise(option, coordSelected))
      setOptions({ ...options, [option]: false })
  }

  //Add users time to database
  async function sumbitDetails() {
    const formatedTime = formatTime(time)
    await setDoc(doc(db, "leaderboard", name), {
      time: formatedTime
    }).then(resetGame())
  }

  function formatTime(time) {
    const min = ("0" + Math.floor((time / 60000) % 60)).slice(-2)
    const sec = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
    const milisec = ("0" + (time / 10) % 1000).slice(-2)
    return `${min}:${sec}:${milisec}`
  }

  function resetGame() {
    setGameOverStatus(false)
    setTime(0)
    setOptions({ creeper: true, deadpool: true, ash: true })
    showInstructionsDisplay(true)


  }

  return (
    <>
      <div className='wrapper'>
        <div className='head-wrapper'>
          <div className='head-text'>LEADERBOARDS</div>
          <DisplayStopWatch time={time} />
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
      {instructionsDisplay ? <ShowInsructions startTimer={startTimer} /> : null}
      {gameOver ? <DisplayGameOver name={setname} submit={sumbitDetails} time={formatTime(time)} /> : null}
    </>
  );
}

export default App;
