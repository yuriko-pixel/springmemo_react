import buttonstyle from '../styles/button.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy,faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

const MemoEditButton = ()=> {
    let url = window.location.href;

    return (
        <div className={buttonstyle.right}>
            <div className={buttonstyle.flex}>
                <Link to={`/Memo/Edit/${url.substring(26).split("/")[1]}`} className={buttonstyle.box}>
                    <FontAwesomeIcon icon={faPenFancy}  size="1.5x" style={{ color: 'red' }} />
                    <p className={buttonstyle.text}>Edit</p>
                </Link>
                <Link to="" className={buttonstyle.box}>
                    <FontAwesomeIcon icon={faTrashAlt}  size="1.5x" style={{ color: 'red' }}/>
                    <p className={buttonstyle.text}>Delete</p>
                </Link>
            </div>
        </div>
    )
}

export default MemoEditButton