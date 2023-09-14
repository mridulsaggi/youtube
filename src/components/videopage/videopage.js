import React from 'react'
import "./videopage.css"
import Videocard from "./videocard"
import Channelcard from "./channelcard"
import {Link} from "react-router-dom"
import { Fetchapi } from '../../utils/fetchapi'
import Sidebar from '../feed/sidebar'
const Videopage = ({videos}) => {
  // console.log(videos)
  if(!videos?.length){
    return "loading"
    
  }
    return (
      <div className='videopage'>
       {/* <Sidebar/> */}
        {
        videos.map((video,idx)=>(
          <div key={idx} >
            {/* {console.log(video.id.videoId)} */}
            {video.id.videoId && <Videocard video={video}/>}
            {video.id.channelId && <Channelcard video={video}/>}
          </div>
        ))
        }
      </div>
    )
}

export default Videopage
