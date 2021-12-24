import React from 'react'

export default function SliderBtn({sNo,sCaption,Active}) {
    if(typeof Active!=='undefined') {

    
    return (
        <>

            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to={sNo}
             
             className={Active} aria-current="true" aria-label={sCaption}></button>
            

            
        </>
    )
    }
    else{
        return(
            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to={sNo}
            aria-label={sCaption}></button>
        )
    }
}
