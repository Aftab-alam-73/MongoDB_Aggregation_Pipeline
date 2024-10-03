import express from 'express';
import {connectToDatabase} from './utility/db';
import userRoutes from './routes/user';
import bookRoutes from  './routes/book';
import authorRoutes from './routes/author';
const app= express();

app.use("/api/users",userRoutes);
app.use("/api/books",bookRoutes);
app.use("/api/authors",authorRoutes);

app.get('/',(req, res) =>{res.send("MongoDB Aggregation Pipeline!")})

app.listen(3000, ()=>{
    connectToDatabase()
    console.log("Server is running on port 3000")
})