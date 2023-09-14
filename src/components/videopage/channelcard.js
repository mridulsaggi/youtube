import React from 'react'
import "./videopage.css"
import {Link} from "react-router-dom"
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../../utils/constants";

const Channelcard = ({video}) => {
  return (
    <div>
        <Link className="sub bus" to={video?.id?.channelId?`/channel/${video.id.channelId}`:(demoChannelUrl)}>
            <img src={video?.snippet?.thumbnails.high.url} alt="img" className='imgokhai' />
            {/* <span className='title'>{video.snippet.title.slice(0,60)}</span> */}
            <div className='chti'>
            <span className='channel ji'>{video?.snippet?.channelTitle}</span>
            {/* <CheckCircleIcon/> */}
            </div>
            {/* <p className='ff'>CLICK TO KNOW MORE</p> */}
            <span>{(video?.statistics?.subscriberCount?video.statistics.subscriberCount:"")}</span>
            <span>{video?.snippet?.description}</span>
        </Link>
      
    </div>
  )
}

export default Channelcard;
