// Cart --------------------------
let products = [
    {
      src: "./images/product-1.jpg",
      title: "freash orange",
      price: [50, 100],
    },
    {
      src: "./images/product-2.jpg",
      title: "freash orange",
      price: [50, 100],
    },
    {
      src: "./images/product-3.jpg",
      title: "freash orange",
      price: [50, 100],
    },
    {
      src: "./images/product-4.jpg",
      title: "freash orange",
      price: [50, 100],
    },
    {
      src: "./image/product-5.jpg",
      title: "freash orange",
      price: [50, 100],
    },
    {
      src: "./images/product-6.jpg",
      title: "freash orange",
      price: [50, 100],
    },
    {
      src: "./images/product-7.jpg",
      title: "freash orange",
      price: [50, 100],
    },
    {
      src: "./images/product-8.jpg",
      title: "freash orange",
      price: [50, 100],
    },
  ];
  
  function allProducts() {
    let clutter = "";
    products.forEach((product, index) => {
      clutter += `<div class="product">
      <div class="img-container">
        <img src="./images/product-9.jpg" alt="" />
        <div class="addCart">
          <i class="fas fa-shopping-cart"></i>
        </div>

      </div>
      <div class="bottom">
        <a href="">Bambi Print Mini Backpack</a>
        <div class="price">
          <span>$150</span>
        </div>
      </div>
    </div>
      `;
    });
    // console.log(clutter)
    document.querySelector(".product-container").innerHTML = clutter;
  }
  allProducts();
  
  let cratContainer = document.querySelector(".shopping-cart");
  
  let existCart = [];
  
  
  
  let cartBtns = document.querySelectorAll(".add");
  let cartBoxes = document.querySelectorAll(".cart-box");
  
  cartBtns.forEach((btn, index) => {
    btn.addEventListener("click", (details) => {
      // console.log(details.target.classList.contains("add"));
      // console.log(index);
      // console.log(details.target.dataset.index);
      let clickedProduct = {
        src: products[index].src,
        title: products[index].title,
        price: products[index].price[0],
        qty: 1,
      };
      // console.log(clickedProduct);
      existCart.push(clickedProduct);
      showCart();
  
      // console.log(deleteButtons);
      //   deleteCart(deleteButtons)
      // console.log(deleteButtons)
    });
  });
  let deleteButtons=[]
  
  function showCart() {
      let cluter = "";
    
      existCart.forEach((cart, index) => {
        cluter += `<div class="box">
            <i class="fa fa-trash"  id=${index} value=${index} ></i>
            <img src=${cart.src} alt="">
            <div class="content">
                <h3>${cart.title}</h3>
                <span class="price">Rs. ${cart.price}/-</span>
                <span class="quantity">Qty : ${cart.qty}Kg</span>
            </div>
            </div>
            `;
      });
      cratContainer.innerHTML = cluter;
       deleteButtons = document.querySelectorAll(".fa-trash");
      console.log(deleteButtons)
      deleteCart(deleteButtons)
    }
  
  
  function deleteCart(buutons){
      // console.log('hii')
      buutons.forEach((el) => {
          el.addEventListener("click", (details) => {
            console.log("hii");
            existCart.splice(details.target.id, 1);
            showCart();
          });
        });
  }
  
  showCart();