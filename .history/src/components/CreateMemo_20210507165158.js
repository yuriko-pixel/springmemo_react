import React,{useState} from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom'
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import marked from "marked";
import GoBack from '../components/GoBackButton'

const CreateMemo = () => {

  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  const handleInput = ()=> {
      console.log(marked(markdown));
      console.log(html)

      let data = {
        "memoid": 3,
        "userid": "bell",
        "memotitle": "2番目のブログ",
        "memohtml": html,
        "memodate": Date.now(),
        "memomarkd": marked(markdown),
        "deleted": false
      };

      const getData = ()=> {
        fetch(`http://localhost:8080/api/v1/memo/`, {method:'POST', 
        headers: {
          'Authorization': 'Basic ' + btoa('system:password'),
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: data,
        mode: 'cors',
        credentials: 'include'
          })
          .then(response => {
            if (response.status == 200) {
              document.location.href = "http://localhost:3000/";
            }})
          .then(json => {
            console.log(json);
          });
      };
    
     getData();
  }

  return(
      <div className="createMemo-con">
          <SimpleMDE onChange={(e) => {setMarkdown(e); setHtml(e)}}/>
          <div id="preview-con" >
            <h3>Preview</h3>
              <div className="preview-body" dangerouslySetInnerHTML={{ __html: marked(markdown)}} ></div>
          </div>
          <div className="center">
            <Link to="/CreateMemo" 
                  className="btn2 btn-border-shadow btn-border-shadow--color" 
                  onClick={()=>handleInput()}>SUBMIT
            </Link>
          </div>
          <GoBack/>
      </div>
  )
}
export default CreateMemo;