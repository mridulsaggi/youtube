import React, { useEffect, useState } from 'react'
import "./feed.css"
import Sidebar from './sidebar'
import Videopage from '../videopage/videopage'
import { Fetchapi } from '../../utils/fetchapi'
const Feed = () => {
    // const [datas,setdatas]=useState();
    // useEffect(()=>{
    //     getdata();
    // },([]))
    // function getdata(){
    //     fetch(url,options).then((res)=>res.json()).then(data=>console.log(data));
    // }
    const [selectedcategory, setselectedcategory] = useState("New")
    const [videos, setvideo] = useState([])
    useEffect(() => {
        Fetchapi(`search?part=snippet&q=${selectedcategory}`).then(data => setvideo(data.items))
        
    }, [selectedcategory]);
    return (
        <div className='feedpage'>
            <div className="feed">
                <Sidebar selectedcategory={selectedcategory} setselecetedcategory={setselectedcategory} />
            </div>
            <div className="below">
            <div className="name">
                {selectedcategory}<span>video</span>
            </div>
            <Videopage videos={videos}/>
            </div>
        </div>
    )
}

export default Feed;
