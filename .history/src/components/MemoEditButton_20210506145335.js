import buttonstyle from '../styles/button.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy,faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

const MemoEditButton = ()=> {
    let url = window.location.href;
    const handleDelete = ()=> {
        console.log(url.substring(26).split("/")[1])
    }
    return (
        <div className={buttonstyle.right}>
            <div className={buttonstyle.flex}>
                <Link to={`/Memo/${url.substring(26).split("/")[1]}/Edit`} className={buttonstyle.box}>
                    <FontAwesomeIcon icon={faPenFancy}  size="1.5x" style={{ color: 'red' }} />
                    <p className={buttonstyle.text}>Edit</p>
                </Link>
                <div className={buttonstyle.box} onClick={()=>handleDelete}>
                    <FontAwesomeIcon icon={faTrashAlt}  size="1.5x" style={{ color: 'red' }}/>
                    <p className={buttonstyle.text}>Delete</p>
                </div>
            </div>
        </div>
    )
}

export default MemoEditButton