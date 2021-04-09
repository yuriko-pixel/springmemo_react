import React, { useEffect,useState } from 'react';
// import Nav from './components/Navbar'
import Footer from './components/Footer'
// import Contents from './components/Contents'
// import { Link } from 'react-router-dom'
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
  
  // const getData = () => {
  //   var xhr = new XMLHttpRequest();

  //   xhr.onload = function() {
  //       console.log('Success: ' + xhr.responseText);
  //   };
    
  //   xhr.onerror = function() {
  //       console.log('Error: '  + xhr.responseText);
  //   };
    
  //   xhr.open('GET', 'http://localhost:8080/api/v1/memo/all', true);
  //   xhr.withCredentials = true;
  //   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  //   xhr.setRequestHeader('Authorization',  'Basic ', btoa('system:password'));
  //   xhr.send();
  // };

  useEffect(() => {
  const getData = () => {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        console.log('Success: ' + xhr.responseText);
    };
    
    xhr.onerror = function() {
        console.log('Error: '  + xhr.responseText);
    };
    
    xhr.open('GET', 'http://localhost:8080/api/v1/memo/all', true);
    xhr.withCredentials = true;
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    // xhr.setRequestHeader('Authorization',  'Basic '+ btoa('system:password'));
    xhr.send();
  };

    //  const getData = ()=> {
    //   fetch('http://localhost:8080/api/v1/memo/all', {method:'GET', 
    //   headers: {
    //     'Authorization': 'Basic ' + btoa('system:password'),
    //     'Access-Control-Allow-Origin': '*'
    //   },
    //   mode: 'cors',
    //   credentials: 'include'
    //     })
    //     .then(response => response.json())
    //     .then(json => console.log(json));
    //  };

  //   const getData = () => {
  //   var xhr = new XMLHttpRequest();

  //   xhr.onload = function() {
  //       console.log('Success: ' + xhr.responseText);
  //   };
    
  //   xhr.onerror = function() {
  //       console.log('Error: '  + xhr.responseText);
  //   };
    
  //   xhr.open('GET', 'http://localhost:8080/api/v1/memo/all', true);
  //   xhr.withCredentials = true;
  //   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  //   xhr.setRequestHeader('Authorization',  'Basic '+ btoa('system:password'));
  //   xhr.send();
  // };

     getData();
    
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <MemoButton />
        <div className="content">
          <Route exact path="/"><Home/></Route>
          <Route exact path='/Memo'><Memo props={memo}/></Route>
          <Route path='/About' component={About}/>
          <Route path='/CreateMemo' component={CreateMemo}/>
          <Route exact path='/Memo/:memoId' component={EachMemo} />
          <Route path='/Memo/Edit/:memoId/'><MemoEdit props={memo}/></Route>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
