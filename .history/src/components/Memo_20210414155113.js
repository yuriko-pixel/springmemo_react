import React, { useEffect, useState } from "react";
import memostyle from '../styles/memo.module.scss';
import Moment from "react-moment";
import {Link} from 'react-router-dom'
import Dot from './Dot'

const Memo = (props)=> {
  const [memo, setMemo] = useState([]);
  const [content, setContent] = useState([]);
  const notes = []
  //以下は共通function化する
  const getData = () => {
    fetch("http://localhost:8080/api/v1/memo/all", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        let newState = Object.assign([], ...memo);
        newState.push(data);
        setMemo(newState);

        let newState2 = Object.assign([], ...content);
        let arr = data.map(i => [i.memoid,i.memohtml]);
        console.log(arr);
      });
  };
  useEffect(() => {
    console.log(props.props[1][0][0])
  if(props.props === undefined) {
    getData();
  }
   if(props.props !== undefined) {console.log(props.props.length);}
  });
if(props.props[0] !== undefined ){
    for (let index = 0; index < props.props.length; index++) {
        notes.push(
          <div className={memostyle.flex}>
            <Dot />
            <div className={memostyle.memo}>
                <Link 
                    to={'/Memo/'+props.props[1][index][0]} 
                    key={Math.random()}
                    >
                    {/* <h1>{props.props[index].memotitle}</h1> */}
                    {/* <Moment format="YYYY/MM/DD">{props.props[index].memodate}</Moment> */}
                    <div
                        dangerouslySetInnerHTML={{ __html: props.props[1][index][1] }}
                        className={memostyle.text}
                        key={Math.random()}
                    ></div>
                </Link>
            </div>
          </div>
        )
    }
}

return (
    (props.props !==undefined? (
      <div className={memostyle.memoContainer}>
        {/* <Link to="/CreateMemo" className="btn btn-malformation">Add Memo</Link> */}
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