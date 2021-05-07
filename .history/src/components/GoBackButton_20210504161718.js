import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

const GoBack = ()=> {
    return (
        <Link to="">
            <faArrowCircleLeft>
        </Link>
    )
}

export default GoBack;