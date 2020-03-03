var vec=new Array(11).fill(0);
var suma=0;

function Dado(){
    var numA=Math.floor(Math.random()*6+1);
    return numA;
}

for(i=0;i<100;i++){
    suma=Dado()+Dado();
    vec[suma-2]++;
}

for(i=0;i<11;i++){
    console.log("La suma "+(i+2)+" se repitio  "+vec[i])
}



