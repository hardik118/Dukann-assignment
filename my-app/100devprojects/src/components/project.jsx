import { SCreen } from "../SCREEN";
import { Navicons } from "./iconnav";
export const Project = (props) => {
  
    return (
      <div className="grid grid-cols-12 ">
        <div className="hidden lg:block col-span-2 bg-blue-950 h-screen ">
          <div className="flex justify-start mt-2 ">
           
            <img className="h-12 w-12 ml-2 mr-4 mt-3 " src="seo.png" alt="" />
            <div>
              <h3 className="text-white mt-3  text-lg font-medium">Dukan</h3>
              
                <a className=" text-sm underline text-white" href="">23 orders</a>
           
            </div>
            <img className="h-6 w-6 mt-6 ml-8" src="GTWS.png" alt="" />
          </div>
          <Navicons img={"GTWS.png"} Title={"Home"}/>
          <Navicons img={"GTWS.png"} Title={"Order"}/>
          <Navicons img={"GTWS.png"} Title={"Products"}/>
          <Navicons img={"GTWS.png"} Title={"Delivery"}/>
          <Navicons img={"GTWS.png"} Title={"Marketing"}/>
          <Navicons img={"GTWS.png"} Title={"Analytics"}/>
          <Navicons img={"GTWS.png"} Title={"Payouts"}/>
          <Navicons img={"GTWS.png"} Title={"Discount"}/>

          <Navicons img={"GTWS.png"} Title={"Audience"}/>
          <Navicons img={"GTWS.png"} Title={"Apperances"}/>
          <Navicons img={"GTWS.png"} Title={"Setting"}/>




        </div>
        <div className="col-span-12 lg:col-span-10  h-screen ">
          <SCreen/>
        </div>
      </div>
    );
  };
  