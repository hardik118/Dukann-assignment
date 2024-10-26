export default function Loader({percent}){
    return <div class="progress mt-4" role="progressbar" aria-label="Example with label"
     
     >
    <div class="progress-bar" style={{width:`${percent}%`}} >{percent}%</div>
  </div>
}