import React, { useState, useContext } from "react";
import { Globalcontext } from "../state/globalcontext";
import "../App.css"
function TransactionHistory(props){
    const {deleteTranc}= useContext(Globalcontext);
    const[isover, setover]= useState(false);
    const sign = props.amount > 0 ? '+' : '-';
    const  money= Math.abs(props.amount);
    return (<div className="transctionhisotry" onMouseOver={()=>(setover(true))} onMouseLeave={()=>(setover(false))}>
        <div>
       {isover &&  
       <button className="btn" style={{color:'white', background:'#DD5746', border:'1px solid white' }} onClick={()=>deleteTranc(props.id)} >
        X
        </button>
}
        </div>
    

    <div className="Transactions"  style={{ borderRight: `4px solid ${props.amount > 0 ? 'green' : 'red'}`, width: `${isover ? "260px" :"300px"}`}}>
      <div style={{marginLeft:'3px'}}>
      {props.type} </div>   
<div style={{marginRight:"5px"}}>
{`${sign}$${money}`}

</div>

    </div>
    </div>
    )
}

export default TransactionHistory;