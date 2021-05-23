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


// Cách làm nhanh của form 
let form = document.getElementById("info")

form.addEventListener("submit", (e)=> {
    // e.stopPropagation()
    e.preventDefault()
    console.log(form.username.value)
    console.log(form.psw.value)

})