import { Para } from "./paraCompo"

export const Bluecard =()=>{
    return(
        <div className="bg-blue-600  h-full relative  rounded text-white">
        <div className=" flex jusitfy-start text-base p-2 ml-2 ">
<Para text={"Next Payout "}/>
        <img className="w-4 h-4 mt-1 mr-1  ml-2" src="whitQue.png
        " alt="" />
        </div>
        <div className="flex justify-between absolute bottom-1/3 left-0 right-0  p-3 mt-2  ">
            <h3 className="text-2xl text-white ml-1 ">$24,506.06</h3>
            <div className=" flex justify-center mt-1" >
                <a className="text-white text-md underline" href="">23 orders</a>
                <img className="w-4 h-4 mt-1 mr-1 ml-1 " src="GTWS.png" alt="" />
            </div>
        </div>
        <div className="h-1/4 bg-blue-900  flex justify-around absolute bottom-0  left-0 right-0 rounded ">
        <h3 className="font-sm p-1">Next payment date :</h3>
        <h3 className="p-1 font-sm">Today : 4.30 Pm</h3>

        </div>
        </div>
    )
}