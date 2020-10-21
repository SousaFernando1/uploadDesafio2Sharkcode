const express = require('express')
const app = express()


app.set('views', 'src/views')
app.set('view engine', 'ejs');

app.use(express.static('public'))


app.get("/", function(req,res){
    res.render('home');
})

app.get("/recuperarsenha", function(req,res){
    res.render('recuperarsenha');
})
app.get("/register", function(req,res){
    res.render('register');
})
app.get("/senharecuperada", function(req,res){
    res.render('senharecuperada');
})
app.get("/profile", function(req,res){
    res.render('profile');
})
app.get("/registerSuccess", function(req,res){
    res.render('register-success');
})
app.get("/saveSuccess", function(req,res){
    res.render('save-success');
})

app.listen(4000, function(){
    console.log("Servidor Ligado")
})