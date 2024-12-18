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

app.use(express.static(path.join(__dirname, 'public')));

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
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.post('/post',async (req,res)=>{

    const {full_name, email, phone} = req.body;

    const cur = new users({
        full_name,
        email,
        phone
    })
    await cur.save();
    
    res.redirect(`/payment?full_name=${encodeURIComponent(full_name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}`);
})

app.get('/form', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'form.html'))
})

app.get('/payment', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'payment.html'));
});

app.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'success.html'));
});

app.get('/retry', (req, res) => {
    res.redirect('/payment');
});

app.get('/terms', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'terms.html'));
})

app.get('/shipping', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'shipping.html'));
})

app.get('/privacy', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'privacy.html'));
})

app.get('/cancellations', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'cancellations.html'));
})

app.get('/contact', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
})

app.listen(port,()=>{
    console.log("Server running in port",port)
})