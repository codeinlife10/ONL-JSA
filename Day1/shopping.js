let container = document.getElementById("container");
let cartGroup = document.getElementById("cart-group")
let quantity = document.getElementById("quantity")
let count = 0 


fetch("https://60bc32b7b8ab37001759ee4d.mockapi.io/shopping")
.then(data => data.json())
.then(listItem => {
    // console.log(listItem)  debug
    for (let i = 0; i <listItem.length; i++) {
        let src = listItem[i].src
        let name = listItem[i].name
        let price = listItem[i].price    
        let html = `
    <div id="${i}" class="item">
        <img src="${src}" alt="">
        <div class="describe">${name}</div>
        <div class="price">${price}</div>
    </div>
        `
        container.innerHTML += html
    }

    return listItem
})
.then((listItem) => {
    // Xử lí khi người dùng đăng nhập vào lần sau để mua hàng
    // if(localStorage.productList != null) {
    //     localStorage.productList = ""
    // }
    // Lấy danh sách các sản phẩm và gán sự kiện để biết sản phẩm nào được bấm
    if(sessionStorage.count == null) {
        quantity.innerText = 0
    }else {
        count = sessionStorage.getItem("count")
        quantity.innerText = count
    }
   
    let product = document.getElementsByClassName("item")
    let productList = ""
    for(let el of product) {
       el.addEventListener("click", () =>{
        count++
        quantity.innerText = count
        productList += el.id + "-"
        sessionStorage.setItem("count",count)
        sessionStorage.setItem("productList",productList)
       })
    }
    sessionStorage.setItem("count",count)
    // Chúng ta có listItem và danh sách index 
    cartGroup.addEventListener("click",()=> {
        container.innerHTML = ""
        let indexList = sessionStorage.getItem("productList").split("-").filter(e => e != "").map(e => parseInt(e))
        // [1,4,7,9,3]
        for (el of indexList) {
            let src = listItem[el].src
            let name = listItem[el].name
            let price = listItem[el].price  
            let html = `
            <div id="${el}" class="item">
                <img src="${src}" alt="">
                <div class="describe">${name}</div>
                <div class="price">${price}</div>
            </div>
                `
            container.innerHTML += html
        }
    })

})


/*
DOM 
*/

// let parent = document.getElementById("parent")
// for (let i = 0; i < parent.children.length;i++) {
//     parent.children[i].addEventListener("click", (e)=> {
        
//     })
//     console.log(parent.children[i])
// }




// async function callAPI() {
//     let data = await fetch("https://60bc32b7b8ab37001759ee4d.mockapi.io/shopping")
//     data = await data.json()
//     console.log(data)
// }

// callAPI()






// asynchonous // Bất đồng bộ => Đồng bộ nhưng vẫn giữ dc cái none-blocking trong js 

// C1 : async await
// C2 : then 

// call url => lấy dữ liệu về
// Đường truyền mạng có thể nhanh hoặc chậm 

// setTimeout(()=>{
//     console.log("Hello")
// },3000)

// console.log("Hi")

// localStorage và sessionStorage

// sessionStorage.setItem("name","Long") // Thêm 1 cặp key-value để lưu trữ
// localStorage.setItem("name","Long") 
// let name = localStorage.getItem("name")
// console.log(name)
// localStorage.name = "Tuan-Tu" // Mất thời gian để update => Bất đồng bộ 
// console.log(name)
// delete localStorage.name

// sessionStorage.getItem()

// 1. Học về html css => Nâng cao animation (Có sử dụng js khá nhiều) 

// 2. Ôn tập lại về js những cái thắc mắc + chưa hiểu kĩ => Giảng dạy + Giao bài tập  