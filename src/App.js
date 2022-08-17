import { useState } from 'react';
import img from './images/9ufayzzd8ih91.jpg'

function App() {

  const [popup, setPopup] = useState(false)
  const [coord, setCoord] = useState([0, 0])
  function loginfo(e) {   // e = Mouse click event.
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the element.
    const y = e.clientY - rect.top;  //y position within the element.
    // console.log("Left? : " + x + " ; Top? : " + y + ".");

    const bool = !popup
    setPopup(bool)
    setCoord([e.clientX + 15, e.clientY])

  }

  return (
    <div className='wrapper'>
      <div className='img-wrapper'>
        <img src={img} onClick={loginfo}>
        </img>
      </div>
      {popup ? <div className="pop" style={{ top: coord[1], left: coord[0] }}>TEST</div> : null}
      {/* TODO: DROPDOWN DISPLAY FOR POPUP */}

    </div>

  );
}

export default App;
