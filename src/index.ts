import express, {Application} from 'express';

const app: Application = express()

app.listen(5000, ()=>{
    console.log('server runnning')
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

console.log("ambiente", process.env.NODE_ENV)