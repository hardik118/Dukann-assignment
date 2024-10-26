
export default function Message({msg}){
    return (
        <div className="alert alert-info alert-dismissible fade show" role="alert">
        <strong>Hey!!!</strong> {msg} 
       
        <button type="button" className="btn-close ml-10 bg- " data-bs-dismiss="alert" aria-label="Close"></button>
     
      </div>
    )

}