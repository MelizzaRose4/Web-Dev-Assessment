if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

const cartData = [];
function ready() {
    const addToCartButtons = document.getElementsByClassName('button-add');
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }
    const purchaseButton = document.getElementsByClassName('button-purchase');
    var pBtn = purchaseButton[0].addEventListener('click', purchaseButtonClicked);
    
}
function purchaseButtonClicked(){
    alert('All done! Thank you.')
    var cartItems = document.getElementsByClassName('cart-list')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    document.querySelector('.modal').style.display="none";
}
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
}
function addToCartClicked(event) {
    var button = event.target
    var productItem = button.parentElement;
    var itemName = productItem.getElementsByClassName('product-name')[0].innerText
    var itemColor = productItem.getElementsByClassName('product-color')[0].innerText
    var itemPrice = productItem.getElementsByClassName('product-price')[0].innerText
    var imageSrc = productItem.getElementsByClassName('product-image')[0].src
    itemName = itemName.replace(itemColor, '');
    cartData.push({
        "name": itemName,
        "color": itemColor,
        "img": imageSrc,
        "price": itemPrice
    });
    document.getElementById("cart-list").innerHTML = `
    ${cartData.map(cartTemplate).join("")}
    `;
    
    alert(`"${itemName}-${itemColor}" Added to cart.`);
    
    var removeCartItemButtons = document.getElementsByClassName('button-remove')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    
}


function cartTemplate(prod) {
    return `
    <div class="cart-item">
        <img class="cart-image" src="${prod.img}">
        <h2 class="cart-name">${prod.name}
            <span class="cart-color">${prod.color}</span>
        </h2>
        <h1 class="cart-price">${prod.price}</h1>
        <button class="btn button-remove black" type='button'>Delete</button>
    </div>
    `;
}

function purchaseClicked(){
    alert("Thank you for purchasing!");
    var cartItems = document.getElementsById('cart-list');
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
}