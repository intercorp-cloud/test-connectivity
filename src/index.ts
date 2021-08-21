import express from 'express';

const app=express();

app.set('port',3900);
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/',(req,res)=>res.send('Hola Mundo'));

app.listen(app.get('port'),()=>{
    console.log('Servidor corriendo');
});