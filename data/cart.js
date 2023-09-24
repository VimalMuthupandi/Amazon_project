const cart = [];

// We can access this file fro, amazon.js using module

function addToCart(productId){
    let matchingItems;
    
    
    cart.forEach((cartItem) => {
      
      if(productId === cartItem.productId){
        matchingItems = cartItem;
      }
    });
  
    const quantitySelector = document.querySelector(
      `.js-quantity-selector-${productId}`
    );
    const quantity = Number(quantitySelector.value);
  
    const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`)
    addedMessage.classList.add('added-to-cart-visible');
  
    setTimeout(() => {
      addedMessage.classList.remove('added-to-cart-visible');
    }, 2000);
  
  
    if(matchingItems){
      matchingItems.quantity += quantity;
    } else {                        // steps:- 1.Check the product is already int he cart. 2. if it is already there, increase the quantity
      cart.push({                   // 3. if it is not in the cart, add it into the cart.
        productId: productId,
        quantity: quantity
      });
    }
  }

  function updateCartQuantity(quantity){
    let cartQuantity = 0;

      cart.forEach((cartItem) => {
          cartQuantity += cartItem.quantity;
      })
      

      document.querySelector('.js-cart-quantity')
      .innerHTML = cartQuantity;   // to update the cart quantity and make it interactive
}