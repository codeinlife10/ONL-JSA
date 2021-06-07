// let name = ['A',5,'B']

// Viết thông tin của người dùng đầu tiên 
// let user_1 = "A"
// let pass_1 = "123456"

// Viết thông tin của người dùng thứ hai 
// Số lượng tên biến từ 4 -> 2
// let name = [
//     {
//         username: "A",
//         password: "123456"
//     },
//     {
//         username: "B",
//         password: "qwerty"
//     },
//     {
//         username: "C",
//         password: "archyiq"
//     }
// ]



// for(let i = 0; i < 3; i++) {
//     console.log(name[i])
// }

//Bình thường làm 
// let email = document.getElementById("email")
// let password = document.getElementById("password")
// let btn = document.getElementById("btn")

// btn.addEventListener("submit",()=> {
//     console.log(email.innerText)
//     console.log(password.innerText)
// })]









//database
var usersData = [
    {
        username : "John",
        Email : "John123@gmail.com",
        password : "John1234",
        avatar : "John Doe.png"
    },
    {
        username : "Mark",
        Email : "Mark234@gmail.com",
        password : "Markiplier123",
        avatar : "Markiplier2017.jpg"
    },
    {
        username: "Joe",
        Email : "Joe345@gmail.com",
        password : "Joey009",
        avatar : "Joey avatar.jpg"
    }
]
// Cách làm nhanh của form 
let form = document.getElementById("info")
let error = document.getElementById("error")

form.addEventListener("submit", (e)=> {
    e.preventDefault()

    for (let i = 0; i < usersData.length; i++) {

        if(usersData[i].username == form.username.value) {
            if(usersData[i].password == form.psw.value) {
                window.location.replace("shopping.html")
                break
            }else{
                error.innerText = "Bạn nhập sai username hoặc password"
            } 
        }else {
            error.innerText = "Bạn nhập sai username hoặc password"
        }
    }
})

// src ảnh 
// Tên sản phẩm
// Giá sản phẩm 

//database => Chứa dữ liệu về các sản phẩm của website 
