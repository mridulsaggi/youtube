import React, { useEffect, useState } from 'react'
import "./videodetail.css"
import { Link, useParams } from 'react-router-dom'
import { Fetchapi } from '../../utils/fetchapi'
import ReactPlayer from "react-player"

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Videopage from '../videopage/videopage'
// import channe
const Videodetail = () => {
  const [videodetail, setvideodetail] = useState(null);
  const [videos, setvideos] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    Fetchapi(`videos?part=snippet,statistics&id=${id}`).then((data) => setvideodetail(data.items[0])).catch((err) => console.log(err));  
    Fetchapi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((dt)=>setvideos(dt.items)).catch((err)=>console.log(err));
    if(videos==null){
      Fetchapi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((dt)=>setvideos(dt.items)).catch((err)=>console.log(err));
    
    }
  }, [id])
  // console.log(videos)
  return (
    <>
    <div className="playsec">
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="reactplayer" controls width="90%" height="100%" />
      <div className='vid'>
        <div className="vtit">{videodetail?.snippet?.title}</div>
        <div className="st">
          <div className='chantick'>
          <Link to={`/channel/${videodetail?.snippet?.channelId}`} className="ct">{videodetail?.snippet?.channelTitle}</Link>
          <CheckCircleIcon/>
          </div>
          <span className="likes">{parseInt(videodetail?.statistics?.viewCount).toLocaleString()}views</span>
        </div>
      </div>
    </div >
    <div className="relatedvideos">
      <span className=" rt">RELATED VIDEOS</span>
      <Videopage videos={videos}/>
    </div>
    </>
  )
}

export default Videodetail
