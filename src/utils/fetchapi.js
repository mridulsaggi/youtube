import axios from "axios"
const baseurl="https://youtube-v31.p.rapidapi.com"
const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '5a5485a213msh500c7ff67ab2175p16815djsnf9f7e739e831',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
export const Fetchapi=async (url)=>{
    const {data}=await axios.get(`${baseurl}/${url}`,options)
    return data;
};
