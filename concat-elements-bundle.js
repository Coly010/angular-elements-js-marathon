const fs = require('fs');

const pathToBuiltFiles = './dist/apps/starwars-search-elements';

const jsFiles = fs
  .readdirSync(pathToBuiltFiles)
  .filter((file) => file.endsWith('.js'));

let fileData = '';

for (const jsFile of jsFiles) {
  fileData += fs.readFileSync(`${pathToBuiltFiles}/${jsFile}`);
}

fs.writeFileSync(`${pathToBuiltFiles}/angular-elements.bundle.js`, fileData);
