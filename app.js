const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hola Mundo!')
})

app.get('/kinal', (req, res) =>{
    res.send('Hola a todos desde kinal')    
});

app.get('/registro', (req, res) =>{
    res.send('Registro de una pagina web')    
});

app.put('/login', (req, res) =>{
    res.send('Bienvenido, Inicia Sesion')    
});

app.delete('/borrar', (req, res) =>{
    res.send('has borrado tu cuenta')    
});

app.listen(port, () => {
  console.log(`Ejemplo de app escuchando en el puerto ${port}`)
})