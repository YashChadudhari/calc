import CalWrapper from "../CalWrapper/CalWrapper";
import {useState} from 'react'
import './Cal.css'
const Cal=()=>{
    const [inputVal1,setInputVal1]= useState(0);
    const [operationVal,setOperationVal] = useState(0);
    const [currentOpr, setCurrentOpr]=useState('');
    const allBtnArr =[
        {value:0,
             btFunc:()=>{
             setInputVal1((preValue)=>parseInt(preValue.toString() +0))
        }},
        {value:1,
             btFunc:()=>{
             setInputVal1((preValue)=>parseInt(preValue.toString() +1))
        }},
        {value:2, 
            btFunc:()=>{
            setInputVal1((preValue)=>parseInt(preValue.toString() +2))
        }},
        {value:3, 
            btFunc:()=>{
            setInputVal1((preValue)=>parseInt(preValue.toString() +3))
         }},
        {value:4, 
            btFunc:()=>{
            setInputVal1((preValue)=>parseInt(preValue.toString() +4))
         }},
         {value:5, 
            btFunc:()=>{
            setInputVal1((preValue)=>parseInt(preValue.toString() +5))
         }},
         {value:6, 
            btFunc:()=>{
            setInputVal1((preValue)=>parseInt(preValue.toString() +6))
         }},
         {value:7, 
            btFunc:()=>{
            setInputVal1((preValue)=>parseInt(preValue.toString() +7))
         }},
         {value:8, 
            btFunc:()=>{
            setInputVal1((preValue)=>parseInt(preValue.toString() +8))
         }},
         {value:9, 
            btFunc:()=>{
            setInputVal1((preValue)=>parseInt(preValue.toString() +9))
         }},
    ];

    const allOprBtn =[
        {value:'+', 
         btFunc:()=>{
           setOperationVal(inputVal1)
           setCurrentOpr('+')
           setInputVal1(0)
         }},
         {value:'-', 
         btFunc:()=>{
            setOperationVal(inputVal1)
            setCurrentOpr('-')
            setInputVal1(0)
        
        }},
        {value:'*', 
         btFunc:()=>{
            setOperationVal(inputVal1)
            setCurrentOpr('*')
            setInputVal1(0)
     
        }},
        {value:'/', 
        btFunc:()=>{
            setOperationVal(inputVal1)
            setCurrentOpr('/')
            setInputVal1(0)
  
        }},
        {value:'C', 
        btFunc:()=>{
            setInputVal1(0)
            setOperationVal(0)
            setCurrentOpr('')
  
        }},
        {value:'=', 
        btFunc:()=>{
            if(currentOpr === '+'){
                setInputVal1((preValue)=>{
                    return operationVal + preValue;
                })
            }else if(currentOpr === '-'){
                setInputVal1((preValue)=>{
                    return operationVal - preValue;
                })
            }else if(currentOpr === '*'){
                setInputVal1((preValue)=>{
                    return operationVal * preValue;
                })
            }else{
                setInputVal1((preValue)=>{
                    return operationVal / preValue;
                })
            }
        }}
    ]
    return(
        <div className="Cal-screen">
           <div className="Cal-heading"> 
           <p>This is Cal {inputVal1}</p>
           <p>{operationVal}{currentOpr}</p>
           </div>
           
            <CalWrapper allBtnArr={allBtnArr} allOprBtn={allOprBtn}></CalWrapper>
        </div>
    )
}
export default Cal;