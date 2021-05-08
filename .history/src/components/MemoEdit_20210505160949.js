import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom'
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import marked from "marked";
import Moment from "react-moment";
import memoedits from '../styles/memoedit.module.scss'
import GoBack from "./GoBackButton";

const MemoEdit = (props) => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');
  let url = window.location.href;

  const handleInput = ()=> {
      console.log(JSON.stringify(marked(markdown)));
      if(props.props.length !== 0) {
        let data = props.props.filter(i=>i.memoid == url.substring(26).split("/")[1])[0];
        data.memomarkd = marked(markdown);
      }

      const getData = ()=> {
        fetch(`http://localhost:8080/api/v1/memo/`, {method:'POST', 
        headers: {
          'Authorization': 'Basic ' + btoa('system:password'),
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(marked(markdown)),
        mode: 'cors',
        credentials: 'include'
          })
          .then(response => response.json())
          .then(json => {
            console.log(json);
          });
       };
       getData();
  }

  if(props.props.length !== 0) {
    return(
      <div className={memoedits.createMemoCon}>
        <div className={memoedits.memodate}>
          Published on:<br/>
          <Moment format="YYYY/MM/DD hh:mm">
            {props.props.filter(i=>i.memoid == url.substring(26).split("/")[1])[0].memodate}
          </Moment>
        </div>
        <input type="text" className={memoedits.titleInput}
          value={props.props.filter(i=>i.memoid == url.substring(26).split("/")[1])[0].memotitle}
          />
          <SimpleMDE 
          onChange={(e) => {setMarkdown(e); setHtml(e)}} 
          value={props.props.filter(i=>i.memoid == url.substring(26).split("/")[1])[0].memomarkd}
          />
          <div className={memoedits.previewCon} >
            <h3>Preview</h3>
              <div className="preview-body" 
                    dangerouslySetInnerHTML={{ __html: marked(markdown)}} 
              ></div>
          </div>
          <div className={memoedits.center}>
            <button
                  className="btn2 btn-border-shadow btn-border-shadow--color" 
                  onClick={()=>handleInput()}
            >SUBMIT</button>
          </div>
      </div>
  )
  } else {
    return (
      <div>poop</div>
    )
  }
}
export default MemoEdit;