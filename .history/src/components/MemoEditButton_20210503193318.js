import buttonstyle from '../styles/button.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy,faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const MemoEditButton = ()=> {
    return (
        <div className={buttonstyle.right}>
            <FontAwesomeIcon icon={faPenFancy} size="md" />
            <FontAwesomeIcon icon={faTrashAlt} size="md" />
        </div>
    )
}

export default MemoEditButton