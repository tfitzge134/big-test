const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const PORT = 8080;

const app = express();
//middleware
// var app = express();

// app.set('views', __dirname + '/views');
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine()

///routes
//app.get('/country,(request, response)=>{
// response.render('index', {country: 'Argentina'})
//})
let results = [];

// fs.createReadStream('server/data/big-mac-index.csv')
//   .pipe(csv())
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
//     console.log('results', results);
//     fs.writeFileSync('server/data/big-mac-index.json', JSON.stringify(results))
//   });

app.listen(PORT, () => console.log(`app is running on ${PORT}`));
