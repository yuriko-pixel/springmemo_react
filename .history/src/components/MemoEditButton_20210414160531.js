import buttonstyle from '../styles/button.module.scss'

const MemoEditButton = ()=> {
    return (
        <div className={buttonstyle.right}>
            <button className={buttonstyle.editbutton}>Edit</button>
            <button className={buttonstyle.editbutton}>Delete</button>
        </div>
    )
}

export default MemoEditButton