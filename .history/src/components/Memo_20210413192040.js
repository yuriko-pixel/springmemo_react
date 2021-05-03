import React, { useEffect, useState } from "react";
import css from "../App.css";
import Moment from "react-moment";
import {Link} from 'react-router-dom'

const Memo = (props)=> {
  const [memo, setMemo] = useState([]);
  const notes = []
  const getData = () => {
    fetch("http://localhost:8080/api/v1/memo/all", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        let newState = Object.assign([], ...memo);
        newState.push(data);
        setMemo(newState);
        // console.log(memo);
        
      });
  };
  useEffect(() => {
  if(props.props === undefined) {
    getData();
  }
   if(props.props !== undefined) {console.log(props.props);}
  });
if(props.props[0] !== undefined ){
    for (let index = 0; index < props.props[0].length; index++) {
        notes.push(
          <div className="memo">
            <Link to={'/Memo/'+props.props[0][index].memoid} key={Math.random()}>
                <h1>{props.props[0][index].memotitle}</h1>
                <Moment format="YYYY/MM/DD">{props.props[0][index].memodate}</Moment>
                <div
                    dangerouslySetInnerHTML={{ __html: props.props[0][index].memohtml }}
                    className="text"
                    key={Math.random()}
                ></div>
            </Link>
          </div>
        )
    }
}

return (
    (props.props !==undefined? (
      <div className="memo-container">
        <Link to="/CreateMemo" className="btn btn-malformation">Add Memo</Link>
        {notes}
      </div>
      ):(<div></div>))
)

// if (props.props !== undefined) {
//     return (
//         <div>
//             {props.props[0].memohtml}
//         </div>
//     )
// } else {
//     return (
//         <div>Loading...</div>
//     )
// }

//   return (
//     <div className="memoContainer">
//        <h1> {memo.length}</h1>
//     {memo
//       .filter((item) => item.memoid != null)
//       .map((i) => (
//         <div className="memoparts" key={Math.random()}>
//           <h1 key={Math.random()}>{i.memotitle}</h1>
//           <Moment format="YYYY/MM/DD">{i.memodate}</Moment>
//           <div
//             dangerouslySetInnerHTML={{ __html: i.memohtml }}
//             className="text"
//             key={Math.random()}
//           ></div>
//         </div>
//       ))}
//   </div>
//   )
   
}


export default Memo;