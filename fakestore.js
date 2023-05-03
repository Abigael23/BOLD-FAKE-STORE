let screen = document.getElementById("screen")
let input = document.getElementById("search")
let show = document.getElementById("show")
let show1 = document.getElementById("show1")
let index = 1
let addminus = document.getElementById("addminus")
let addcart = document.getElementById("addcart")
let itemModalParent = document.getElementById("showItemsModal");
let itemModal = document.getElementById("itemsModal");

itemModalParent.style.visibility = "hidden";

let myCart = JSON.parse(localStorage.getItem("cart")) || [];
let allItems = JSON.parse(localStorage.getItem("items")) || [];
console.log(allItems);
function consume() {
    fetch("https://fakestoreapi.com/products").then((dan) => dan.json()).then((res) => {
        console.log(res);
        localStorage.setItem("items", JSON.stringify(res));
    })
}

function showAllItems() {
    allItems.forEach((element, index) => {
        let carted = allItems.some(ele => ele.id == element.id);
        let title = element.title;
        let description = element.description;
        let image = element.image;
        console.log(title);
        screen.innerHTML += `
    <div id="smalldiv" class="text-primary bg-basic border rounded shadow my-2" onclick="showItemDetails(${element.id})">
        <div class="text-center"><img src="${image}" alt=""></div>
        <div class="text">
            <h3>${title.length > 18 ? title.substring(0, 18).concat('...') : title}</h3>
            <h5>${element.category}</h5>
            <h6>${description.length > 18 ? title.substring(0, 18).concat('...more') : description}}}</h6>
            <h6>$${element.price}</h6>
            <h6>⭐⭐⭐${element.rating.rate}</h6>
            <h6>(${element.rating.count})</h6>
        </div>
        <div class="w-75">
            <div id="addcart">
                <button onclick="addCart(event, ${element.id})" class="btn btn-warning text-white">
                    <i class="icofont-cart"></i>${carted ? "add to cart " : "remove from cart"}
                </button>
            </div>
        </div>
    </div>
        `
    });
}

showAllItems();

function addCart(ev, id) {
    let found = allItems.find(item => item.id == id);
    console.log(found);

    let carted = myCart.some(find => find.id == found.id);

    if (carted) {
        ev.target.innerHTML = "Add to cart";
        let myIndex = myCart.indexOf(found);
        myCart.splice(myIndex, 1);
        localStorage.setItem("cart", JSON.stringify(myCart));
    } else {
        ev.target.innerHTML = "remove from cart";
        myCart.push(found)
        localStorage.setItem("cart", JSON.stringify(myCart));
    }
}

// function cartCount() {
//     document.getElementById("cart-count").innerHTML = myCart.length;
// }
// cartCount();

function showItemDetails(id) {
    itemModalParent.style.visibility = "visible";
    let found = allItems.find(item => item.id == id);
    console.log(found);
    itemModal.innerHTML = `
    <div>
    <img src="${found.image}"/>
    </div>
    <div class="text">
            <h3>${found.title}</h3>
            <h5>${found.category}</h5>
            <h6>${found.description}</h6>
            <h6>$${found.price}</h6>
            <h6>⭐⭐⭐${found.rating.rate}</h6>
            <h6>(${found.rating.count})</h6>
        </div>
        <div class="w-75">
            <div id="addcart">
                <button onclick="addCart(event, ${element.id})" class="btn btn-warning text-white">
                    <i class="icofont-cart"></i>${carted ? "add to cart " : "remove from cart"}
                </button>
            </div>
        </div>
    <div>
    `
}