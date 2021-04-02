import React, { useEffect,useState } from 'react';
import Nav from './components/Navbar'
import Footer from './components/Footer'
import Contents from './components/Contents'
import { Link } from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom';
import CreateMemo from './components/CreateMemo'
import About from './components/About'
import Memo from './components/Memo'
import Home from './components/Home'
import EachMemo from './components/EachMemo'
import MemoButton from './components/MemoButton'
import MemoEdit from './components/MemoEdit'
function App() {
  const [memo, setMemo] = useState([]);
  const notes = []
  const fetchdata = ()=> {
    fetch('https://yurikomemo.herokuapp.com/api/v1/memo/all', {method:'GET', 
    mode: 'cors',
    credentials: 'include'
      headers: {'Authorization': 'Basic ' + btoa('system:password')}})
      .then(response => response.json())
      .then(json => console.log(json));
  }
  const getData = () => {
    // let headers = new Headers();
    // headers.append('Authorization', 'Basic ' + btoa('system:password'));
        fetch("https://yurikomemo.herokuapp.com/api/v1/memo/all", {
          method: 'GET',
        mode: 'cors',
        Authorization: "Basic " + btoa("system" + ":" + "password"),
        credentials: 'include'
        
      })
        .then((response) => response.json())
        .then(json => console.log(json))
        // .then((data) => {
        //   let newState = Object.assign([], ...memo);
        //   newState.push(data);
        //   setMemo(newState);
        //   console.log(memo);
        // });
  };
  useEffect(() => {
    fetchdata();
    // fetch(`http://localhost:8080/api/v1/memo/all`,
    //   {
    //     method: "GET"
    //   }
    // )
    //   .then(res => res.json())
    //   .then(response => {
    //     let newState = Object.assign([], ...memo);
    //     newState.push(response);
    //     setMemo(newState);
    //   })
    //   .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <MemoButton />
        {/* <Nav /> */}
        {/* {memo.length !==0?(<Route exact path='/Memo'><Home/></Route>):
        (<Route exact path='/Memo'><Home props={memo}/></Route>)} */}
        <div className="content">
          <Route exact path="/"><Home/></Route>
          <Route exact path='/Memo'><Memo props={memo}/></Route>
          <Route path='/About' component={About}/>
          <Route path='/CreateMemo' component={CreateMemo}/>
          <Route exact path='/Memo/:memoId' component={EachMemo} />
          <Route path='/Memo/Edit/:memoId/'><MemoEdit props={memo}/></Route>
          {/* <Route path='/Memo/Edit/:memoId/'><MemoEdit /></Route> */}
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
