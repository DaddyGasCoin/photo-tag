
const ShowPopUp = (props) => {
  const { coord, handler, popStyle } = props

  return (
    <div className="pop-wrapper" style={{ top: coord[1], left: coord[0] }}>
      {popStyle.deadpool ? <div className="pop-item" onClick={(e) => handler('deadpool', e)}>DEADPOOL</div> :
        <div className="pop-item hidden" onClick={(e) => handler('deadpool', e)}>DEADPOOL</div>
      }
      {popStyle.creeper ? <div className="pop-item" onClick={(e) => handler('creeper', e)}>CREEPER</div> :
        <div className="pop-item hidden" onClick={(e) => handler('creeper', e)}>CREEPER</div>
      }
      {popStyle.ash ? <div className="pop-item" onClick={(e) => handler('ash', e)}>ASH</div> :
        <div className="pop-item hidden" onClick={(e) => handler('ash', e)}>ASH</div>
      }
    </div>
  )

}

export default ShowPopUp