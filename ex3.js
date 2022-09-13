var unite =0;
const str ='150aa'
var result='';

// console.log('test',test);
const str2=str.toUpperCase();
console.log(str2);
const test =str2.substring()
console.log(test);




unite =str2.slice(str2.lastIndexOf())

const str3=str2.replace(str2.slice(str2.lastIndexOf()),'');

if (['K','M','G','T'].some(char => str2.endsWith(char)) == true) {
    switch (unite) {
        case 'K':
            result=(str3*1024).toString()
            
          break;
        case 'M':
            result=(str3*(1024**2)).toString()
            console.log((result));
            break;
        case 'G':
            result=(str3*(1024**3)).toString()
            console.log((result));
            break;
      case 'T':
        result=(str3*(1024**4)).toString()
        console.log((result));
          break;
        default:
          console.log(`false.`);
    }}
   
else {
  result=str
  console.log(result);
}


