console.log('array test');
const months = ['March', 'Jan', 'Febddd', 'Decd']; 
months.sort(); 
console.log(months);
months.sort((a,b) => a.length - b.length);
console.log(months);

let slice = months.slice(1,3)
console.log(slice)
