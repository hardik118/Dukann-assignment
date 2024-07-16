import { SvgBtn } from "./svgcompo"
import { Textbtn } from "./textbtn"
import { Bar } from "./bar"
export const Search = ()=>{
    return(
    <div className=" flex justify-between">
     <Bar></Bar>
    <div className=" flex justify-between p-4" > 
       
        <SvgBtn />
        <Textbtn/>

      
    </div>
    </div>

    )
}