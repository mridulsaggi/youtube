import React from 'react'
import "./feed.css"
import { Categories, categories } from "../../utils/constants"
import Videopage from '../videopage/videopage'
// const Selected = "New";

const Sidebar = ({selectedcategory,setselecetedcategory}) => {
    return (
        <>
        <div className='category'>
            {
                categories.map(category => (
                    <a className='linker' style={{background:category.name===selectedcategory && "red"}} 
                    key={category.name}
                    onClick={()=>{
                        setselecetedcategory(category.name)
                    }}>
                        <div className="jj" style={{color:category.name===selectedcategory && "white"}} >{category.icon}</div>
                        <div className="kk">{category.name}</div>
                    </a>
                ))
            }
        </div>
        
        </>
    )
}

export default Sidebar
