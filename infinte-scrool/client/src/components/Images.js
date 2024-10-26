import React, { Component } from 'react'
import Image from './Image';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

export class Images extends Component {
   state={
    images:[],
    count:1,
    limit:30
  }
  componentDidMount(){
    const {count, limit}= this.state;
    axios.get(`/api/photos?count=${count}&limit=${limit}`).then(res=>this.setState({images: res.data.response.results}));

  }
   fetchmore=()=>{
    console.log("wokring");
    const {count, limit}= this.state;
    this.setState({count: this.state.count+limit});
    axios.get(`/api/photos?count=${count}&limit=${limit}`).then(res=>this.setState({images: this.state.images.concat(res.data.response.results)}));

  }

  render() {
    console.log(this.state.images)
 
    
    return (
      <div style={{display:'flex', justifyContent:'center', marginLeft:"20PX"}}>

        <InfiniteScroll
        dataLength={this.state.images.length}
        next={this.fetchmore}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        >
<div style={{ display: 'flex', flexWrap: 'wrap' }}>
  {this.state.images.map((img) => (
    <div key={img.id} style={{ width: '25%', boxSizing: 'border-box' }}>
      <Image image={img} />
    </div>
  ))}
</div>


        </InfiniteScroll>
      </div>

    )
  }
}

export default Images