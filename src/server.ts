import "reflect-metadata";
import express, { Request,Response,NextFunction } from "express";
import {router } from "./routes"
import "./databse";
const app=express();
import "express-async-errors"

app.use(express.json());

app.use(router);

app.use(
    (err: Error , request: Request , response: Response, next: NextFunction) => {
   if(err instanceof Error) {
       return response.status(400).json({ error:err.message 
    });
   }
   return response.status(500).json({
       status:"error",
       message:"internal server error occurred"
   });
});

app.listen(3000, () => console.log("server is running"));

