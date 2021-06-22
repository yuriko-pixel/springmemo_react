import React,{useState} from "react";
import {Link} from 'react-router-dom'
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import marked from "marked";
import GoBack from '../components/GoBackButton'

const CreateMemo = (props) => {

  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');
  console.log(props.props.length)
  const handleInput = ()=> {
      console.log(marked(markdown));
      console.log(html)
      
      let data = {
        "memoid": props.props.length+1,
        "userid": "bell",
        "memotitle": "",
        "memohtml": html,
        "memodate": Date.now(),
        "memomarkd": marked(markdown),
        "deleted": false
      };
      data = JSON.stringify(data);
      const getData = ()=> {
        fetch(process.env.REACT_APP_MEMOALL_URL, {method:'POST', 
        headers: {
          'Authorization': 'Basic ' + btoa(process.env.REACT_APP_USERNAME+":"+process.env.REACT_APP_PSW),
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: data,
        mode: 'cors',
        credentials: 'include'
          })
          .then(response => {
            if (response.status === 200) {
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