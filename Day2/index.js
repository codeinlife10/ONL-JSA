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

let obj = {
    name: "Long",
    getName: ()=> {
        alert("Hello! My name is" + this.name)
    }
}

obj.getName()