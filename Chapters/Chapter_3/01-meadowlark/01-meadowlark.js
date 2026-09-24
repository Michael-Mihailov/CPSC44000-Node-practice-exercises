const express = require("express")

const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.type("text/plain")
    res.send("Meadowlark Travel")
})

app.get("/about", (req, res) => {
    res.type("text/plain")
    res.send("About Meadowlark Travel")
})

app.use((req, res) => {
    res.type("text/plain")
    res.status(404)
    res.send("Error 404")
})

app.use((err, req, res, next) => {
    console.error(err.message)
    res.type("text/plain")
    res.status(500)
    res.send("Error 500")
})


app.listen(port, () => console.log(`Express started on port: ${port}`))