import creeper from "./images/characterface/creeper_face.jpg"
import deadpool from "./images/characterface/deadpool_face.png"
import ash from "./images/characterface/ash_face.png"

const ShowPopUp = (props) => {
  const { coord, handler, popStyle } = props

  return (
    <div className="pop-wrapper" style={{ top: coord[1], left: coord[0] }}>
      {popStyle.deadpool ?
        <div className="pop-item-wrap" onClick={(e) => handler('deadpool', e)}>
          <img src={deadpool} className="charface"></img>
          <div className="pop-item">DEADPOOL</div>
        </div> :
        null
      }

      {popStyle.creeper ?
        <div className="pop-item-wrap" onClick={(e) => handler('creeper', e)}>
          <img src={creeper} className="charface"></img>
          <div className="pop-item" >CREEPER</div>
        </div> :
        null
      }

      {popStyle.ash ?
        <div className="pop-item-wrap" onClick={(e) => handler('ash', e)}>
          <img src={ash} className="charface"></img>
          <div className="pop-item">ASH</div>
        </div> : null

      }
    </div>
  )

}

export default ShowPopUp

