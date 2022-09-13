const qte=2;
const unite='K';
var result=0;

if(unite == 'K'){
    result=qte*1024;
    console.log(result);
}else if (unite == 'M'){
    result=qte*(1024**2);
    console.log(result);

}else if (unite == 'G'){
    result=qte*(1024**3);
    console.log(result);

}else if (unite == 'T'){
    result=qte*(1024**2);
    console.log(result);

}
else{
    console.log(false);
}


