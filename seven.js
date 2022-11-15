var read =require('readline-sync')
var name=read.question("Enter passenger name:")
var miles=parseInt(read.question("Enter total miles travelled:"))
if(miles>=10000 && miles<20000)
{
    console.log(name + " earned 10 points")
}
else if(miles>=20000 && miles<50000)
{
    console.log(name + " earned 20 points")
}
else if(miles>=50000 && miles<100000)
{
    console.log(name + " earned 30 points")
}
else if(miles>100000)
{
    console.log(name + " earned 50 points")
}
else
{
console.log(name+" has no reward points")
}