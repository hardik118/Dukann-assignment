export const Transaction=()=>{
    return(
        <div className=" pl-3">
        <div>
           <h3 className="text-xl font-medium p-1 ml-1"><span>Transactions | This Month</span> </h3>
        </div>
        <div className="p-3 ">
            <button className="bg-gray-300 rounded-full h-8 w-28 p-1 mr-2   text-gray-500 text-base " type="submit">Payemnts(30)</button>
            <button className="bg-blue-500 rounded-full h-8 w-28 p-1  text-white" type="submit">Refunds(30)</button>
           
       
       </div>
        </div>
    )
}