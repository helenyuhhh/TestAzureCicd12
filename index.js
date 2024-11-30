import express from 'express'

const app = espress()
const PORT = 8080

app.use(express,json())
app.get("/", (req, res) => {
    res.send("Welcome to test CICD")


})

app.get('/about', (req, res)=>{
    res.json({
        message:"This is simple app",
        developer: "Windy"
    })
})
app.listen(PORT, '0,0,0,0',()=>{
    console.log(`Server is running on ${PORT}`)
}) //'0,0,0,0': let the server decide which address to deploy your app, if dont write, it will choose local host