let container = document.getElementById("container");


fetch("https://60bc32b7b8ab37001759ee4d.mockapi.io/shopping")
.then(data => data.json())
.then(listItem => {
    
    for (let i = 0; i <listItem.length; i++) {
        let src = listItem[i].src
        let name = listItem[i].name
        let price = listItem[i].price    
        let html = `
    <div class="item">
        <img src="${src}" alt="">
        <div class="describe">${name}</div>
        <div class="price">${price}</div>
    </div>
        `
        container.innerHTML += html
    }
}) 


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