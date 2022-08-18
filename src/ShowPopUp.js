
const ShowPopUp = (props) => {
  const { coord } = props
  return (
    <div className="pop-wrapper" style={{ top: coord[1], left: coord[0] }}>
      <div className="pop-item">DEADPOOL</div>
      <div className="pop-item">CREEPER</div>
      <div className="pop-item">ASH</div>
    </div>
  )

}

export default ShowPopUp