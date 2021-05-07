import React, { useEffect, useState } from "react";
import memostyle from '../styles/memo.module.scss';
import {Link} from 'react-router-dom'
import Dot from './Dot'
import GoBack from '../components/GoBackButton'

const Memo = (props)=> {
  const [memo, setMemo] = useState([]);
  const [content, setContent] = useState([]);
  const notes = []
  //以下は共通function化する
  const getData = () => {
    fetch(`http://localhost:8080/api/v1/memo/all`, {method:'GET', 
      headers: {
        'Authorization': 'Basic ' + btoa('system:password'),
        'Access-Control-Allow-Origin': '*'
      },
      mode: 'cors',
      credentials: 'include'
      })
      .then((response) => response.json())
      .then((data) => {
        let newState = Object.assign([], ...memo);
        data = data.filter(i=>i.deleted !== true);
        newState.push(data);
        setMemo(newState);

        let newState2 = Object.assign([], ...content);
        let arr = data.map(i => [i.memoid,i.memohtml]);
        console.log(arr);
      });
  };
  useEffect(() => {
    
  if(props.props == undefined) {
    
    getData();
  } else {
    // console.log(props.props[1][0][1]) 
  }
   if(props.props !== undefined) {console.log(props.props.length);}
  });
if(props.props !== undefined && props.props[1][0] !== undefined){
    for (let index = 0; index < props.props[1].length; index++) {
        notes.push(
          <div className={memostyle.flex}>
            <Dot />
            <div className={memostyle.memo}>
                <Link 
                    to={'/Memo/'+props.props[1][index][1]} 
                    key={Math.random()}
                    >
                    {/* <h1>{props.props[index].memotitle}</h1> */}
                    {/* <Moment format="YYYY/MM/DD">{props.props[index].memodate}</Moment> */}
                    <div
                        dangerouslySetInnerHTML={{ __html: props.props[1][index] }}
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