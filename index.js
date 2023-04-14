const express = require('express');

const app = express ();



app.get('/abertura' , (req, res) =>{
    res.sendFile(__dirname + "/views/404.html");
});

app.get('/abertura/:p' , (req, res) =>{
    var lista = ["tipoDocx", "tipoJpeg", "tipoJson", "tipoMd", "tipoMp3", "tipoMp4", "tipoPdf"];
    const tamanhoDoParametro = req.params.p.length;
    const parametro = req.params.p;
    if (!(lista.includes(parametro))){    
        res.sendFile(__dirname + "/views/404.html");
    }    
    else{
        let complemento = "";
        for (let i = 4; i < tamanhoDoParametro; i++){
            complemento += parametro[i];
        }
        res.sendFile(__dirname + "/recursos/arquivo." + complemento);
    }    
});



app.get('/' , (req, res)=>{
    res.sendFile(__dirname + "/views/index.html");
});

app.get('/contatos' , (req, res)=>{
    res.sendFile(__dirname + "/views/contato.html");
});

app.get('/produtos' , (req, res)=>{
    res.sendFile(__dirname + "/views/produto.html");
});

app.get('/catalogos' , (req, res)=>{
    res.sendFile(__dirname + "/views/catalogo.html");
});


app.listen(3000, () =>{
    console.log('Servidor iniciado')
});
