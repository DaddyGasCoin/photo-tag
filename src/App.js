import { useEffect, useState } from 'react';
import img from './images/9ufayzzd8ih91.jpg'
import db from './firebase.config';
import { collection, getDocs } from "firebase/firestore";
import ShowPopUp from './ShowPopUp';


function App() {

  const [popup, setPopup] = useState(false)
  const [coord, setCoord] = useState([0, 0]) //coordinate for popup
  const [characterCoord, setCharacterCoord] = useState()
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
    // console.log("Left? : " + x + " ; Top? : " + y + ".");
    const bool = !popup
    setPopup(bool)
    setCoord([e.clientX + 15, e.clientY])
    console.log(characterCoord)

  }

  return (
    <div className='wrapper'>
      <div className='img-wrapper'>
        <img src={img} onClick={loginfo}>
        </img>
      </div>
      {/* {popup ? <div className="pop" style={{ top: coord[1], left: coord[0] }}>TEST</div> : null} */}
      {popup ? <ShowPopUp coord={coord} /> : null}
      {/* TODO: DROPDOWN DISPLAY FOR POPUP */}

    </div>

  );
}

export default App;
