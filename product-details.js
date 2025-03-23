
document.addEventListener("DOMContentLoaded", function () {
    console.log("Product details script loaded."); // Debugging log

    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (!productId) {
        console.error("No product ID found in the URL.");
        return;
    }

    // Fetch products from localStorage or use the predefined list
    let products = JSON.parse(localStorage.getItem("products")) || [];

    // Find the product
    const product = products.find(p => p.id == productId);

    if (product) {
        // Populate product details
        const productDetails = document.getElementById("product-details");
        if (!productDetails) {
            console.error("Product details section not found.");
            return;
        }

        productDetails.innerHTML = `
            <img id="product-image" src="${product.image}" alt="${product.name}">
            <h2 id="product-name">${product.name}</h2>
            <p id="product-description">${product.description || "No description available."}</p>
            <p><strong>Brand:</strong> <span id="product-brand">${product.brand}</span></p>
            <p><strong>Category:</strong> <span id="product-category">${product.category}</span></p>
            <p><strong>Price:</strong> $<span id="product-price">${product.price}</span></p>
            <button id="add-to-cart">Add to Cart</button>
        `;

        console.log("Product details displayed:", product);

        // Wait for the button to be added to the DOM
        setTimeout(() => {
            const addToCartButton = document.getElementById("add-to-cart");

            if (!addToCartButton) {
                console.error("Add to Cart button not found.");
                return;
            }

            addToCartButton.addEventListener("click", function () {
                let cart = JSON.parse(localStorage.getItem("cart")) || [];

                // Check if product already exists in cart
                const existingItem = cart.find(item => item.id === product.id);
                if (existingItem) {
                    alert("This product is already in your cart.");
                } else {
                    cart.push(product);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    alert("Product added to cart!");
                    console.log("Cart updated:", cart);
                }
            });

            console.log("Add to Cart button event listener attached.");
        }, 500); // Delay to ensure the button is in the DOM

    } else {
        console.error("Product not found.");
        document.getElementById("product-details").innerHTML = "<p>Product not found.</p>";
    }
});

document.querySelectorAll(".thumb").forEach(img => {
    img.addEventListener("click", function() {
        document.getElementById("main-image").src = this.src;
    });
});

// Quantity Updater
function updateQuantity(change) {
    let quantityInput = document.getElementById("quantity");
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity + change >= 1) {
        quantityInput.value = currentQuantity + change;
    }
}

// Add to Cart Function
document.getElementById("add-to-cart").addEventListener("click", function () {
    alert("Product added to cart!");
});

// Buy Now Function
document.getElementById("buy-now").addEventListener("click", function () {
    alert("Redirecting to checkout...");
});
document.querySelectorAll(".thumb").forEach(img => {
    img.addEventListener("click", function() {
        document.getElementById("main-image").src = this.src;
    });
});

// Quantity Updater
function updateQuantity(change) {
    let quantityInput = document.getElementById("quantity");
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity + change >= 1) {
        quantityInput.value = currentQuantity + change;
    }
}

// Add to Cart Function
document.getElementById("add-to-cart").addEventListener("click", function () {
    alert("Product added to cart!");
});

// Buy Now Function
document.getElementById("buy-now").addEventListener("click", function () {
    alert("Redirecting to checkout...");
});


