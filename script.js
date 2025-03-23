const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
navLinks.classList.toggle('active');
});

const sections = document.querySelectorAll('.about-item');
let currentIndex = 0;

function showContent(index) {
// Hide all sections
sections.forEach((section) => {
section.style.display = 'none';
});

// Show the current section
sections[index].style.display = 'block';
}


const products = [
{
id: 1,
name: "Double Fuel Pump",
price: 500,
brand: "Shell",
category: "Pumps",
image: "double_pump.jpg",
description: "High-quality fuel pump ensures smooth fuel flow and engine performance."
},

{
id: 2, 
name: "Nozzle",
price: 14.50,
brand: "Mobil", 
category: "Filters",
image: "nozzle.webp",
description: "High Quality Fuel Dispenser Automatic 11a Opw Fuel Nozzle Oil Gun Refueling Nozzles"
},
{ 
    id: 3,
    name: "Preset Pad",
    price: 200,
    brand: "NGK", 
    category: "Ignition",
    image: "preset pad.avif"
},

{ 
    id: 4,
    name: "Meter",
    price: 12.08,
    brand: "NGK", 
    category: "Ignition",
    image: "flow_meter.avif",
    thumbnails: [
        "flow_meter2.avif",
        "flow_meter3.avif"
        ],
    
        shipping: "Ships within 7-14 days."
},

{ 
    id: 5,
    name: "Single Pump",
    price: 800,
    brand: "NGK", 
    category: "Ignition",
    image: "sig_pump.avif"
},

{
    id: 6, 
    name: "Inpeller",
    price:99.99,
    brand: "Mobil", 
    category: "Filters",
    image: "inpeller.webp",
    description: "High Quality Fuel Dispenser Automatic 11a Opw Fuel Nozzle Oil Gun Refueling Nozzles"
},

{
    id: 7, 
    name: "Lanfeng Fuel Dispenser Display Board",
    price:99.99,
    brand: "Mobil", 
    category: "Filters",
    description: "High Quality Fuel Dispenser Automatic 11a Opw Fuel Nozzle Oil Gun Refueling Nozzles",
    image: "display_board1.avif",
    thumbnails: [
    "display_board2.avif",
    "display_board3.avif"
],

shipping: "Ships within 7-14 days."

}, 

{
    id: 8, 
    name: "Lanfeng Fuel Dispenser LPG Mainboard Mother Board",
    price:180,
    brand: "Langeng", 
    category: "Filters",
    description: "High Quality Fuel Dispenser Automatic 11a Opw Fuel Nozzle Oil Gun Refueling Nozzles",
    image: "mother_board.avif",
    thumbnails: [
    "display_board2.avif",
    "display_board3.avif"
    ],

    shipping: "Ships within 7-14 days."

}, 
];




// Save updated product data to localStorage
localStorage.setItem("products", JSON.stringify(products));



function displayProducts(productList) {
const productContainer = document.getElementById("product-list");
if (!productContainer) return; // Prevent errors if element doesn't exist

productContainer.innerHTML = ""; // Clear previous products

productList.forEach(product => {
const productCard = document.createElement("div");
productCard.classList.add("product-card");
productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p><strong>Brand:</strong> ${product.brand}</p>
    <p><strong>Category:</strong> ${product.category}</p>
    <p class="price"><strong>Price:</strong> $${product.price}</p>
    <a href="product-details.html?id=${product.id}" class="view-details">View Details</a>
`;
productContainer.appendChild(productCard);
});
}

function filterProducts() {
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const brandSelect = document.getElementById("brand");
const priceInput = document.getElementById("price");

const searchQuery = searchInput ? searchInput.value.toLowerCase() : "";
const categoryFilter = categorySelect ? categorySelect.value : "";
const brandFilter = brandSelect ? brandSelect.value : "";
const maxPrice = priceInput ? priceInput.value : "";

const filteredProducts = products.filter(product => {
return (
    (searchQuery === "" || product.name.toLowerCase().includes(searchQuery)) &&
    (categoryFilter === "" || product.category === categoryFilter) &&
    (brandFilter === "" || product.brand === brandFilter) &&
    (maxPrice === "" || product.price <= parseInt(maxPrice))
);
});

displayProducts(filteredProducts);
}

document.addEventListener("DOMContentLoaded", () => {
// Attach event listeners if elements exist
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const brandSelect = document.getElementById("brand");
const priceInput = document.getElementById("price");
const searchButton = document.getElementById("searchButton");

if (searchInput) searchInput.addEventListener("input", filterProducts);
if (categorySelect) categorySelect.addEventListener("change", filterProducts);
if (brandSelect) brandSelect.addEventListener("change", filterProducts);
if (priceInput) priceInput.addEventListener("input", filterProducts);
if (searchButton) searchButton.addEventListener("click", filterProducts);

// Initial display of products only if on the main product listing page
if (document.getElementById("product-list")) {
displayProducts(products);
}
});
