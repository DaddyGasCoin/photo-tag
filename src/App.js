import { useEffect, useState } from 'react';
import img from './images/9ufayzzd8ih91.jpg'
import db from './firebase.config';
import { collection, getDocs } from "firebase/firestore";
import ShowPopUp from './ShowPopUp';


function App() {

  const [popup, setPopup] = useState(false)
  const [coord, setCoord] = useState([0, 0]) //coordinate for popup
  const [characterCoord, setCharacterCoord] = useState()
  const [coordSelected, setCoordSelected] = useState([])
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


  function loginfo(e) {   // e = Mouse click event.
    // const rect = e.target.getBoundingClientRect();
    // const x = e.clientX - rect.left; //x position within the element.
    // const y = e.clientY - rect.top;  //y position within the element.
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;
    console.log("Left? : " + x + " ; Top? : " + y + ".");
    setCoordSelected([x, y])
    const bool = !popup
    setPopup(bool)
    setCoord([e.clientX + 15, e.clientY])
    // console.log(characterCoord)

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
  function handleclick(option, e) {
    // console.log(e.target)
    // console.log(option)
    // console.log(coordSelected)
    validateChoise(option, coordSelected)
  }

  return (
    <div className='wrapper'>
      <div className='img-wrapper'>
        <img src={img} onClick={loginfo}>
        </img>
      </div>
      {popup ? <ShowPopUp coord={coord} handler={handleclick} /> : null}
    </div>

  );
}

export default App;
