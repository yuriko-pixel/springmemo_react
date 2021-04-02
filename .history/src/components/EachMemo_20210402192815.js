import React, { useEffect, useState } from "react";
import Navbar from './Navbar'


const Memo = (props) => {
    const [memo_each,setEachMemo] = useState({});
    const [edit, SetEdit] = useState(false);

    useEffect(() => {
        // const memoId = props.match.params.memoId;
        // console.log(memoId);
        const getData = () => {
          var xhr = new XMLHttpRequest();
      
          xhr.onload = function() {
              console.log('Success: ' + xhr.responseText);
          };
          
          xhr.onerror = function() {
              console.log('Error: '  + xhr.responseText);
          };
          
          xhr.open('GET', 'https://yurikomemo.herokuapp.com/api/v1/memo/all', true);
          xhr.withCredentials = true;
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          xhr.setRequestHeader('Authorization',  'Basic ', btoa('system:password'));
          xhr.send();
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