//os modules
const os = require('os');
const user = os.userInfo();
console.log(user);


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    uptime: os.uptime(),
};
console.log(currentOS);

//path modules
const path = require('path');
console.log(path.sep);
const filePath = path.join('./content', 'subfolder', 'text.txt');
console.log(filePath);

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolutePath);


//file system(fs) modules
const fs = require('fs');
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
// console.log(`${first} ${second}`);

//it initially just overwrites the file whenever we run this but with the flag property it just adds to what is already there
writeFileSync('./content/written-result.txt',
 `i just wrote to this file: ${first}, ${second}`,
  {flag: 'a'});

    //async fs using callbacks
    const {readFile, writeFile} = require('fs');

    readFile('./content/first.txt', 'utf8', (err, res) => {
        if (err){
            console.log(err);
        }else{
            // console.log(res);
            const first = res;
            readFile('./content/second.txt', 'utf8', (err, res) => {
                if (err){
                    console.log(err);
                }else{
                    // console.log(res);
                    const second = res;
                    writeFile('./content/result-async.txt', `this is the result: ${first}, ${second}`, (err, data) => {
                        if (err){
                            return err;
                        }else {
                            console.log(data);
                        }
                    })
                }
            })
        }
    })

//http modules

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('home page');
    }else if (req.url === '/about') {
        res.end('about page');
    } else{
        res.end(`
            <h1>oops!</h1>
            <p>could not find the page you requested for</p>
            <a href='/'>back home</a>
        `)
    }
    // res.write('hello world!');
    // res.end();
})

server.listen(5000)