const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');
const cors = require('cors');

const PORT = 5000;
const DB_URL = `mongodb+srv://admin:759500@cluster0.owj3v.mongodb.net/users?retryWrites=true&w=majority`;

const app = express();
app.use(cors())
app.use(express.json());

app.use('/api', router);

const startApp = async () =>{
    try {
        await mongoose.connect(DB_URL);
        app.listen( PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
    } catch (e) {
        console.log(e)
    }
}

startApp();

//cors
//required
// mongoose paginations