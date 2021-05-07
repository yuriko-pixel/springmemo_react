import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import memostyle from '../styles/eachmemo.module.scss'
import Moment from "react-moment";
import MemoEditButton from '../components/MemoEditButton'

const Memo = (props) => {
    const [memo_each,setEachMemo] = useState({});
    const [edit, SetEdit] = useState(false);

    useEffect(() => {
        console.log(props)
        const memoId = props.match.params.memoId;
        // console.log("memoID:"+memoId);
        const getData = ()=> {
          fetch(`http://localhost:8080/api/v1/memo/${memoId}`, {method:'GET', 
          headers: {
            'Authorization': 'Basic ' + btoa('system:password'),
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