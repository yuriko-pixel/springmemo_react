import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom'
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import marked from "marked";
import Moment from "react-moment";
import memoedits from '../styles/memoedit.module.scss'

const MemoEdit = (props) => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');
  let url = window.location.href;

  const handleInput = ()=> {
      console.log(marked(markdown));
  }

  useEffect(()=> {
    const memoList = props.props[0];
    if(memoList !== undefined) {
        const memo_edit = memoList.filter(i=>i.memoid === url.substring(32));
        console.log(props.props[0]);
        // console.log(memo_edit);
    }
  })
  if(props.props[0] !== undefined) {
    return(
      <div className={memoedits.createMemoCon}>
        <div className={memoedits.memodate}>
          Published on:<br/>
          <Moment format="YYYY/MM/DD hh:mm">
            {props.props[0].filter(i=>i.memoid === url.substring(32))[0].memodate}
          </Moment>
        </div>
        <input type="text" className={memoedits.titleInput}
          value={props.props[0].filter(i=>i.memoid === url.substring(32))[0].memotitle}/>
          <SimpleMDE 
          onChange={(e) => {setMarkdown(e); setHtml(e)}} 
          value={props.props[0].filter(i=>i.memoid === url.substring(32))[0].memomarkd}
          />
          <div id="preview-con" >
            <h3>Preview</h3>
              <div className="preview-body" dangerouslySetInnerHTML={{ __html: marked(markdown)}} ></div>
          </div>
          <div className="center">
            <Link to="/" className="btn2 btn-border-shadow btn-border-shadow--color" onClick={()=>handleInput()}>SUBMIT</Link>
          </div>
      </div>
  )
  } else {
    return (
      <div></div>
    )
  }
}
export default MemoEdit;