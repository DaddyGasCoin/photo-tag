
const ShowPopUp = (props) => {
  const { coord, handler } = props
  return (
    <div className="pop-wrapper" style={{ top: coord[1], left: coord[0] }}>
      <div className="pop-item" onClick={(e) => handler('deadpool', e)}>DEADPOOL</div>
      <div className="pop-item" onClick={(e) => handler('creeper', e)}>CREEPER</div>
      <div className="pop-item" onClick={(e) => handler('ash', e)}>ASH</div>
    </div>
  )

}

export default ShowPopUp