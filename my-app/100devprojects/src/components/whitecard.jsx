import { Svgicon } from "./Questrionsvg";
import { Para } from "./paraCompo";
import { Anchor } from "./anchor";
export const Whitecard=(props)=>{
    return (
        <div className="bg-white h-full rounded relative ">
            <div className="flex justify-start p-2 ml-2 ">
            <Para text={props.heading }></Para>
           <div className="">
           <Svgicon/>
           </div>

            </div>
            <div className="flex justify-between absolute bottom-3 left-0 right-0  p-3">
            <h3 className="text-2xl ">{props.amount}</h3>
            
            {props.Avisibility && <Anchor />}

           
        </div>
        </div>
    )
}