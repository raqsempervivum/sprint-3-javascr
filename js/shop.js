// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    /* the following method also worked: 
    for (let i=0; i <products.length; i++) {
        if (products[i].id === id) {
            cartList.push(products[i])
        }
        console.log(cart)
    }*/
    // 2. Add found product to the cartList array
    cartList.push(products.find(products => products.id === id))
    console.log(cartList)

}  


// Exercise 2
function cleanCart() {
    cartList.length= 0
    cart.length= 0
    total = 0 
    document.getElementById('cart_list').innerHTML = "";

    document.getElementById('total_price').innerHTML = 0

}
// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    for (let i=0; i < cartList.length; i++) {
        total += cartList[i].price
    }    
    console.log(total.toFixed(2))
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    cartList.forEach(function (item) {

        let found = cart.findIndex(products => products.id === item.id)
            if (found == -1) {  
                cart.push({ ...item, quantity: 1 });
            } else { 
                cart[found].quantity++

            } 
        console.log(cart)
    })
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
        /* this isn't necessary: first, we let go of the products without any promotions so as it doesn't read the whole code
        if (cart[i].name ===  'Pasta' || 'All-in-one' ||  'Zero Make-up Kit' || 'Lip tint' || 'Lawn Dress' || 'Lawn-Chiffon Combo' || 'Toddler frock') {
            cart.push(element[i])
        }*/
        for (let i = 0; i < cart.length; i++){
        // prices with discount
        let discountedOil = 10;
        let discountedMixture= (cart[i].price/3)* 2;

        if (cart[i].id === 1 && cart[i].quantity >= 3) {
            cart[i].subtotalWithDiscount = discountedOil * cart[i].quantity;
            cart[i].total = cart[i].subtotalWithDiscount
            // reassigned value 
        } else if (cart[i].id === 3 && cart[i].quantity >= 10) {
            cart[i].subtotalWithDiscount= discountedMixture * cart[i].quantity;
            cart[i].total = cart[i].subtotalWithDiscount
        }
        else {
            cart[i].total = cart[i].price*cart[i].quantity
        }
        console.log(cart)
    }

}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    generateCart();
    calculateTotal();
    applyPromotionsCart();


    cart.forEach(function (item) { 
        let itemList = `<tr>
                        <th scope="row">${item.name}</th>` 
        itemList += `<td>$${item.price}</td>
                     <td>${item.quantity}</td>
                     <td>$${item.total}</td>`

        itemList += `<tr>`

        document.getElementById('cart_list').innerHTML+= itemList


    })
    
    document.getElementById('total_price').innerHTML = total

}
// ** Nivell II ** 

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    /*cart.find((item) => products.id === id)
    for (let i= 0; i < cart.length ; i++) {
        if (cart[i].quantity >= 2) {
            cart[i].quantity = cart[i].quantity -1

        } else if (cart[i].quantity <= 1) { 
            removeItem
        }
    }
}*/
}
function open_modal(){
	console.log("Open Modal");
    printCart()
}
