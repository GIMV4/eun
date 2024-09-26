alert('algo');
let quanto1 = parseInt(prompt('insira um números'));
let quanto2 = parseInt(prompt('insira um números'));
let quanto3 = parseInt(prompt('insira um números'));
document.write (quanto1);
document.write (quanto2);
document.write (quanto3);
function media(quanto1, quanto2,quanto3){
 return (quanto1+quanto2+quanto3)/3
}
console.log(media(quanto1, quanto2, quanto3));