import {Link} from 'react-router-dom'
import homestyle from '../styles/home.module.scss'
import memos from '../images/memos/jpg'
import addmemo from '../images/addmemo.jpg'


const Home = () => {
    return (
        <div className="home-container">
            <div className="btn-flex">
                <Link to="/Memo"><img src={memos} /></Link>
            </div>
            <div className="btn-flex">
                <Link to="/CreateMemo"><img src={addmemo}/></Link>
            </div>
        </div>
    )
}

export default Home