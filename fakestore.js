let screen = document.getElementById("screen")
let input = document.getElementById("search")
let show = document.getElementById("show")
let show1 = document.getElementById("show1")
let index = 1
    // let addminus = document.getElementById("addminus")
    // let addcart = document.getElementById("addcart")
    document.getElementById("addminus").style.display = "none"
    function addcart() {
        document.getElementById("addminus").style.display = "block"
        document.getElementById("addcart").style.display = "none"
    }
    function increase() {
        if (index == 1) {
            show1.innerHTML ++ 
        }
    }
    function decrease() {
        if (index == 1) {
            show1.innerHTML --
        }
    }
    // <h3>${element.id}</h3>
    function consume() {
    fetch("https://fakestoreapi.com/products").then((dan)=> dan.json()).then((res)=>{
    console.log(res);
    res.forEach((element, index) => {
        let title = element.title;
        let description = element.description;
        let image = element.image;
        console.log(title);
        screen.innerHTML +=`
        <div id="smalldiv" class="text-primary bg-basic border rounded shadow my-2">
        <img src="${image}" alt="">
        <h3>${title.length > 18 ? title.substring(0, 18).concat('...'): title}</h3>
        <h5>${element.category}</h1>
        <h6>${description.length > 18 ? title.substring(0, 18).concat('...more'): description}}}</h5>
        <h6>$${element.price}</h3>
        <h6>⭐⭐⭐${element.rating.rate}</h6>
        <h6>(${element.rating.count})</h6>
        
        </div>
            `
    });
})
}
consume()
// for seacrh button
// let allproduct = fetch("https://fakestoreapi.com/products")
//     let array = ["await allproduct.json()"]
    
// function search() {
//     let result = array.filter((product)=> product == input.value)
//         if (input.value ==="") {
//             screen.innerHTML = ""
//         } else if (result != "") {
//            screen.innerHTML = "" 
//            result.map(function (element) {
//             screen.innerHTML += "<h1>" + element + "</h1>"
//            })
//         } else {
//           screen.innerHTML = "NO RECORD FOUND"  
//         }
// }