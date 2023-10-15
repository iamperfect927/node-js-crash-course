//http modules

// const http = require('http');
// const server = http.createServer((req, res) => {
//     if (req.url === '/'){
//         res.end('home page');
//     }else if (req.url === '/about') {
//         res.end('about page');
//     } else{
//         res.end(`
//             <h1>oops!</h1>
//             <p>could not find the page you requested for</p>
//             <a href='/'>back home</a>
//         `)
//     }
//     // res.write('hello world!');
//     // res.end();
// })

// server.listen(5000, ()=>{
//     console.log('server is listening to port 5000...')
// })

//alternative read and write
const { readFile, writeFile } = require('fs').promises;
const encod = 'utf8'
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, encod, (err, res) => {
//             if (err){
//                 reject(err);
//             }else {
//                 resolve(res);
//             }
//         })
//     })
// };

// getText('./content/first.txt')
//     .then((result => console.log(result)))
//     .catch((err => console.log(err)));

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', encod);
        const second = await readFile('./content/second.txt', encod);
        console.log(first, second);
        await writeFile('./content/mind-grenade.txt', `this is awesome: ${first} and ${second}`, {flag: 'a'});
    } catch (error) {
        console.log(error);
    }
}

start();