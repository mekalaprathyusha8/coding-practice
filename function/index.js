async function addproducts(){   
    try {
    let data={"phone":"samsung","color":"skyblue","price":"25000"}     
    let url="http://localhost:3000/users"
    let response = await fetch(url,{
        method:"POST",
        body:JSON.stringify(data)
    })
    let result=await response.json()
    console.log(result);
}catch(error){
        console.log(error);
    }
}
addproducts()

 async function displayproducts(){
    try {
    let url="http://localhost:3000/products"
    let response = await fetch(url,{
        method:"GET",
    })
    let result=await response.json()
    console.log(result);
}catch(error){
        console.log(error);
    }
}
displayproducts()

async function modifyproduct(){
    try {
    let body={"phone":"oppo","color":"black"}       
    let url="http://localhost:3000/products/8d78"
    let response = await fetch(url,{
        method:"PUT",
        body:JSON.stringify(body)
    })
    let result=await response.json()
    console.log(result);
}catch(error){
        console.log(error);
    }   
}
modifyproduct()

async function replaceproduct(){            
    try {
    let body={"phone":"iphone","color":"black"}       
    let url="http://localhost:3000/products/8d78"
    let response = await fetch(url,{
        method:"PATCH",
        body:JSON.stringify(body)
    })
    let result=await response.json()
    console.log(result);
}catch(error){
        console.log(error);
    }   
}
replaceproduct()

async function deleteproduct(){     
    try {      
    let url="http://localhost:3000/products/5e85"
    let response = await fetch(url,{
        method:"DELETE",
    })
    let result=await response.json()
    console.log(result);
}
catch(error){
        console.log(error);
    }   
}
deleteproduct()

