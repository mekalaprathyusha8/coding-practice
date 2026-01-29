let url="http://localhost:3000/users"
function adduser(event){
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let user = {
        "name": name,
        "email": email,
        "phone": phone
    };
    console.log(user);
    axios(url,{
        method: 'post',
        data: JSON.stringify(user)
    }).then((res)=>{
        console.log(res);
        document.getElementById("message").innerText="User added successfully"
    }).catch((err)=>{
        console.log(err);
        document.getElementById("message").innerText="Error adding user"
    });
    // console.log(name);
    // console.log(email);
    // console.log(phone);

    //get form details
    // store in axios
}
function getUsers(){
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
            <td>delete</td>
            <td>Edit</td>
            </tr>`;
        }
        document.getElementById("Users").innerHTML=usersHTML;
        console.log(usersHTML);
    })
    .catch((err)=>{
        console.log(err);
    });
}

