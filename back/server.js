const express = require("express")
const app = express()
const routes = require("./routes")
const db = require("./db")
const volleyball = require("volleyball")

//passport
const {User}= require('./models')
const cookieParser = require('cookie-parser');
const passport = require('passport')
const session = require("express-session");
const LocalStrategy = require('passport-local').Strategy;

//logging middleware
app.use(volleyball)

//body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Static
app.use(express.static(__dirname + "/public"))

app.use(session({
  secret: "lime",
  resave: true,
  saveUninitialized: true,
})
)

//passport
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({where: {username:username}})
    .then(user => {
      if(!user){
        return done(null,false,{message:'incorrect username'})
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    })
    .catch(done)
  })
)

passport.serializeUser(function(user,done){
  done(null,user.id)
})

passport.deserializeUser(function(id,done){
  User.findByPk(id)
  .then((user)=>done(null,user))
})

app.use('/api', routes);

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/' + 'index.html')
})

//error middleware
app.use((err, req, res, next)=>{
    res.status(500).send("HUBO un error")
})


db.sync({force: false})
.then(()=>{app.listen(3000, function (){console.log('LIME is listening on port 3000!')})})
