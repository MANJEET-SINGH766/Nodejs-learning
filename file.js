import fs from 'fs';
//blocking code
//fs.writeFileSync('file.txt', 'Hello, World!');
//const data = fs.readFileSync('contact.txt', 'utf8');
//console.log(data);
//fs.appendFileSync('contact.txt', new Date().getDate().toString());

//non blocking code
fs.writeFile('file.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('File has been saved!');
});