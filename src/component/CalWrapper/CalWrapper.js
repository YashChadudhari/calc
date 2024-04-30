import Button from "../../common/Button/Button";
import './CalWrapper.css'
const CalWrapper=(props)=>{
    
    const allButton = props.allBtnArr.map((btObj)=>{
       return <Button key={btObj.value} btName={btObj.value} btFunc={btObj.btFunc}></Button>;
    });
    const allOprButton = props.allOprBtn.map((btObj)=>{
        return <Button key={btObj.value} btName={btObj.value} btFunc={btObj.btFunc}></Button>;
     });
    console.log("allButton",allButton)
    return(
        <div className="main-cal">
        <div className="btn-Name">{allButton}</div>
        <div className="btn-Opr"> {allOprButton}</div>
        </div>
    )
}
export default CalWrapper;