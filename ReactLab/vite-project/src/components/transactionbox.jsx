import React, {  useContext } from "react";
import "../App.css"
import TransactionHistory from "./TransactionHistory";
import { Globalcontext } from "../state/globalcontext";
function TransactionBox(){
    const {Transaction} = useContext(Globalcontext)
        console.log(Transaction)
    return <div>

        <h4  className="transctionHeading" style={{fontWeight:"400", fontSize:"20px"}}> History</h4>
        <hr className="gray-line" />
        <div  className="TransactionLog">
<ul>
{
        Transaction.map(transaction=>(
            <TransactionHistory amount={transaction.amount} type={transaction.text} key={transaction.id} id={transaction.id} />

        ))
}

</ul>
        </div>
        
    </div>
}

export default TransactionBox;