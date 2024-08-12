import React from "react";
 
function ExpensesTrack(props){

    return <>
    <h4 style={{padding:'0', margin:'0', fontWeight:'400', fontSize:'20px'}}>{props.text}</h4>
    <h4 style={{padding:'0', margin:'0', color:`${props.balance> 0 ? 'green' : 'red'}`, fontWeight:'500', fontSize:'20PX'}}>{props.balance}</h4>
    </>

}

export default ExpensesTrack;