import buttonstyle from '../styles/button.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy,faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const MemoEditButton = ()=> {
    return (
        <div className={buttonstyle.right}>
            <FontAwesomeIcon icon={faPenFancy} />
            <FontAwesomeIcon icon={faTrashAlt} />
        </div>
    )
}

export default MemoEditButton