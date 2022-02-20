const products = [
    {name :'water bottle' , price : 200, color: 'red'},
    {name :'mobile' , price : 15000, color: 'black'},
    {name :'watch' , price : 2000, color: 'white'},
    {name :'car' , price : 1500000, color: 'blue'},
    {name :'fish' , price : 200, color: 'black'}

];

const blacks = products.map(product => product.price);

const numbers = [10,20,20,40,50,30]

const square = numbers.map(x =>  x*x)
console.log(square);


