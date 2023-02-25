const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')


const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://root:OYIdMhgfNbC2pgti@cluster0.fvovwqo.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true}).then(function(){
    console.log('conectado com sucesso');
}).catch(function(err){
    console.log(err.message);
})

app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}))

app.engine('html',require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/pages'));

app.get('/',(req,res)=>{
    console.log(req.query);

    if(req.query.busca == null){
        res.render('home',{})
    }else{
        res.render('busca', {})
    }

})

app.get('/:slug',(req,res)=>{
    res.render('single',{})
})

app.listen(5000,()=>{
    console.log('Servidor Funcionando!!!');
})