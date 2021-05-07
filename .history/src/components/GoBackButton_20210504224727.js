import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import buttonstyle from '../styles/button.module.scss'

const GoBack = ()=> {
    return (
        <Link to="">
            <div className={buttonstyle.box}>
                <FontAwesomeIcon icon={faArrowCircleLeft}  size="5.5x" style={{ color: 'red' }} />
                <p className={buttonstyle.goback}>Go Back</p>
            </div>
        </Link>
    )
}

export default GoBack;