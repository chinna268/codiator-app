import React from 'react'

export default function Gallery() {
    var img1="https://images.pexels.com/photos/3660527/pexels-photo-3660527.jpeg"
    var img2="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg "
    var img3=" https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg"
    var img4=" https://images.pexels.com/photos/1702624/pexels-photo-1702624.jpeg"
    var img5=" https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg"
    var img6="https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg"
    var img7=" https://images.pexels.com/photos/3041110/pexels-photo-3041110.jpeg"
    var img8=" https://images.pexels.com/photos/3828744/pexels-photo-3828744.jpeg"

    return (
        <>
        <title>Gallery</title>
        {/* the iSize of the screen is 12 */}
        {/* if  no of coumns of >12 it will move to next row */}
            <h2>This is Gallery-Page</h2>
            <div className="container">
                <div className="row gallary">
                    <div className="col-12  col-sm-6 col-md-4  col-lg-3">
                        <img src={img1}  alt="" />
                        Column-1
                    </div>
                    {/* show me only  4 pics in row */}
                    <div className="col-12  col-sm-6 col-md-4  col-lg-3">
                    <img src={img2}  alt=""/>
                        Column-2
                    </div>
                    {/* if it is a large screen then only it will show lg-4 */}
                    {/* large size -lg-4 we are letting to show 4 */}
                    {/* md is medium size  */}
                    <div className="col-12  col-sm-6 col-md-4  col-lg-3">
                    <img src={img3}  alt=""/>
                        Column-3
                    </div>
                    {/*  size>12 */}
                    <div className="col-12  col-sm-6 col-md-4  col-lg-3">
                        <img src={img4}  alt="" />
                        Column-4
                    </div>
                    {/* takes total size  */}
                    <div className="col-12  col-sm-6 col-md-4  col-lg-3">
                    <img src={img5}  alt=""/>
                        Column-5
                    </div>
                    <div className="col-12  col-sm-6 col-md-4  col-lg-3">
                    <img src={img6}  alt=""/>
                        Column-6
                    </div>
                    <div className="col-12  col-sm-6 col-md-4  col-lg-3">
                    <img src={img7}  alt=""/>
                        Column-7
                    </div>
                    <div className="col-12  col-sm-6 col-md-4  col-lg-3">
                    <img src={img8}  alt=""/>
                        Column-8
                    </div>
                    
                
                    
                    
                    

                </div>
            </div>
        </>
    )
}
