var vec=new Array(6).fill(0);
var cara;


function Dado(){
    var numA=Math.floor(Math.random()*6+1);
    return numA;
}

for(i=0;i<100;i++){
    cara=Dado();
    vec[cara-1]++;
}

for(i=0;i<6;i++){
    console.log("El numero "+(i+1)+" se repitio  "+vec[i])
}



