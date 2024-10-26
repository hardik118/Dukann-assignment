export  default function Pagination({totalpages, postperpage,setpre_page}){

    const pagenum=[];
   function handlechnage(val){
    setpre_page(val)
    console.log(val);


   }

    
    for( let i =1; i<Math.ceil(totalpages/postperpage);i++){
        pagenum.push(i);

    } 
   
    return (
        <div style={{display:"flex", justifyContent:"center",marginTop:"10px"}}>
        <nav aria-label="...">
  <ul className="pagination pagination-sm">
    <li key={1} className="page-item active" aria-current="page">
      <span className="page-link">1</span>
    </li>
{pagenum.map(num=>(
    <li key={num+1} onClick={()=>{handlechnage(num+1)}}  className="page-item"><a className="page-link" href="#">{num+1}</a></li>

))
} 
  </ul>
</nav>
</div>
    )
}