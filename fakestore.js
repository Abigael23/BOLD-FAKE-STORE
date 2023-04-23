let screen = document.getElementById("screen")
let input = document.getElementById("search")
let show = document.getElementById("show")
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
            show.innerHTML ++ 
        }
    }
    function decrease() {
        if (index == 1) {
            show.innerHTML --
        }
    }
    function consume() {
    fetch("https://fakestoreapi.com/products").then((dan)=> dan.json()).then((res)=>{
    console.log(res);
    res.forEach((element, index) => {
        let title = element.title;
        let description = element.description;
        let image = element.image;
        console.log(title);
        screen.innerHTML +=`
        <div class="w-50 text-primary bg-basic border rounded shadow mx-auto my-5">
        <h3>${element.id}</h3>
        <h1>${element.category}</h1>
        <h5>${description}}</h5>
        <div>${image}</div>
        <h3>${element.price}</h3>
        <h6>${Object.values(element.rating)}</h6>
        <h6>${title}</h6>
        </div>
            `
    });
})
}
consume()
// for seacrh button
let allproduct = fetch("https://fakestoreapi.com/products")
    let array = ["await allproduct.json()"]
    
function search() {
    let result = array.filter((product)=> product == input.value)
        if (input.value ==="") {
            screen.innerHTML = ""
        } else if (result != "") {
           screen.innerHTML = "" 
           result.map(function (element) {
            screen.innerHTML += "<h1>" + element + "</h1>"
           })
        } else {
          screen.innerHTML = "NO RECORD FOUND"  
        }
}