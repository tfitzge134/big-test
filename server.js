const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const PORT = 8080;

const app = express();

let results = [];

fs.createReadStream('data/big-mac-index.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log('results', results);
    fs.writeFileSync('data/big-mac-index.json', JSON.stringify(results))
  });

app.listen(PORT, () => console.log(`app is running on ${PORT}`));
