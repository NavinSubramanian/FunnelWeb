const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config();

const port = process.env.PORT;
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname))

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    full_name: String,
    email: String,
    phone: Number
})
const users = mongoose.model("data",userSchema)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.post('/post',async (req,res)=>{

    const {full_name, email, phone} = req.body;

    const cur = new users({
        full_name,
        email,
        phone
    })
    await cur.save();
    
    res.redirect('/payment.html');
})

app.get('/payment.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'payment.html'));
});

app.listen(port,()=>{
    console.log("Server running in port",port)
})