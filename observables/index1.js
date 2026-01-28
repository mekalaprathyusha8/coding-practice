//import { Observable } from "rxjs";
// let user={
//     "name":"sunny",
//     "age":24,
//     "city":"hyderabad"
//  } 
// let p=new Promise((resolve,reject)=>{
//     if(user){
//         resolve(user);
//     }   
//     else{
//         reject("error");
//     }
// });
// p.then(res=>{
//     console.log(user);
// }).catch(err=>{
//     console.log(err);
// });

// let obj=new Observable((subscriber)=>
//     {
//         try{
//             if(user){
//                 subscriber.next(user);
//             }else{
//                 subscriber.error("error");
//             }
//         }finally{
//             subscriber.complete();
//         }
//     });
    //anaymous function
// obj.subscribe({
//     next:function(res){
//         console.log(res);
//     },error(err){
//         console.log(err);
//     },
//     complete:function(){
//         console.log("completed");
//     }
// })

//lambda expression 
// obj.subscribe({
//     next:(res)=>{
//         console.log(res);
//     },
//     error:(err)=>{
//         console.log(err);
//     },
//     complete:()=>{
//         console.log("completed");
//     }
// });

// obj.subscribe(function(res){
//     console.log(res);
// });
// obj.subscribe(res=>{
//     console.log(res);
// })

// let s=setInterval(function(){
//     console.log("hello");
// },1000);

// let timeout=setTimeout(function(){
//     clearInterval(s);
//     console.log("hi");
// },3000);
// clearTimeout(timeout);

// let obj=new Observable(subscriber=>{
//     let a=0
//     let myinterval=setInterval(()=>{
//         subscriber.next("hello"+ a++);
//     },1000);
//     setTimeout(()=>{
//         clearInterval(myinterval);
//     },10000);
//     function unsubscribe(){
//         clearInterval(myinterval);
//     }
//     return unsubscribe;
// })
 
// let sub = obj.subscribe({
//     next:(res)=>{
//     console.log(res);
// },error:(err)=>{
//     console.log(err);
// },complete:()=>{
//     console.log("completed");
// }
// });

// setTimeout(()=>{
//     sub.unsubscribe();
//     console.log("unsubscribed");
// },5000);

import axios from "axios";
import{Observable,from} from "rxjs";
// let user={
//     "name":"sunny",
//     "age":24,
//     "city":"hyderabad"
// }

// let p=new Promise((resolve,reject)=>{
//     if(user){
//         resolve(user);
//     }   
//     else{
//         reject("error");
//     }
// })
// let obj=from(p);
// obj.subscribe({
//     next:res=>{
//         console.log(res);
//     },
//     error:err=>{
//         console.log(err);
//     },
//     complete:()=>{
//         console.log("completed");
//     }
// })

// backend request

let url="http://localhost:3000/users"

let a = axios(url)
// console.log(a)
// a.then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

let obj = from(a)

obj.subscribe({
    next:(res)=>{
        console.log(res.data);
    },
    error: err=>{
        console.log(err);
        
    },
    complete:()=>{
        console.log("completed");
        
    }
})