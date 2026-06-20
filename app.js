const products = [
{
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
},
{
    id: 2,
    name: "Mouse",
    price: 500,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400"
},
{
    id: 3,
    name: "Keyboard",
    price: 1000,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400"
}
];

let cart = [];

const productsDiv = document.getElementById("products");
const cartDiv = document.getElementById("cart");
const totalSpan = document.getElementById("total");

function displayProducts() {

    productsDiv.innerHTML = "";

    products.forEach(product => {

        productsDiv.innerHTML += `
        <div class="card">
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>
        </div>
        `;

    });

}

function addToCart(id) {

    const product = products.find(
        p => p.id === id
    );

    cart.push(product);

    displayCart();

}

function displayCart() {

    cartDiv.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        cartDiv.innerHTML += `
        <p>
            ${item.name} - ₹${item.price}
            <button onclick="removeItem(${index})">
                Remove
            </button>
        </p>
        `;

    });

    totalSpan.innerText = total;

}

function removeItem(index) {

    cart.splice(index, 1);

    displayCart();

}

displayProducts();
function placeOrder(){

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    if(cart.length === 0){
        alert("Cart is Empty");
        return;
    }

    if(name === "" || phone === "" || address === ""){
        alert("Please Fill All Fields");
        return;
    }

    document.getElementById("message").innerText =
    "Order Placed Successfully!";

}
