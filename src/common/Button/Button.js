import './Button.css'
const Button=(props)=>{
    
    return(
        <div className='btn-screen'>
            <button className="bt-cal" onClick={props.btFunc}>{props.btName}</button>
        </div>
    )
}
export default Button;