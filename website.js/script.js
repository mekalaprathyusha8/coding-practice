let url="http://localhost:3000/users"
let formstate = "Add";
function adduser(event){
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let user = {
        "name": name,
        "email": email,
        "phone": phone
    }
    if(formstate==="Add")
        {
            axios(url,
                {
                    method: 'post',
                    data: JSON.stringify(user)
                }).then((res)=>
                    {
                        console.log(res);
                        document.getElementById("message").innerText="User added successfully"
                        document.getElementById('name').value="";
                        document.getElementById('email').value="";
                        document.getElementById('phone').value="";
                        getUsers();
                    }).catch((err)=>{
                        console.log(err);
        document.getElementById("message").innerText="Error adding user"
    });
    }else if(formstate==="Edit")
        {
            let userId = document.getElementById('userId').value;
            let url2=url+"/"+userId;
            axios(url2,
                {
                    method: 'PATCH',
                    data: JSON.stringify(user)
                }).then((res)=>
                    {       
                        getUsers();
                        console.log(res);
                    }).catch((err)=>{
                        console.log(err);
        });
        }
}   
function getUsers(){
    if(formstate==="Add"){
        document.getElementById('formTitle').innerText="Add User";
        document.getElementById('submitBtn').value="Add User";
    }
    axios.get(url)
    .then((res)=>{  
        console.log(res.data);
        let usersHTML="";
        for(let user of res.data){
            usersHTML = usersHTML + `<tr>
            <td>${user['id']}</td>
            <td>${user['name']}</td>
            <td>${user['email']}</td>
            <td>${user['phone']}</td>
            <td> <button onclick="deleteUser('${user['id']}')" class="btn btn-danger w-100">delete</button></td>
            <td> <button onclick="editUser('${user['id']}')" class="btn btn-success w-100">Edit</button></td>
            </tr>`;
        }
        document.getElementById("Users").innerHTML=usersHTML;
        console.log(usersHTML);
    })
    .catch((err)=>{
        console.log(err);
    });
}

function deleteUser(userId){
    let url2=url+"/"+userId;
    // console.log("delete user"+userId);
    console.log(url2);
    axios(url2,{
        method: 'delete'
    }).then((res)=>{
        console.log(res);
        document.getElementById("message").innerText="User deleted successfully"
        getUsers();
    }).catch((err)=>{
        console.log(err);
        document.getElementById("message").innerText="Error deleting user"
    });
}

function editUser(userId){
    let url2=url+"/"+userId;
    axios(url2,{
        method: 'get'

    }).then((res)=>{
        console.log(res.data);
        document.getElementById('userId').value=res.data['id'];
        document.getElementById('name').value=res.data['name'];
        document.getElementById('email').value=res.data['email'];
        document.getElementById('phone').value=res.data['phone'];
        document.getElementById('formTitle').innerText="Edit User";
        document.getElementById('submitBtn').value="Save User";
        formstate = "Edit";
    }).catch((err)=>{
        console.log(err);
    });
}