const express = require('express');
const logger = require('morgan');
const app = express();
const blah = require("./js/randy.js");
const PORT = 5151;

console.log(blah() );
app.get('/', (req, res)=>{
	res.send(`There are ${blah()*13} calories in ${blah()}  Cheetos!`);
} );
app.listen(PORT);
console.log(`App is listening on ${PORT}`);