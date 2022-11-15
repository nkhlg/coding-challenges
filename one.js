var read =require('readline-sync')
var arr=[]
var c=0
var dup=[]
console.log('Enter elements:')
for(i=0;i<5;i++){
var inp=read.question('')
arr.push(inp)
}
for(i=0;i<5;i++){
    for(j=i+1;j<5;j++)
    {
        if(arr[i]>arr[j])
        {
            t=arr[i]
            arr[i]=arr[j]
            arr[j]=t
        }
    }
}
console.log("Elements in descending order:"+arr)
for(i=0;i<5;i++){
    for(j=i+1;j<5;j++)
    {
        if(arr[i]<arr[j])
        {
            t=arr[i]
            arr[i]=arr[j]
            arr[j]=t
        }
    }
}
console.log("Elements in ascending order:"+arr)
var inp=read.question("Enter element to be serached:")
arr.forEach((data)=>{
if(data==inp){
    console.log("Searched element:",data)
}
})
console.log("Length of each elements are:")
arr.forEach((data)=>{
        console.log(data.length)
})
console.log("Names after split:")
arr.forEach((data)=>{
    console.log(data.split(' '))
})
console.log("Duplicate elements are:")
for(i=0;i<5;i++){
    for(j=i+1;j<5;j++)
    {
        if(arr[i]==arr[j])
        {
            c++
        }
    }
    if(c>0 && !(dup.includes(arr[i])))
        {
            dup.push(arr[i])
        }
    c=0
}
console.log(dup)
