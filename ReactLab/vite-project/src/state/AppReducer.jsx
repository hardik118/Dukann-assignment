import { act } from "react"

export default  (state, action)=>{
    switch(action.type){
    case 'delete':
        return {
            ...state,
            Transaction: state.Transaction.filter(item=>item.id !== action.payload)
        }

    case "Add":
        return{
            ...state,
            Transaction: [action.payload, ...state.Transaction]
        }
        default: 
        return state;
    }
}