import React, { useEffect, useState } from 'react'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../../utils/constants";
import { useParams, use } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./channelpage.css"
import "../videopage/videopage.css"
import Videocard from '../videopage/videocard'
import Channelcard from '../videopage/channelcard'
// import {CheckCircleIcon} from "@mui/material"
import { Fetchapi } from '../../utils/fetchapi'
const Channelpage = () => {
  const [state, setstate] = useState([])
  const [video, setvideos] = useState([])
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {

    fetchResults();
  }, [id]);
  const fetchResults = async () => {
    const data = await Fetchapi(`channels?part=snippet&id=${id}`);

    setstate(data?.items[0]);
    console.log(state)

    const videosData = await Fetchapi(`search?channelId=${id}&part=snippet%2Cid&order=date`);

    setvideos(videosData?.items);
    console.log(video)
  };
  return (
    <div>
      {
        <div className="channelhai" >
          <div className="top">
            <img src={state?.snippet?.thumbnails?.high?.url} alt="img" className='ig' />
            <div className="subtop">
              <span className='ti'>{state?.snippet?.title}</span>
              <span className='subs'>Description:- <p></p> {(state?.snippet?.localized?.description ? state.snippet.localized.description.slice(0, 220) : "")}</span>
              <span className='subs'>Subscribers:- <p></p> {(state?.statistics?.subscriberCount ? state.statistics.subscriberCount : "")}</span>
              <span className='subs'>VideoCount:- <p></p> {(state?.statistics?.videoCount ? state.statistics.videoCount : "")}</span>
            </div>
          </div>
          <div className="videopage">
            {video.map(vid => (

              <Videocard video={vid} />
            ))}
          </div>
        </div>
      }
    </div>
  )
}

export default Channelpage
