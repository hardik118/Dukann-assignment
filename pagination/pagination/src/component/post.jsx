export default function Post({post, loading}){
    if(loading) return <div>Loading....</div>
    else{
    return(
        <div style={{display:"flex", justifyContent:"center", marginTop:"10px"}}> 
        <div style={{width:"80%" ,height:"50px", backgroundColor:"#EEF7FF", color:"#4D869C",border:"1px solid #7AB2B2", borderRadius:"20px", margin:"10px", padding:"5px", display:"flex", justifyContent:"center", }} >
   <div style={{fontSize:'20px'}}>
       {post.title}
   </div>
</div>
   </div>
    )
}

}