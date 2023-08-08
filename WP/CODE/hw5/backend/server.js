import express from 'express'
import cors from 'cors'
import guessRoute from './routes/guess.js'

const app = express();
// init middleware

app.use(cors());
// define routes

app.use('/api/guess', guessRoute);
// define server

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})
