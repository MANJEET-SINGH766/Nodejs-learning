import http from 'http';
import express from 'express';
 const app=express()
 app.get("/",(req,res)=>{
    return res.send("Hello World")
 })
 app.get("/about",(req,res)=>{
    return res.send(`About Page ${req.query.name}`)
 })
 const myServer=http.createServer(app);
 myServer.listen(8000,()=>{
    console.log("Server is running on port 8000");
 })
