import fs from 'fs';
//fs.writeFileSync('file.txt', 'Hello, World!');
//const data = fs.readFileSync('contact.txt', 'utf8');
//console.log(data);
fs.appendFileSync('contact.txt', new Date().getDate().toString());