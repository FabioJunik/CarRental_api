import express from 'express';

const app = express();

app.use(express.json())

app.get("/", (request, response)=>{
    return response.json({message:"Hello world, I'm testing!"});
});

app.post("/courses", (request, response)=>{
    const {name} = request.body;

    return response.json({name});
})

app.listen(5000);