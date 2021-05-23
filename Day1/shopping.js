// function edit(parameter1,parameter2) {
//     console.log("Button Clicked")
// }

let btn = document.getElementById("btn")


// ()=> {} // callback function
btn.addEventListener("click", ()=> {
    // Chỉ cần thay đổi hành động của chúng ta 
    console.log(btn.innerText)
})