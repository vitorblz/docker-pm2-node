import express, {Application} from 'express';
import dotenv from 'dotenv'
dotenv.config()

const app: Application = express()

const PORT_APP = process.env.PORT || 5000;

app.listen(PORT_APP, ()=>{
    console.log(`server runnning on ${PORT_APP}`)
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

console.log("ambiente", process.env.NODE_ENV)