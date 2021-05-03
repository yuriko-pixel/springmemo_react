import {Link} from 'react-router-dom'
import homestyle from '../styles/home.module.scss'

const Home = () => {
    return (
        <div className="home-container">
            <div className="btn-flex">
                <Link to="/Memo" className="btn btn-malformation">Memo</Link>
            </div>
            <div className="btn-flex">
                <Link to="/CreateMemo" className="btn btn-malformation">Add Memo</Link>
            </div>
        </div>
    )
}

export default Home