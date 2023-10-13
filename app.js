const amount = 12;

if (amount < 10){
    console.log(`hey! ${amount} is less than 10`);
}else{
    console.log(`hey! ${amount} is greater than or equal to 10`); 
}

console.log(__dirname);

setInterval(() => {
    console.log('hello world');
}, 2000);