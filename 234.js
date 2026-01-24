 import axios from 'axios';
async function displayproducts(){
    try {
    let url="http://localhost:3000/products"
    let response = await axios(url,{
        method:"GET"
    })
    console.log(response.data);
}catch(error){
        console.log(error);
    }
}
displayproducts()

// async function addproducts(){
//     try {
//     let data={"phone":"vivo","color":"blue"}            
//     let url="http://localhost:3000/products"
//     let response = await axios(url,{
//         method:"POST",
//         data:data
//     })
//     console.log(response.data);
// }catch(error){
//         console.log(error);
//     }       
// }
// addproducts()

// async function modifyproduct(){
//     try {
//     let body={"phone":"oppo","color":"black"}
//     let url="http://localhost:3000/products/8d78"
//     let response = await axios(url,{
//         method:"DELETE"     
//     })
//     console.log(response.data); 
// }catch(error){
//         console.log(error);
//     }   
// }
// modifyproduct()

async function deleteproduct(){     
    try {
    let url="http://localhost:3000/products/p101"
    let response = await axios(url,{
        method:"DELETE"     
    })
    console.log(response.data); 
}catch(error){
        console.log(error);
    }
}
deleteproduct()

async function replaceproducts(){
    try {
    let body={"phone":"iphone","color":"black"}       
    let url="http://localhost:3000/products/p102"
    let response = await axios(url,{
        method:"PATCH",
        data:body
    })
    console.log(response.data);
}catch(error){
        console.log(error);
    }   
}
replaceproducts()