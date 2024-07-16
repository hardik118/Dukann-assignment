import { RoundBtn } from "./roundSvg"
import { Bar } from "./bar"
import { Svgicon } from "./Questrionsvg"
import { Para } from "./paraCompo"

export const Appbar= ()=>{
    return <div className="grid grid-cols-3 h-12 bg-gray-100">
        <div className="   flex justify-start  ">
            

            <h4 className="text-xl font-medium font-black-500 p-2 ">Payouts</h4>
            <div className=" invisible sm:visible flex justify-start mt-3 ">
                <Svgicon/>
                <Para text={"Having issues ?"}/>
            </div>
            </div>
            <div className="  ">
                <div className="mt-[-11px]">
                <Bar/>
                </div>
           
            </div>
            <div className="flex justify-end p-">
<RoundBtn img={"chat.png"}/>
<RoundBtn img={"support.png"} />
            </div>
            
        </div>

} 