import React,{useState} from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom'
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import marked from "marked";

const CreateMemo = () => {

  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  const handleInput = ()=> {
      console.log(marked(markdown));
      console.log(html)
  }

  return(
      <div className="createMemo-con">
          <SimpleMDE onChange={(e) => {setMarkdown(e); setHtml(e)}}/>
          <div id="preview-con" >
            <h3>Preview</h3>
              <div className="preview-body" dangerouslySetInnerHTML={{ __html: marked(markdown)}} ></div>
          </div>
          <div className="center">
            <Link to="/CreateMemo" className="btn2 btn-border-shadow btn-border-shadow--color" onClick={()=>handleInput()}>SUBMIT</Link>
          </div>
      </div>
  )
}
export default CreateMemo;