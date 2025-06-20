const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('index.html', 'utf8');
['<<<<<<<', '=======', '>>>>>>>'].forEach(marker => {
  assert(!html.includes(marker), `Merge conflict marker '${marker}' found`);
});

console.log('No merge conflict markers found.');
