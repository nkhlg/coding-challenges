var read =require('readline-sync')
var arr=[]
while(true)
{
inp=read.question('')
if(inp =='q')
{
    break
}
arr.push(inp)
}
console.log(arr)