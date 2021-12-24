import React from 'react'

export default function Gallery() {
    var img="address link of image"
    return (
        <>
        {/* the iSize of the screen is 12 */}
        {/* if  no of coumns of >12 it will move to next row */}
            <h2>This is GAllery </h2>
            <div className="container">
                <div className="row gallary">
                    <div className="col bg-warning">
                        <img src={img}  alt="" />
                        Column-1
                    </div>
                    <div className="col bg-success">
                    <img src={img}  alt=""/>
                        Column-2
                    </div>
                    <div className="col bg-danger">
                    <img src={img}  alt=""/>
                        Column-3
                    </div>
                </div>
            </div>
        </>
    )
}
