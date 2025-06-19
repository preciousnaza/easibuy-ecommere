//copying sections to aside
let asideItem = document.querySelector('.aside-items');

//copying department
let deptPart = document.querySelector('.dept-part')
let department = document.querySelector('.department')
deptPart.innerHTML = department.innerHTML

//copying flex item
let headerflexItemPart = document.querySelector('.header-flex-items-part')
let HeaderflexItem = document.querySelector('.header-flex-items')
headerflexItemPart.innerHTML = HeaderflexItem.innerHTML


//copying header top
let headertopPart = document.querySelector('.headertop-part')
let Headertop = document.querySelector('.top-header')
headertopPart.innerHTML = Headertop.innerHTML


//opening Menu
let openIcon = document.querySelector('.open-menu')
let bodyElement = document.querySelector('body')
let menuDispaly = document.querySelector('.menu-display');

openIcon.addEventListener('click', function(e) {
    menuDispaly.classList.add('open');
    bodyElement.style.backgroundColor = ("rgba(0, 0, 0, 0.2)");
})

//closing Menu
let body = document.querySelector('.body-elements')
let closeIcon = document.querySelector('.close-menu');
 
   closeIcon.addEventListener('click', function(){
     menuDispaly.classList.remove('open');
       bodyElement.style.backgroundColor = ("white")
 })

   document.addEventListener('click', function(e) {
    if(menuDispaly.classList.contains('open') && !menuDispaly.contains(e.target) && !openIcon.contains(e.target)) 
    {
        menuDispaly.classList.remove('open')
        bodyElement.style.backgroundColor = ("white")
    } 
})
 

//opening Aside List 
let list = document.querySelectorAll('.list');
let listHeader = document.querySelectorAll('.dept-head');
let iconSmall = document.querySelectorAll('.icon-small')


 listHeader.forEach((header,index) => {
  
     header.addEventListener('click',function(){
         
         const contain = header.closest('.dept')
        
         list.forEach((item, i) =>{

             if(i === index){
                item.classList.toggle('open');
             }else{
                 item.classList.remove('open');
             }
        })

        iconSmall.forEach((icon, num) => {
             if(num === index){
                 icon.classList.toggle('down');
             }else{
                   icon.classList.remove('down');
             }
        }) 
     }); 
 });


 //opening Header-main flex items

let orderList = document.querySelectorAll('.order-list');
let click = document.querySelectorAll('.click');
let iconFlex = document.querySelectorAll('.icon-flex')

click.forEach((click,i) => {

 click.addEventListener('click', function() {

    orderList.forEach((orderList,index) => {

        if(i === index){
            orderList.classList.toggle('open');
        }else{
            orderList.classList.remove('open');
        }

    })

      iconFlex.forEach((icon, num) => {
             if(num === i){

                 icon.classList.toggle('down');

             }else{

                   icon.classList.remove('down');

             }
        })
})

})


//liking items 
let iconRed = document.querySelectorAll('.like')

iconRed.forEach( (likeIcon) => {
  
   likeIcon.addEventListener('click',function() {
     
     alert("Added to your wishlist")
     
   })
  
})

//open and close cart
let cartIcon = document.querySelector('.icon-space')
let closeCart = document.querySelector('.close-cart')
let cartMenu = document.querySelector('.cart-sidebar')
let modal = document.querySelector('.body-element')

cartIcon.addEventListener('click', function(e) {
    e.stopPropagation();
    cartMenu.classList.add('open');
})

closeCart.addEventListener('click', function() {
    cartMenu.classList.remove('open');
})

document.addEventListener('click', function(e) {
    if(cartMenu.classList.contains('open') && !cartMenu.contains(e.target)) 
    {
        cartMenu.classList.remove('open')
    } 
}) 



//add to Cart

  let addToCartButtons = document.querySelectorAll('.add-to-cart');
  let cartContainer = document.querySelector('.cart-product');
  let cartItemContainer = document.getElementById('cartItem');

  const cartItemMap = {}
  // Clear "your cart is empty" text
  function clearEmptyCart() {
    if (cartItemContainer.textContent.trim() === "your cart is empty") {
      cartItemContainer.innerHTML = '';
    }
  }

  function updateTotal(){
    const allItem = document.querySelectorAll('.cart-item');
    let total = 0;
    let totalQuantity = 0

    allItem.forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        const priceText = item.querySelector('.detail .price').textContent;
        const unitPrice = parseFloat(priceText.replace('$','').replace(',',''));

        total += unitPrice * quantity;
        totalQuantity += quantity
    })

    document.getElementById('total').textContent = `$${total.toLocaleString()}`;
    document.querySelector('.count').innerHTML = totalQuantity;
  }

  function delElement(element){
    const cartItem = element.closest('.cart-item')
    const priceElement = cartItem.querySelector('.price')
    

        let quantityElement = cartItem.querySelector('.quantity')
        let quantity = parseInt(quantityElement.textContent)
       

        if(quantity > 1){
            quantity--
            quantityElement.textContent = quantity
            const unitPrice = parseFloat(priceElement.textContent.replace('$','').replace(',',''));
            console.log(unitPrice)
            priceElement.textContent =` $${(unitPrice * quantity).toLocaleString()}`
        }else{
            cartItem.remove()    
        }
        updateTotal();
  }

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
      const productItem = button.closest('.product-item');
      const image = productItem.querySelector('.product-image').src;
      const name = productItem.querySelector('.product-name').textContent;
      const price = productItem.querySelector('.product-price').textContent;

      clearEmptyCart();

      if(cartItemMap[name]) {
        //check if item existed
        const ExistingItem = cartItemMap[name];
        const quantityElement = ExistingItem.querySelector('.quantity')
        let quantity = parseInt(quantityElement.textContent);

        quantity++
        quantityElement.textContent = quantity

        const priceElement = ExistingItem.querySelector('.price');
        const unitPrice = parseFloat(priceElement.textContent.replace('$','').replace(',',''));
        priceElement.textContent =` $${(unitPrice * quantity).toLocaleString()}`
        
        

        
      }else {
        
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

      cartItem.innerHTML = `
        <div class='row-img'>
          <img class='rowing' src='${image}' width='30px'>
          <h4>${name}</h4>
        </div>
        <div class='detail'>
          <h4 class='quantity'>1</h4>
          <h4 class='price'>${price}</h4>
          <ion-icon class='fa-trash trash-btn' onclick="delElement(this)"  name='trash'></ion-icon>
        </div>
      `;
        cartItemMap[name] = cartItem;
        cartItemContainer.appendChild(cartItem);
      }

      updateTotal();
    });
  });




// best seller slides

// let sideno = 
//  document.querySelectorAll('.best-slide');
//  let slider = document.querySelector('.best-seller-wrapper');
//  let totalSlide = sideno.length;

//  let currentIndex = 0;

// function getSlideWidthPercent() {
//     return window.innerWidth >= 850 ? 50 : 100;
// }

// function updateSlide(){
//     const slideWidth = getSlideWidthPercent();
//     slider.style.transform =` translateX(-${currentIndex * slideWidth}vw)`
// }

// setInterval(function(){
//     let slidesPerView = window.innerWidth >= 850 ? 2 : 1;
//     let maxIndex = totalSlide - slidesPerView;

//     currentIndex = (currentIndex + 1) > maxIndex ? 0 : currentIndex + 1;
//     updateSlide();
// }, 3000);


// window.addEventListener('resize', updateSlide);







//main-banner slides
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 3000, // 3 seconds between slides
      disableOnInteraction: false,
    },
    speed: 600, // slide transition speed in ms
    slidesPerView: 1,
});

