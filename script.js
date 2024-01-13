let arr =[{id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"karen", age:"19",profession:"admin"}]


function PrintDeveloperbyMap(){
  let dev=arr.map((e)=>(e.profession=="developer" ? e:null));
 console.log(dev); //can eliminate null by filter method but requirement is to be done with map method
}

function PrintDeveloperbyForEach(){
arr.forEach(function(e){
        if(e.profession=="developer")
            console.log(e)
     } )
} 

function addData(){
    arr.push({id:4,name:"susan",age:"20",profession:"intern"} )
    console.log(arr)
} 
function removeAdmin(){
    arr.splice(2,1)
    console.log(arr)
}
function ConcatinateArray(){
let arr2=[{id:5,name:"Govi",age:"23",profession:"senior-developer"},{id:6, name:"vidhya",age:"23", profession:"junior-developer"},{id:7, name:"Gokul", age:"15",profession:"intern"}]
let fin=arr.concat(arr2)
console.log(fin)
}


PrintDeveloperbyMap()
PrintDeveloperbyForEach()
addData()
removeAdmin()
ConcatinateArray() 