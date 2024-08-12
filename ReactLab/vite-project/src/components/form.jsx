import React, { useContext } from "react";
import { useState } from "react";
import { Globalcontext } from "../state/globalcontext";
import "../App.css"

function Form(){
const id=0;
   const  [text, settext]= useState("");
   const  [amount, setamount]= useState(0);
   const {addTransc}  = useContext(Globalcontext);

   const  onsubmit=e=>{
    e.preventDefault();
    const count=id+1;


    const newTransction ={
        count, 
        text,
        amount: +amount

    }
    addTransc(newTransction);
    setamount(0);
    settext("");
    
   }

return (
    <form action="" onSubmit={onsubmit}>
        
        <h4  className="transctionHeading" style={{fontWeight:"400", fontSize:"18px"}}> Add New Transction</h4>
        <hr className="gray-line" />
        <div >
            <label htmlFor="text" className="textstyle" style={{marginBottom:"5px"}}> Text</label><br />

            <input type="text" className="inputfield" value={text}  onChange={(e)=>settext(e.target.value)} placeholder="Expenditure Name" />
        </div>
        <div >
            <label htmlFor="amount" className="textstyle" style={{marginBottom:"5px"}}><span>Amount <br />
                (Postive-Income, Negative-Expenditure)
        </span>
            </label><br />

            <input type="text" className="inputfield" value={amount}  onChange={(e)=>setamount(e.target.value)} placeholder="Enter The Amount " />
        </div>
        <br />
        <div>            <button className="addButton">Add Transction</button>

        </div>
    </form>
)
}

export default Form;
