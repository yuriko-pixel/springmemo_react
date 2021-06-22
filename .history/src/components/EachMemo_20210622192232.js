import React, { useEffect, useState } from "react";
import memostyle from '../styles/eachmemo.module.scss'
import Moment from "react-moment";
import MemoEditButton from '../components/MemoEditButton'

const Memo = (props) => {
    const [memo_each,setEachMemo] = useState({});

    useEffect(() => {
        
        let memoID = props.match.params.memoId;
        const getData = ()=> {
          
          fetch(`${process.env.REACT_APP_MEMO_URL}+${memoID}`, {method:'GET', 
          headers: {
            'Authorization': 'Basic ' + btoa(process.env.REACT_APP_USERNAME+":"+process.env.REACT_APP_PSW),
            'Access-Control-Allow-Origin': '*'
          },
          mode: 'cors',
          credentials: 'include'
            })
            .then(response => response.json())
            .then(json => {
              console.log(json);
              setEachMemo(json);
            });
         };

        getData();
      }, []);
    return (
        <div className={memostyle.container}>
            {
                memo_each.length !== 0?(
                    <div>
                        <MemoEditButton/>
                        <Moment format="YYYY/MM/DD" className={memostyle.date}>{memostyle.memodate}</Moment>
                        <div className={memostyle.memocon} 
                        dangerouslySetInnerHTML={{ __html: memo_each.memohtml }}></div>
                    </div>
                  
                  ):(<div>Loading...</div>)
                  
            }
        </div>
    )
}

export default Memo;