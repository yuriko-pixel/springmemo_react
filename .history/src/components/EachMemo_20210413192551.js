import React, { useEffect, useState } from "react";
import Navbar from './Navbar'


const Memo = (props) => {
    const [memo_each,setEachMemo] = useState({});
    const [edit, SetEdit] = useState(false);

    useEffect(() => {
        const memoId = props.match.params.memoId;
        console.log(memoId);
        const getData = ()=> {
          fetch('http://localhost:8080/api/v1/memo/all/', {method:'GET', 
          headers: {
            'Authorization': 'Basic ' + btoa('system:password'),
            'Access-Control-Allow-Origin': '*'
          },
          mode: 'cors',
          credentials: 'include'
            })
            .then(response => response.json())
            .then(json => console.log(json));
         };

        getData();
      }, []);
    return (
        <div className="eachMemo-container">
            {
                memo_each.length !== 0?(
                <div>
                  <div className="title-con">
                    <h1>{memo_each.memotitle}</h1>
                    <Navbar memo={memo_each} />
                  </div>
                    <div  dangerouslySetInnerHTML={{ __html: memo_each.memohtml }}></div>
                </div>):(<div>Loading...</div>)
            }
        </div>
    )
}

export default Memo;