import buttonstyle from '../styles/buttonstyle.module.scss'

const MemoEditButton = ()=> {
    return (
        <div>
            <button className={editbutton}>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default MemoEditButton