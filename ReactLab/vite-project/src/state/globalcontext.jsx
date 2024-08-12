import React , {Children, createContext, useContext, useReducer} from "react";
import AppReducer from "./AppReducer";
const initialState= {
   Transaction :[
    

   ]
}
// create context
export const Globalcontext = createContext(initialState);

// create reducer



export const Globalprovider= ({children})=>{
    const [state, dispatch]= useReducer(AppReducer, initialState);

function deleteTranc(id){
    dispatch(
        {
            type:'delete',
            payload:id
        }
    )
}

function addTransc(Transaction){
    dispatch(
        {
            type:'Add',
            payload:Transaction,
        }
    )
}



   

    return (

<Globalcontext.Provider value={{
    Transaction:state.Transaction,
    deleteTranc,
    addTransc
 
    
}}>
    {children}
</Globalcontext.Provider>
  
  
    );

}