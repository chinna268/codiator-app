import Navbar from "./components/Navbar"
// we can not import using src path for media/images

import img1 from "./assets/images/img1.jpg";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Slider from "./components/Slider";
export default function App() {

    return (
        <>
        {/* navbar is only one component here  */}
            <Navbar/>
            <Slider  img={img1}/>
            {/* <Navbar title="expanse-tracker App" btn="success"/> */}
            <Main/>
           
        
            {/* <Footer title="keshav Reddy"/>
            <Footer title="chinna"/> */}






            {/* adding img with the file path  */}
            
             <img src={img1} alt="missing" />
            <Footer/>
            
        
        </>
    )
}