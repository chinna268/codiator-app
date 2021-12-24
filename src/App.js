import {Routes,Route,Outlet,Link} from "react-router-dom";
import Navbar from "./components/Navbar"
// we can not import using src path for media/images
//import img1 from "../src/assets/images"

import Footer from "./components/Footer";
// import Main from "./components/Main";
// import Slider from  "./components/slider/Slider"
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Gallery from "./routes/Gallery";

export default function App() {

    return (
        <>

        <Routes>
            {/* adding layout routing fro ading slash at end  */}
            <Route path="/" element={<Layout />}  >

            <Route  index element={<Home/>} />
            <Route path="/Contact-Us" element={<Contact/>} />
            <Route path="/gallery" element={<Gallery/>}  />
            {/* \wrong url */}
            <Route path="*" element={<NoPageFound/> } />

            </Route>

        </Routes>


        {/* navbar is only one component here  */}
            {/* <Navbar/> */}
            {/* <Slider  img={img1}/> */}
            {/* <Slider/> */}
            {/* <Navbar title="expanse-tracker App" btn="success"/> */}
            {/* <Main/> */}
            {/* <Footer title="keshav Reddy"/>
            <Footer title="chinna"/> */}
            {/* adding img with the file path  */}
            
             {/* <img src={img1} alt="missing" /> */}
            {/* <Footer/> */}
            
        
        </>
    )
}
// creating a function of layout of ur wish 
function  Layout()
{
    return (
        <>
        <Navbar/>
        {/* in this there should be outlet  */}

        <Outlet />

        <Footer/>
        </>
    )
}
function NoPageFound()
{
    return (
        <>
        <h2>This page is Doesnot exist.Go to HomePage<Link to="/">Home</Link></h2>
        
        </>
    )
}