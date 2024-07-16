import {Dot} from "../components/dot";
export const Table = () => {

   
    return (
       
            <table className=" w-11/12 h-52  mt-[-10px] text-xs font-medium text-gray-800 mr ml-9 text-left  border border-gray-200 bg-white rounded-medium ">
                <thead className="">
                    <tr className="bg-gray-200  h-6 ">
                        <th className="pl-3">Order Id</th>
                        <th className="">Status</th>
                        <th className="">Transaction Id</th>
                        <th className="" >Refund Id</th>
                        <th className="pr-3 text-right p">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-gray-100 border h-6">
                        <td className="text-blue-600 pl-3 ">#20198</td>
                        <td> <Dot Status={'successful'}/>
                            Successful</td>
                        <td>TR12345</td>
                        <td>Today,:03 AM</td>
                        <td className="text-right pr-3">$11,240.00</td>
                    </tr>
                    <tr className="border-gray-100 border h-6">
                        <td className="text-blue-600 pl-3 ">#20199</td>
                        <td> <Dot Status={'successful'}/>Successful</td>
                        <td>TRX1236</td>
                        <td>Today, 3:14 AM</td>
                        <td className="text-right pr-3">0.00</td>
                    </tr>
                    <tr className="border-gray-100 border h-6">
                        <td className="text-blue-600 pl-3">#20200</td>
                        <td> <Dot Status={'pending'}/>Pending</td>
                        <td>TRX1237</td>
                        <td>Yesterday, 4:30 PM</td>
                        <td className='text-right pr-3'>300.00</td>
                    </tr>
                    <tr className="border-gray-100 border h-6">
                        <td className="text-blue-600 pl-3 ">#20201</td>
                        <td > <Dot Status={'pending'}/>Failed</td>
                        <td>TRX1238</td>
                        <td>Yesterday, PM</td>
                        <td className="text-right pr-3">$9,120.00</td>
                    </tr>
                    <tr className="border-gray-100 border h-6">
                        <td className="text-blue-600 pl-3 ">#20202</td>
                        <td> <Dot Status={'successful'}/>Successful</td>
                        <td>TRX1239</td>
                        <td>Tod AM</td>
                        <td className="text-right pr-3">00.00</td>
                    </tr>
                    <tr className="border-gray-100 border h-6">
                        <td className="text-blue-600 pl-3">#20198</td>
                        <td> <Dot Status={'successful'}/>Successful</td>
                        <td>TR12345</td>
                        <td>Today,:03 AM</td>
                        <td className="text-right pr-3 ">$11,240.00</td>
                    </tr>
                  
                </tbody>

            </table>
           
        
    );
};
