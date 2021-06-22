import React, { useEffect,useState } from 'react';
import Footer from './components/Footer'
import { BrowserRouter, Route } from 'react-router-dom';
import CreateMemo from './components/CreateMemo'
import About from './components/About'
import Memo from './components/Memo'
import Home from './components/Home'
import EachMemo from './components/EachMemo'
import MemoButton from './components/MemoButton'
import MemoEdit from './components/MemoEdit'
import appstyle from './styles/app.module.scss'

function App() {
  const [memo, setMemo] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    

     const getData = ()=> {
      fetch(process.env.REACT_APP_MEMOALL_URL, {method:'GET', 
      headers: {
        'Authorization': 'Basic ' + btoa(process.env.REACT_APP_USERNAME+":"+process.env.REACT_APP_PSW),
        'Access-Control-Allow-Origin': '*'
      },
      mode: 'cors',
      credentials: 'include'
        })
        .then(response => response.json())
        .then(json => {
          let data = json.filter(i => i.deleted !== true);
          setMemo(data);
          console.log(data);
          let arr = data.map(i => [i.memoid,i.memohtml.split('<p>')[1]]);

        setContent(arr);
        });
     };

     getData();
     
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <MemoButton />
        <div className={appstyle.content}>
          <Route exact path="/"><Home/></Route>
          <Route exact path='/Memo'><Memo props={[memo,content]}/></Route>
          <Route path='/About' component={About}/>
          <Route path='/CreateMemo'><CreateMemo props={memo} /></Route>
          <Route exact path='/Memo/:memoId' component={EachMemo}/>
          <Route path='/Memo/:memoId/Edit'><MemoEdit props={memo}/></Route>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
