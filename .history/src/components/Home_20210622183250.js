import {Link} from 'react-router-dom'
import homestyle from '../styles/home.module.scss'
import memos from '../images/memos.jpg'
import addmemo from '../images/addmemo.jpg'


const Home = () => {
    return (
        <div className={homestyle.homeContainer}>
            <div className="btn-flex">
                <Link to="/Memo">
                <p className={homestyle.memotext}>Memo List</p>    
                    <img src={memos} className={homestyle.img} alt={memos}/>
                    
                </Link>
            </div>
            <div className="btn-flex">
                <p className={homestyle.memotext2}>Add New Memo</p>
                <Link to="/CreateMemo"><img src={addmemo} className={homestyle.img} alt={addmemo}/></Link>
            </div>
        </div>
    )
}

export default Home