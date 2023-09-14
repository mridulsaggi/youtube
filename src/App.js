import './App.css';
import Videopage from "./components/videopage/videopage";
import Channelpage from "./components/channelpage/channelpage";
import Searchpage from "./components/searchpage/searchpage";
import Navbar from "./components/navbar/navbar"
import Feed from "./components/feed/feed"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import Videodetail from './components/videodetail/videodetail';
import Login from './server/login';
import Signup from './server/signup';
import { Toaster } from 'react-hot-toast';
const App = () => (
  // <div style={{ backgroundColor: "black" }}>
  <div className='main'>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' index element={<Feed/>} />
        <Route path="/video/:id" element={<Videodetail />} />
        <Route path="/channel/:id" element={<Channelpage />} />
        <Route path="/search/:searchTerm" element={<Searchpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
    </div>
)
// const App = () => (
//     <Box>
//   <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route exact path='/' element={<Feed />} />
//         <Route path='/video/:id' element={<Videopage />} />
//         <Route path='/channel/:id' element={<Channelpage />} />
//         <Route path='/search/:searchTerm' element={<Searchpage/>} />
//       </Routes>
//   </BrowserRouter>
//     </Box>
// );

export default App;