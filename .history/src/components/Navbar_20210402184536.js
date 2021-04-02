import React from 'react'
import { Link } from 'react-router-dom'
import css from '../App.css'
import {useState,useEffect} from 'react'

const Navbar = (props)=> {
  const [clicked, setClicked] = useState(false);

  const changeClick = ()=> {
    if(clicked === true) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  }
  useEffect(()=> {
    console.log(props.memo.memoid);
  }
  )

    return (
        <nav className="link-container">
          <span className="linkmenu" onClick={()=> {
            changeClick();
          }}>&#8942;</span>
          {clicked === true?(<ul className="linkUl">
            <a href={'/Memo/Edit/'+props.memo.memoid} className="linkLi" value={props.memo.memoid}>Edit</a>
            <Link to="/" className="linkLi">Delete</Link>
          </ul>):(<div></div>)}
        </nav>
    )
}

export default Navbar