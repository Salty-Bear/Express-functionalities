const express = require('express');
const {connectMongoDb} = require('./connections');
const { logReqRes } = require('./middleware');

const userRouter = require('./routes/users');
const url = "mongodb://0.0.0.0:27017/saltybear-api-1";


const app = express();
const PORT = 8000;

// Connection
connectMongoDb(url);    //connecting to the database

//midddleware defining the structure of the data received
app.use(express.urlencoded({ extended: true }));
app.use(logReqRes("log.txt"));

// Routes
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));