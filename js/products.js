
const productData = [
    {
        
        "name":"Plain Tshirt",
        "description": "Plain Brown T-Shirt",
        "img": "./images/product2.jpg",
        "color":"Brown",
        "price": "300"
    }, 
    
    { 
    
        "name": "Plain Tshirt", 
        "description": "Basic Crop Top",
        "img": "./images/product3.jpg",
        "color": "White",
        "price": "300" 
    
    }, 
    
    { 

        "name": "Pullover", 
        "description": "Gray Pullover",
        "img": "./images/product4.jpg",
        "color": "Gray",
        "price": "290"

    },

    {

        "name": "Pullover",
        "description": "Gray Pullover",
        "img": "./images/product1.jpg",
        "color": "Red",
        "price": "190"

    },

    {

        "name": "Dress",
        "description": "Floral Dress",
        "img": "./images/dress.jpg",
        "color": "Blue",
        "price": "190"

    },

    {

        "name": "Plain Tshirt",
        "description": "Black Plain",
        "img": "./images/product6.jpg",
        "color": "Black",
        "price": "280"
        
    }


]

function itemsStyle(prchs) {
    return `
    <div class="product-item">
        <img class="product-image" src="${prchs.img}">
        <h2 class="product-name">${prchs.name}
            <span class="product-color">${prchs.color}</span>
        </h2>
        <h1 class="product-price">${prchs.price}</h1>
        <button class="btn button-add black" type='button'>Add to Cart</button>
    </div>
    `;
}
document.getElementById("products").innerHTML = `
<h1 class="product-title-list">Shop Now!</h1>
${productData.map(itemsStyle).join("")}
`;

var modal = document.getElementById("cart");
var btn = document.getElementById("bought");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){modal.style.display="flex";}
span.onclick = function(){modal.style.display="none";}
window.onclick = function(event){
    if(event.target === modal){
        modal.style.display = "none";
    }
}