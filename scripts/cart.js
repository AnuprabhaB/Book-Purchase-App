import {books} from './booksProduct.js';

document.addEventListener("DOMContentLoaded",function(){
   loadCartFromStorage();
   displayCart();
   displayOrderSummary();
});

let cart;
function loadCartFromStorage(){
    cart=JSON.parse(localStorage.getItem('cart'));

    if(!cart){
        cart=[
            {
            Id:'d237f5b4-1b6c-4203-b3d5-4f2a8d5b6c2e',
               quantity:2,
            },{
            Id:'e15c7b3d-8f92-4c6b-8a3f-4e5a7d4b6f9c',
                quantity:1,
            },
            {
                Id:'6e7b8c5a-9d82-4f3b-8d2f-0e3a8d6f7b4c',
                    quantity:4,
                }

        ];
    }
};

function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId){
    console.log(productId);
    let alreadyExistItem='';
    cart.forEach((cartItem)=>{
        if(productId===cartItem.Id){
            alreadyExistItem=cartItem;
        }
    });

    if(alreadyExistItem){
        alreadyExistItem.quantity+=1;
    }
    else{
        cart.push({
            Id:productId,
            quantity:1,
        });
    }
    saveToStorage();

}

function removeFromCart(productId){
    const newCart=[];
    cart.forEach((cartItem)=>{
        if(cartItem.Id !==productId){
            newCart.push(cartItem);
        }
    })
//changing our original cart to newCart with the removed cart item
    cart=newCart;
    saveToStorage();
    displayCart();
    displayOrderSummary();
}



function displayCart(){
    let cartDetails='';
    cart.forEach((cartItem)=>{
        const bookInCart=books.find((b)=>b.id===cartItem.Id);

        cartDetails+=`
        <div class="cart_item_container">
        <hr>

        <div class="product_container">
             <div><img src="${bookInCart.image}" class="book_img"></div>
          <div>
             <p class="book_name">${bookInCart.name}</p>
             <p class="author_name">${bookInCart.author}</p>
              <div><img src="stars/star${bookInCart.rating}.png" class="star"></div>
             <div class="quantity_selector">
                <div class="minus_button" data-id="${cartItem.Id}">
                   <img src="minus.png"></div>
               <div class="display_quantity_container">
                  <div class="display_quantity_area">${cartItem.quantity||1}</div>
                  <p class="quantity_label">Quantity</p>
               </div>
               <div class="add_button" data-id="${cartItem.Id}">
                  <img src="add.png">
               </div>
             </div>
          </div>
          <div class="price_container">
            <div class="price">$ ${(bookInCart.priceCents/100).toFixed(2)}
            </div>
            <div><img src="cross_button.png" class="cross_button" data-id="${cartItem.Id}"></div>
          </div>
        </div>
        `;
        document.querySelector('.product_summary').innerHTML=cartDetails;
    });
    document.querySelectorAll('.add_button').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            const cartItem = cart.find(item => item.Id === id);
            if(cartItem.quantity < 10) {
                cartItem.quantity = (cartItem.quantity || 1) + 1;
                displayCart();
                displayOrderSummary();
            }
        });
    });

    document.querySelectorAll('.minus_button').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            const cartItem = cart.find(item => item.Id === id);
            if(cartItem.quantity > 0) {
                cartItem.quantity = (cartItem.quantity || 1) - 1;
                displayCart();
                displayOrderSummary();
            }
        });
    });


    document.querySelectorAll('.cross_button').forEach((button)=>{
      button.addEventListener('click',function(){
            removeFromCart(this.dataset.id);
      });
    });
}

function displayOrderSummary(){
    let totalItems=0;
    let productPrice=0;
    let shippingPrice=99;
    cart.forEach((cartItem)=>{
       totalItems+=cartItem.quantity;
       const book=books.find((b)=>b.id===cartItem.Id);

       productPrice+=book.priceCents*cartItem.quantity;

    });

    const taxBefore=productPrice+shippingPrice;
    const taxAfter=taxBefore*0.1;

    const total=taxAfter+taxBefore;


    const OrderSummary=`
     
    <div class="order_summary_container">
    <div class="title">
        Order Summary
    </div>
    <div class="items">
      <div>Items ( ${totalItems} ):</div>
      <div class="price_display">$ ${(productPrice/100).toFixed(2)}</div>
    </div>
    
    <div class="shipping">
      <div>Shipping & Handling:</div>
      <div class="price_display">$ ${(shippingPrice/100).toFixed(2)}</div>
    </div>

    <div class="beforeTax">
      <div>Total Before Tax:</div>
      <div class="price_display">$ ${(taxBefore/100).toFixed(2)}</div>
    </div>

    <div class="afterTax">
      <div>Estimated Tax( 10% ):</div>
      <div class="price_display">$ ${(taxAfter/100).toFixed(2)}</div>
    </div>

    <hr>
    <div class="total_order">
      <div>Order Total:</div>
      <div class="price_display">$ ${(total/100).toFixed(2)}</div>
    </div>

    <button class="place_order_button">Place your Order
    </button>

    </div>
    `;

    document.querySelector('.order_summary').innerHTML=OrderSummary;
}





function updateCartQuantity(productId){

    const bookProduct=cart.forEach((b)=>b.id===productId);
    bookProduct.quantity+=1;
    displayOrderSummary();

}