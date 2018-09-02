const express = require('express');
const port = process.env.PORT || 3000;
const path = require('path');
const app = express();

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});


app.listen( port, () => {
	console.log( `App is listening on port:${port}` );
});