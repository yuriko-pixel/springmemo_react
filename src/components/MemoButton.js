import {Link} from 'react-router-dom'

const MemoButton = ()=> {
    return (
        <nav id="navigation">
        <div id="menuToggle">
          
          <input type="checkbox" />
          
          
          <span></span>
          <span></span>
          <span></span>
          
          <ul id="menu">
            <Link to="/"><li>Home</li></Link>
            <Link to="/About"><li>About</li></Link>
            <Link to="/Memo"><li>Memo</li></Link>
            <Link to="/CreateMemo"><li>Add Memo</li></Link>
            <Link to="/Contact"><li>Contact</li></Link>
          </ul>
        </div>
      </nav>
    )
}

export default MemoButton;