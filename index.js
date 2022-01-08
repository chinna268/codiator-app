// how to start back end
//  through http req it calls back end
//  to use http protocal than we need to use



//  import express from "express";
const express=require("express")
const app=express();

// route
// url is nothing but what user enters
// it takes two parametres
// function gives what the url/user asked
app.get('/', (req,res)=>
{
    // any task ,which should aded here
    res.send("<h2>Hello bye</h2>")
});










// app.listen(portnumber,message to the user 
// whether its running or not)
// prt number >100
const port=8080;
app.listen(port, ()=>console.log(`server running on  https://localhost:${port}`));
// now you will get server running output 
//  to see  workinf or not type manuall yin browser