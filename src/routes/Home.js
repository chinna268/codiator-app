import React from 'react'
import { useState } from 'react';
export default function Home() {
    const[name,setName]=useState('');
    const[count,setCount]=useState(1);
    return (
        <>
            <h2>This is Home </h2>
            <div className='container'>
                <div className="mb-3">
                <label className='form-label'>Full Name</label>
                <input type="text" className='form-control' id="userName"/>
                </div>
            
            <button className='btn btn-success mb-3' type="button" onClick={()=>setName(
                document.getElementById('userName').value
            )}> send</button>
            <h4>{name}</h4>
            </div>

           
            <div className='container'>
                  <h2>{count}</h2>
            <button className="btn btn-success btn-sm  me-3" onClick={
                ()=>count > 9 ? window.alert("max 10 items can be added"):
                setCount(count+1)}>+</button>
            <button className="btn btn-danger  btn-sm " onClick={
                ()=> count>1 ? setCount(count-1):window.alert("cart value cant  be less than 1")}>-</button>

                </div>
        </>
    )
}
