import icon from './boom.png'
export default function Error() {
    return(
        <div className="error-container">
            <img  src={icon} alt="error"/>
            <span className="err-msg"><p>This is 404! Wait
                until it will be fixed !  </p></span>
        </div>
    )
    
}