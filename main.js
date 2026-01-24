// import axios from 'axios';
// axios("http://localhost:3000/users")
// .then(response=>{
//     console.log(response);
    
// }).catch(error=>{
//     console.log(error);
    
// })
// function addproducts(){
//     let data={"phone":"samsung","color":"skyblue","price":"25000"}
//     axios("http://localhost:3000/users",{
//         method:"POST",
//         data:JSON.stringify(data),
//         Headers:{
//             "content-type":"application/json"
//         }
//     }).then(response=>{
//          console.log(response);
         
//     }).catch(error=>{
//         console.log(error);
        
//     })
// }
// addproducts()

// function displayproducts(){
//     axios("http://localhost:3000/users",{
//         method:"GET",
//         Headers:{
//             "content-type":"application/json"
//         }
//     }).then(response=>{
//          console.log(response);
         
//     }).catch(error=>{
//         console.log(error);
        
//     })
// }
// displayproducts()



// function modifyproduct(){
//     let body={"phone":"oppo","color":"black"}
//     axios("http://localhost:3000/users/8d78",{
//         method:"PUT",
//         data:JSON.stringify(body),
//         Headers:{
//             "content-type":"application/json"
//         }
//     }).then(response=>{
//          console.log(response);
         
//     }).catch(err=>{
//         console.log(err);
        
//     })
// }

// modifyproduct()

// function replaceproduct(){
//     let body={"phone":"iphone","color":"black"}
//     axios("http://localhost:3000/users/8d78",{
//         method:"PATCH",
//         data:JSON.stringify(body),
//         Headers:{
//             "content-type":"application/json"
//         }
//     }).then(response=>{
//          console.log(response);
         
//     }).catch(err=>{
//         console.log(err);
        
//     })
// }
// replaceproduct()

// function deleteproduct(){
//     axios("http://localhost:3000/users/8d78 ",{
//         method:"DELETE",
//         Headers:{
//             "content-type":"application/json"
//         }
//     }).then(response=>{
//          console.log(response);
         
//     }).catch(err=>{
//         console.log(err);
        
//     })
// }
// deleteproduct()

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
