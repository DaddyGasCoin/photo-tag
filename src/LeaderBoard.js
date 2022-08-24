import db from './firebase.config';
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


const Leaderboard = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    async function getLeaderBoardFromDB() {
      const querySnapshot = await getDocs(collection(db, "leaderboard"));
      querySnapshot.forEach((doc) => {
        setData((prevState) => ({
          ...prevState,
          [doc.id]: doc.data()
        }))
      })
    }
    getLeaderBoardFromDB()
  }, [])
  return (
    <div className="leaderboard-wrapper">
      <Link className="link" to="/">
        <div className='home-link'>HOME PAGE</div>
      </Link>
      <div className='board-tittle'>LEADERBOARD</div>
      <div className='leaderboard'>
        <div className='board-users'>
          <div className="board-data">USERS</div>
          {Object.keys(data).map((item) => {
            return <div className="board-data">{item}</div>
          })}
        </div>
        <div className='board-time'>
          <div className="board-data">TIME</div>
          {Object.keys(data).map((item) => {
            return <div className="board-data">{data[item].time} </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
