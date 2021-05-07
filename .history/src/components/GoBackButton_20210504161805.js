import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

const GoBack = ()=> {
    return (
        <Link to="">
             <FontAwesomeIcon icon={faArrowCircleLeft}  size="1.5x" style={{ color: 'red' }} />
        </Link>
    )
}

export default GoBack;