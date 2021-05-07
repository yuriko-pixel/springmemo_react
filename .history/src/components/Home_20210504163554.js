import {Link} from 'react-router-dom'
import homestyle from '../styles/home.module.scss'
import memos from '../images/memos.jpg'
import addmemo from '../images/addmemo.jpg'


const Home = () => {
    return (
        <div className={homestyle.homeContainer}>
            <div className="btn-flex">
                <Link to="/Memo">
                    <img src={memos} className={homestyle.img} />
                    <p className={homestyle.memotext}>Memo List</p>    
                </Link>
            </div>
            <div className="btn-flex">
                <Link to="/CreateMemo"><img src={addmemo} className={homestyle.img}/></Link>
            </div>
        </div>
    )
}

export default Home