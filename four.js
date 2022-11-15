var read =require('readline-sync')
var inp=read.question("Enter date in dd/mm/yyyy format:")
var year=2022
inp=inp.split('/')
console.log(inp)
console.log("Age in years:"+(year-parseInt(inp[2])))
console.log("Age in months:"+(year-parseInt(inp[2]))*12)
console.log("Age in weeks:"+((year-parseInt(inp[2]))*12)*4)
console.log("Age in days:"+(year-parseInt(inp[2]))*365)
console.log("Age in hours:"+(year-parseInt(inp[2]))*8760)
if(parseInt(inp[2])%400==0 && parseInt(inp[2])%4==0 && parseInt(inp[2])%100!=0)
{
console.log("Leap year")
}
else
{
console.log("Not a leap year")
}





