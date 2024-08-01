const express = require('express')
const bodyPaser = require('body-parser')


const app = express()


app.use(express.json())
app.use(bodyPaser.json())

app.get('/', (req, res) => {
    res.send('cool man')
})


// app.use('api/user', userRoute)

const PORT = 5000

app.listen(() => {
    console.log(`Server ruuning on port ${PORT}`);
})