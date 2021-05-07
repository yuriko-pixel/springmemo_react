import {Link} from 'react-router-dom'
import { Button } from "react-bootstrap";

const GoBack = ()=> {
    return (
        <Link to="">
            <Button variant="primary" className="mr-2">Go Back</Button>
        </Link>
    )
}

export default GoBack;