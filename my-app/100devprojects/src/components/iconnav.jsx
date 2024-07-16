export const Navicons=(props)=>{
    return <div className="flex justify-start mt-3 ml-10">
         <img className="w-4 h-4 mt-2 " src={props.img} alt="" />
        <p className="ml-3 text-lg mb-1 text-white font-md">{props.Title}</p>
    </div>
}