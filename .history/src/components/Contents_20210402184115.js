import React, { useEffect,useState } from 'react';
import css from '../App.css'
import Moment from 'react-moment';

  export default function Contents() {
    const [memo, setMemo] = useState([]); 

    const getData = ()=> {
      fetch('http://localhost:8080/api/v1/memo/all', {method:'GET', 
      headers: {
        'Authorization': 'Basic ' + btoa('system:password'),
        'Access-Control-Allow-Origin': '*'
      },
      mode: 'cors',
    credentials: 'include'
        })
        .then(response => response.json())
        .then(json => console.log(json));
    }

    useEffect(() => {
     getData()
    }, []);

    return(
        <div className="memoContainer">
          {memo.filter(item=>item.memoid != null).map(i => <div className="memoparts" key={Math.random()}>
            <h1  key={Math.random()}>{i.memotitle}</h1>{i.memotitle}
            <Moment format="YYYY/MM/DD">
                {i.memodate}
            </Moment>
            <div dangerouslySetInnerHTML={{__html: i.memohtml}} className="text" key={Math.random()} ></div>
                        </div>)
          }
        </div>
    )
}

