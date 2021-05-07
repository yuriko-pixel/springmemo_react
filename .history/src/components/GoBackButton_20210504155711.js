import {Link} from 'react-router-dom'
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const GoBack = ()=> {
    return (
        <Link to="">
            <Button variant="primary" className="mr-2">Go Back</Button>
        </Link>
    )
}

export default GoBack;