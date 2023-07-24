const express =require("express")
const mongoose =require("mongoose")
require("dotenv/config")
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
const patients=require("./models/patients")
const app=express();
app.use(express.json())

mongoose.connect("mongodb+srv://Srishti:Srishti15@cluster0.u87vkyy.mongodb.net/?retryWrites=true&w=majority")
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

const Port = 4000

app.listen(Port,()=>{
    console.log("Listening to  "+Port)
})

app.get("/",(req,res)=>{
    res.send("Welcome ")
    res.end()
})

//Getting the Patients list
app.get("/patientlists",async(req,res)=>{
    try{
        const Patients= await  (await patients.find()).reverse()
        res.json({success:true,data:Patients})
    }
    catch(err){
        res.status(500).json({data:[],error:err})
    }
})

//Adding the patients 
app.post("/addpatient",async(req,res)=>{
    try{
        const addpatient= new patients(req.body)
        await addpatient.save()
        res.json({success:true,data:addpatient})
    }
    catch(err){
        res.status(500).json({data:[],error:err})
    }
})
