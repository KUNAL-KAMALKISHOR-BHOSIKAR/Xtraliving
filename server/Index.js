const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const app= express()
app.use(cors())
app.use(express.json())
const UserModel = require("./models/users")
const port = 5000
mongoose.connect("mongodb+srv://xtraliving2023:Xtradnan19@xtra.htbjg96.mongodb.net/xtra?retryWrites=true&w=majority"
)

app.post('/register', async(req,res)=>{
    try {
        const {username, password} = req.body
      
        const user = await UserModel.findOne({username});
        if(user){
            return res.status(400).json({message:"Username already in use"})
        }
        const hashpassword = await bcrypt.hash(password, 10)
        const newUser = new UserModel({username, password:hashpassword})
        await newUser.save()
        res.status(200).json({message:"user registered successfully"})
    } catch (error) {
        console.error(error.message);
    }
})
app.post("/login", async(req,res)=>{
    try {
        const {username, password} = req.body;
        // console.log({username, password})
        const user = await  UserModel.findOne({username})
        if(!user){
            return res.status(404).json({message:"user does not exist"})
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).json({message:"password is incorrect"})
        }
        const token = jwt.sign({id:user._id}, "xtraxtra")
        res.status(200).json({ message:"login successful" ,token, userID: user._id, username: user.username})
      
        } catch (error) {
            console.error(error.message);
        }
        })


app.listen(port,()=>{console.log( `app is running on port ${port}`)} )