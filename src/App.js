import Navbar from "./components/Navbar"
// we can not import using src path for media/images
//import img1 from "../src/assets/images"

import Footer from "./components/Footer";
import Main from "./components/Main";
import Slider from  "./components/slider/Slider"
export default function App() {

    return (
        <>
        {/* navbar is only one component here  */}
            <Navbar/>
            {/* <Slider  img={img1}/> */}
            <Slider/>
            {/* <Navbar title="expanse-tracker App" btn="success"/> */}
            <Main/>
           
        
            {/* <Footer title="keshav Reddy"/>
            <Footer title="chinna"/> */}






            {/* adding img with the file path  */}
            
             {/* <img src={img1} alt="missing" /> */}
            <Footer/>
            
        
        </>
    )
}