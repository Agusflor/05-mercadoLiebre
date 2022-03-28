/* dependencias */
const express= require('express');
const app= express();
const path= require ('path');
const port=3030;
/* middlewares */
app.use(express.static('public'));
/* rutas */
app.get('/',(req,res)=> res.sendFile(path.resolve(__dirname,'views', 'home.html')));
/*server */
app.listen(port,()=> console.log(`server running https://localhost:${port}`));