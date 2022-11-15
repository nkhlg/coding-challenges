var read =require('readline-sync')
var arr=[]
var arr2=[]
var n=parseInt(read.question('Enter no of passengers:'))
console.log("Enter passenger names :")
for(i=0;i<n;i++)
{
inp=read.question('')
arr.push(inp)
}
console.log("Enter destination names :")
for(i=0;i<n;i++)
{
inp=read.question('')
arr2.push(inp)
}
console.log("Merged data :")
arr2.forEach(element => {
    arr.push(element)
});
console.log(arr)


