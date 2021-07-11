// function changeEnough(arr,money) {
//     let quarter = arr[0]
//     let dime = arr[1]
//     let nickel = arr[2]
//     let penny = arr[3] 
//     let sum = 0.25*quarter + 0.1*dime + 0.05*nickel + 0.01*penny
//     console.log(sum)
//     if (sum < money){
//         return false
//     }else {
// 	    while(money != 0) {
// 		    if(money >= 0.25 && quarter > 0) {
// 			    money -= 0.25
// 			    quarter --
// 		    }else if(money >= 0.1 && dime > 0) {
// 			    money -= 0.1
// 			    dime--
// 		    }else if(money >= 0.05 && nickel > 0) {
// 			    money -= 0.05
// 			    nickel-- 
//                 console.log(nickel)
// 		    }else if(money >= 0.01 && penny > 0) {
// 			    money -= 0.01
// 			    penny-- 
// 		    }else {
// 			    return false 
// 		    }
// 	    }
//         return true
//     }   
// }

// let obj = {
//     name: "Long",
//     getName: function(){
//         alert("Hello! My name is" + this.name)
//     }
// }

// obj.getName()


// block 
// {
//     let a = 5
// }
// console.log(a)


// let a = document.getElementById("status")

// // Callback chỉ chạy khi mà cái hành động trc xảy ra 
// a.addEventListener('click',()=> {

// })


// Đồng bộ/ bất đồng bộ 
// Promise 
// .then ()
// async/await

// let promise = new Promise()


// Lên ý tưởng cho sản phẩm 
// Dữ liệu 
// https://60bc32b7b8ab37001759ee4d.mockapi.io/shopping
// let data = fetch("https://60bc32b7b8ab37001759ee4d.mockapi.io/shopping")
// console.log(data)
// data.then((step1) => step1.json()) // => return 
// .then((step2) => {
//     console.log(step2)
// })

// async function getData() {
//     let data = await fetch("https://60bc32b7b8ab37001759ee4d.mockapi.io/shopping")
//     let step1 = await data.json()
//     let step2 = step1
//     console.log(step2)
// }

// getData()

/*
// firebase lưu trữ dữ liệu, signup, login 
// Kĩ năng giải quyết vấn đề 
// Giao diện: signup-login 
Đến 10h40 => hướng dẫn cấu hình firebase
login.html => Giao diện login
index.html => Giao diện signup => deploy

Đưa về ý tưởng về trang web: 
_ Tìm ra vấn đề mình đang gặp phải 
_ Đưa ra hướng giải quyết 
_ Cho anh cái nhìn tổng quát nhất về trang chính => Khi chúng ta đăng nhập thành công
_ Lưu dữ liệu chat => Show ra lịch sử chat 
_ Chat app => gửi 1 tin nhắn => reload trang => db firebase 
*/

