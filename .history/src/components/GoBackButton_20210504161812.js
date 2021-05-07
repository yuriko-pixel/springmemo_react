import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

const GoBack = ()=> {
    return (
        <Link to="">
             <FontAwesomeIcon icon={faArrowCircleLeft}  size="2.5x" style={{ color: 'red' }} />
        </Link>
    )
}

export default GoBack;