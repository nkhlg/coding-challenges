var read =require('readline-sync')
var arr=[]
var a=1
var b=2
var n=read.question("Enter array length:")
console.log('Enter elements:')
for(i=1;i<=n;i++){
var inp=read.question('')
if(inp%2==0)
{
arr[b]=inp
b=b+2
}
else{
arr[a]=inp
a=a+2
}
}
console.log(arr)
