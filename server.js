const express = require('express');
const app = express();
app.use(express.json());
const Authentication = require('./middleware');

app.post('/login', Authentication, (req, res)=>{
    res.send('Valid User');
});
app.listen(3000, ()=>{
    console.log('Server is running on port 8000');
});