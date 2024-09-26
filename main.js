alert('algo');
let quanto1 = parseInt(prompt('insira um números'));
document.write (quanto1);

let quanto2 = parseInt(prompt('insira um números'));
document.write (quanto2);

let quanto3 = parseInt(prompt('insira um números'));
document.write (quanto3);
function soma (non1, non2){
    return non1+non2;
}
function areaQ (quanto1){
    return quanto1**2;
}
let media = function(quanto1, quanto2, quanto3){
    return quanto1+quanto2+quanto3/3;

}

console.log(soma(1,3));
console.log(areaQ (quanto1));
console.log(media(quanto1, quanto2, quanto3));