const express = require("express")
const app = express()
//const routes = require("./routes")
const db = require("./db")
const volleyball = require("volleyball")

//logging middleware
app.use(volleyball)

//body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Static
app.use(express.static(__dirname + "/public"))

/* app.use('/api', routes);
 */
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/' + 'index.html')
})

//error middleware
app.use((err, req, res, next)=>{
    res.status(500).send("error")
  })


  db.sync({force: false})
  .then(()=>{app.listen(3000, function (){console.log('LIME is listening on port 3000!')})})
