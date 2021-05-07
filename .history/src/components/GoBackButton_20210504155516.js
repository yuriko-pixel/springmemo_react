import {Link} from 'react-router-dom'
import { Button } from "react-bootstrap";

const GoBack = ()=> {
    return (
        <Link to="">
            <Button class="btn btn-primary">Go Back</Button>
        </Link>
    )
}

export default GoBack;