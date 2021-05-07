import buttonstyle from '../styles/button.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy,faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const MemoEditButton = ()=> {
    return (
        <div className={buttonstyle.right}>
            <FontAwesomeIcon icon={faPenFancy} size="2x" style={{ color: 'red' }} />
            <FontAwesomeIcon icon={faTrashAlt} size="2x" style={{ color: 'red' }}/>
        </div>
    )
}

export default MemoEditButton