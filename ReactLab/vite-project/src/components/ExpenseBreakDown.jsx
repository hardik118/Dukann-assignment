import React, { useContext } from "react";
import { Globalcontext } from "../state/globalcontext";
import "../App.css"
import ExpensesTrack from "./expensesbreakdown";
function ExpenseBox(){
    const {Transaction} = useContext(Globalcontext);
    const amount = Transaction.map(transction=> transction.amount);
const income= amount.filter(item=> item >0).reduce((am , item)=>{
    return am+item;
}, 0).toFixed(2);

const expense= amount.filter(item=> item<0).reduce((am, item)=> (am+=item), 0).toFixed(2);

console.log(income);
    return <div className="expensebox">
        <div style={{margin:'6px'}}>
        <ExpensesTrack text={"Income"} balance={income}/>

        </div>
<div style={{margin:"6px"}}>
<ExpensesTrack text={"Expense"} balance={expense}/>

</div>
    </div>
}

export default ExpenseBox;