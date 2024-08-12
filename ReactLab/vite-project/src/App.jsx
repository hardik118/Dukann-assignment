import React from "react";
import Heading from "./components/heading";
import { Balancebox } from "./components/balancebox";
import ExpenseBox from "./components/ExpenseBreakDown";
import TransactionBox from "./components/transactionbox";
import { Globalprovider } from "./state/globalcontext";
import Form from "./components/form";
 export default function App(){
   return <div>
    <Globalprovider>
    <Heading/>
    <Balancebox text={'Blanace'}  />
    <ExpenseBox/>
    <TransactionBox/>
    <Form/>
    </Globalprovider>
    

   </div>
}

