import React from 'react'
import "./videopage.css"
import { Link } from "react-router-dom"
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../../utils/constants";

const Videocard = ({ video }) => {
    return (
        <Link className="sub" to={video?.id?.videoId?`/video/${video.id.videoId}`:demoVideoUrl}>
            <img src={video?.snippet?.thumbnails?.medium?.url? video.snippet?.thumbnails.medium.url : "https://tse4.mm.bing.net/th?id=OIP.tDcS3ZznUqdelwP_0qL5ZgHaE0&pid=Api&P=0&h=180"} alt="img" className='imghai' />
            <div className='chsub'>
            <span className='tile'>{video.snippet.title?video.snippet.title?.slice(0,50):demoVideoTitle}</span>
            </div>
            <span className='channel'>{video.snippet?.channelTitle?video.snippet?.channelTitle:demoChannelTitle}</span>
            
            {/* <span>{video.snippet.description}</span> */}
        </Link>
    )
}

export default Videocard;
