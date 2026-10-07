
// Get the elements we need from the HTML

const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutButton = document.getElementById("checkout");
const shopNowButton = document.getElementById("shop-now");


// This array will contain the products in the cart

let cart = [];


// Get all Add to Cart buttons

const addToCartButtons = document.querySelectorAll(".add-to-cart");


// Add click event to every Add to Cart button

addToCartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const product = button.parentElement;

        const productName = product.querySelector("h3").textContent;
        const productPrice = product.querySelector(".price").textContent;

        const price = Number(
            productPrice.replace("₦", "").replace(",", "")
        );


        // Check if the product is already in the cart

        const existingProduct = cart.find(function(item) {
            return item.name === productName;
        });


        if (existingProduct) {

            existingProduct.quantity++;

        } else {

            cart.push({
                name: productName,
                price: price,
                quantity: 1
            });

        }


        updateCart();

    });

});


// Update the shopping cart

function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;
    let numberOfItems = 0;


    // Check if the cart is empty

    if (cart.length === 0) {

        cartItems.innerHTML = "Your cart is empty.";

    }


    cart.forEach(function(item, index) {

        const itemTotal = item.price * item.quantity;

        total += itemTotal;

        numberOfItems += item.quantity;


        const cartItem = document.createElement("div");

        cartItem.innerHTML = `
            <div class="cart-item">

                <h3>${item.name}</h3>

                <p>₦${item.price.toLocaleString()}</p>

                <button onclick="decreaseQuantity(${index})">
                    -
                </button>

                <span>${item.quantity}</span>

                <button onclick="increaseQuantity(${index})">
                    +
                </button>

                <button onclick="removeItem(${index})">
                    Remove
                </button>

            </div>
        `;


        cartItems.appendChild(cartItem);

    });


    // Update cart number

    cartCount.textContent = numberOfItems;


    // Update total price

    cartTotal.textContent = total.toLocaleString();

}


// Increase product quantity

function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();

}


// Decrease product quantity

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    updateCart();

}


// Remove product from cart

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


// Checkout button

checkoutButton.addEventListener("click", function() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

    } else {

        alert("Thank you for your purchase!");

        cart = [];

        updateCart();

    }

});


// Shop Now button

shopNowButton.addEventListener("click", function() {

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

});

function searchItems() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(function(product) {
        let name = product.querySelector("h3").textContent.toLowerCase();

        if (name.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

