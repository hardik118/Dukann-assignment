import React, { useContext } from "react";
import { Globalcontext } from "../state/globalcontext";
import "../App.css"

 export function Balancebox(props){
    const {Transaction} = useContext(Globalcontext);
    const balance= Transaction.reduce((accumulator, transction)=>{
        return accumulator+ transction.amount;
    }, 0);
    console.log(balance);
    return <div className="balancebox">
    <h3 style={{padding:'0', margin:'0',fontWeight:'400', fontSize:"20px"}}>{props.text}</h3>
    <h2 style={{padding:'0', margin:'0', fontWeight:'500', fontSize:"25px"}}>${balance}</h2>
    </div>
}

