export const Dot=(props)=>{
    if(props.Status==="successful"){
        return(

            <button className="w-3 h-3 rounded-full bg-green-500 mr-2"></button>
            )
    }else{
        return(
            <button className="w-3 h-3 rounded-full bg-gray-500 mr-2"></button>

        )
    }
    
}