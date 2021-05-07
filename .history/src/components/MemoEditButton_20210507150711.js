import buttonstyle from '../styles/button.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy,faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

const MemoEditButton = ()=> {
    let url = window.location.href;
    const handleDelete = ()=> {
        // document.location.href = "http://www.ipentec.com";
        let num = url.substring(26).split("/")[1];
        let result = window.confirm("OK to delete?");
        if(result) {
            const getData = ()=> {
                fetch(`http://localhost:8080/api/v1/memo/${num}`, {method:'DELETE', 
                headers: {
                  'Authorization': 'Basic ' + btoa('system:password'),
                  'Access-Control-Allow-Origin': '*'
                },
                mode: 'cors',
                credentials: 'include'
                  })
                  .then(response => {
                    if (response.status == 200) {
                      document.location.href = "http://localhost:3000/";
                    }})
                  .then(json => {
                    console.log(json);
                  });
              };
        } else {

        }
        getData();
    }
    return (
        <div className={buttonstyle.right}>
            <div className={buttonstyle.flex}>
                <Link to={`/Memo/${url.substring(26).split("/")[1]}/Edit`} className={buttonstyle.box}>
                    <FontAwesomeIcon icon={faPenFancy}  size="1.5x" style={{ color: 'red' }} />
                    <p className={buttonstyle.text}>Edit</p>
                </Link>
                <div className={buttonstyle.box2} onClick={()=>handleDelete()}>
                    <FontAwesomeIcon icon={faTrashAlt}  size="1.5x" style={{ color: 'red' }}/>
                    <p className={buttonstyle.text}>Delete</p>
                </div>
            </div>
        </div>
    )
}

export default MemoEditButton