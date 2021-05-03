import buttonstyle from '../styles/button.module.scss'

const MemoEditButton = ()=> {
    return (
        <div>
            <button className={buttonstyle.editbutton}>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default MemoEditButton