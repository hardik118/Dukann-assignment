import { Bluecard } from "./blueCard"
import { Whitecard } from "./whitecard"

export const Cards= ()=>{
    return(
   <div className="">
    <h3 className="text-xl font-medium p-3">Overview </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 ">
    <div className="col-span-1   mr-5 h-32 ">
<Bluecard/>
    </div>
    <div className="col-span-1  mr-5 h-24 mt-5 md:mt-0  ">
<Whitecard 
heading={"Amount Pending "}
amount={"$4,755,679.0"}
Avisibility={true}
/>

    </div>

<div className="col-span-1  h-24 mt-5 mr-5 lg:mt-0">
<Whitecard 
heading={"Amount Processing"}
amount={"$755,079.0"}
Avisibility={false
  
}
/>
</div>
  
  </div>
  </div> 
    )
}