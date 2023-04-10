let data = [
    {
        company: "Nike",
        name: "React Pro",
        price: 1321,
        category: "500 items",
        img: "./assets/shoes/shoe5.png"
        , code: ~~(Math.random() * 1000000)
    },
    {
        company: "Nike",
        name: "Nike Air",
        price: 500,
        category: "100 items",
        img: "./assets/shoes/green shoes.png",
        code: ~~(Math.random() * 1000000)
    }, {
        company: "Nike",
        name: "Max 270",
        price: 300,
        category: "400 items",
        img: "./assets/shoes/shoe2.png"
        , code: ~~(Math.random() * 1000000)
    }, {
        company: "Nike",
        name: "90 Futura",
        price: 299,
        category: "400 items",
        img: "./assets/shoes/shoe4.png"
        , code: ~~(Math.random() * 1000000)
    }, {
        company: "Nike",
        name: "React Pro",
        price: 199,
        category: "400 items",
        img: "./assets/shoes/green shoes.png",
        code: ~~(Math.random() * 1000000)
    }, {
        company: "Nike",
        name: "React Pro",
        price: 699,
        category: "400 items",
        img: "./assets/shoes/green shoes.png",
        code: ~~(Math.random() * 1000000)
    }, {
        company: "Nike",
        name: "React Pro",
        price: 899,
        category: "400 items",
        img: "./assets/shoes/green shoes.png",
        code: ~~(Math.random() * 1000000)
    }, {
        company: "Nike",
        name: "React Pro",
        price: 1099,
        category: "400 items",
        img: "./assets/shoes/green shoes.png",
        code: ~~(Math.random() * 1000000)
    }, {
        company: "Nike",
        name: "React Pro",
        price: 999,
        category: "400 items",
        img: "./assets/shoes/green shoes.png"
        , code: ~~(Math.random() * 1000000)
    }, {

        company: "Nike",
        name: "React Pro",
        price: 399,
        category: "400 items",
        img: "./assets/shoes/green shoes.png",
        code: ~~(Math.random() * 1000000)
    }


]
const container = document.querySelector(".products")
// console.log(container);
data.forEach((e) => {
    let product = `
    <div class="img">
    <div class="title">
      <p>${e.company}</p>
      <h1>${e.name}</h1>
      <p>${e.category}</p>
    </div>
    <img width="200px" src="${e.img}" alt="" />
    <div class="rating">
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  </div>
    <div class="button">
      <p>$${e.price}.00</p>
      
     
    
      <a class="coolMan" style="text-decoration: none;color: white;" href="./product.html">
      
      <button class="second btn gap-2">Buy
      </button>
      </a>

    </div>
    

    <div class="ab-info">
    <img src="./assets/images/cart-icon.png" alt="">
  </div>
  </div>
    `
    container.innerHTML += product
})
var cart = JSON.parse(localStorage.getItem('cart')) || []
var count = JSON.parse(localStorage.getItem('count')) || []
var lastId = JSON.parse(localStorage.getItem('lastId')) || null

var currProducts = JSON.parse(localStorage.getItem('product')) || []
let total = JSON.parse(localStorage.getItem('totalPrice')) || 0
const handleTotalPrice = () => {
    document.querySelector('.total-p').innerText = `$${total}`
    document.querySelector('.total-pp').innerText = `$${total}`
}
// - + item counter
const decrementItemCount = (id) => {
    console.log(id, "checkPrice");
    total -= count[id].price
    count[id].count = count[id].count - 1
    localStorage.setItem('count', JSON.stringify(count))
    localStorage.setItem('totalPrice', JSON.stringify(total))
    document.querySelectorAll('.input-number')[id].value = count[id].count
    handleTotalPrice()
}
const incrementItemCount = (id) => {
    console.log(id, "checkPrice");
    total += count[id].price
    count[id].count = count[id].count + 1
    localStorage.setItem('count', JSON.stringify(count))
    localStorage.setItem('totalPrice', JSON.stringify(total))
    document.querySelectorAll('.input-number')[id].value = count[id].count
    handleTotalPrice()
}
handleTotalPrice()
const handleTotalItems = () => {
    // render numbers of items
    document.querySelector('.cart-items').innerText = `${cart.length} items`
    document.querySelector('.cart-items-s').innerText = `${cart.length} items`
}
handleTotalItems()
console.log(cart);
document.querySelector('.all-products').innerHTML = cart.join("")
const handleDelete = (id, countId, primaryId) => {
    let find = cart.filter(word => word.includes(`${primaryId}`))
    cart.splice(cart.indexOf(...find), 1)
    console.log("check", data[id].price);
    console.log("nnvnvn", count.findIndex(obj => obj.length === countId));
    total -= (count[count.findIndex(obj => obj.length === countId)].price * count[count.findIndex(obj => obj.length === countId)].count)
    //delete count obj in array
    count.splice(count.findIndex(obj => obj.length === countId), 1);
    localStorage.setItem("count", JSON.stringify(count))
    localStorage.setItem('totalPrice', JSON.stringify(total))
    document.querySelector('.total-p').innerText = `$${total}`
    document.querySelector('.total-pp').innerText = `$${total}`
    if (cart.length === 0) {
        localStorage.removeItem('cart')
        total = 0
    } else {
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    document.querySelector('.all-products').innerHTML = cart.join("")
    // render numbers of items
    document.querySelector('.cart-items').innerText = `${cart.length} items`
    document.querySelector('.cart-items-s').innerText = `${cart.length} items`
}
// loop all products
//decrement
document.querySelectorAll(".products .img").forEach((e, i) => {
    document.querySelectorAll(".products .img  ")[i].addEventListener('mouseover',
        () => {
            console.log("Hover");
            document.querySelectorAll(".ab-info")[i].classList.add('display')
        })
    document.querySelectorAll(".products .img")[i].addEventListener('mouseout',
        () => {
            document.querySelectorAll(".ab-info")[i].classList.remove('display')
        })
    //add to cart
    document.querySelectorAll(".ab-info")[i].addEventListener('click',
        () => {
            if (i !== lastId) {
                let primaryId = ~~(Math.random() * 42342)
                count.push({
                    id: i,
                    count: 1,
                    price: data[i].price,
                    length: count.length !== 0 ? count.length : 0
                })
                localStorage.setItem("count", JSON.stringify(count))

                cart.push(`
                <li class="bill">
                 <div class="itemInfo">
                 <img src="${document.querySelectorAll(".img> img")[i].attributes.src.value}" alt="">
                <div class="itemName">
                <p>Shoe</p>
                <p>${document.querySelectorAll(".img .title h1")[0].outerText}</p>
                </div>
                 </div>
                 <div class="input-group input-number-group">
                 
                 <div class="input-group-button">
                   <span onclick="decrementItemCount(${cart.length})" class="input-number-decrement">-</span>
                 </div>
                 <input class="input-number" type="number" value="1" min="0" max="1000">
                 <div class="input-group-button">
                   <span onclick="incrementItemCount(${cart.length})" class="input-number-increment">+</span>
                 </div>
               </div>
            <p>$${data[i].price}</p>
            <button onclick="handleDelete(${i}, ${cart.length}, ${primaryId})" >x</button>
                </li>
                `)
                Swal.fire({
                    title: 'Mua hàng thành công!',
                    text: 'Bạn có muốn các mặt hàng tương tự?',
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Gio hang!'
                }).then(function (result) {
                    if (result.isConfirmed) {
                        location.assign("http://127.0.0.1:5500/test.html")
                    }
                });
                localStorage.setItem("cart", JSON.stringify(cart))
                document.querySelector('.all-products').innerHTML = cart.join("")
                handleTotalItems()
                total += data[i].price
                localStorage.setItem('totalPrice', JSON.stringify(total))
                handleTotalPrice()
                lastId = i
                localStorage.setItem("lastId", JSON.stringify(lastId))
            }
            else {
                Swal.fire({
                    title: 'Mua hàng thành công!',
                    text: 'Bạn có muốn các mặt hàng tương tự?',
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Gio hang!'
                }).then(function (result) {
                    if (result.isConfirmed) {
                        location.assign("http://127.0.0.1:5500/test.html")
                    }
                });

                // add +1
                let sameId = cart.length - 1
                incrementItemCount(sameId)
                console.log(cart.length - 1, "checkId");
            }


        }
    )

    // detail page
    document.querySelectorAll('.second')[i].addEventListener('click', (e) => {
        currProducts = data[i]
        currProducts = { ...currProducts, id: i }
        localStorage.setItem('product', JSON.stringify(currProducts))
        localStorage.setItem('totalPrice', JSON.stringify(total))
    })
})
document.querySelector(".cart").addEventListener('click', (e) => {
    document.querySelector(".overlay").classList.toggle('display')
    document.querySelector(".all-bills").classList.toggle('display')
    console.log("fawef");
})
document.querySelector(".cart-close").addEventListener('click', (e) => {
    document.querySelector(".overlay").classList.toggle('display')

    document.querySelector(".all-bills").classList.toggle('display')
})
document.querySelector('.checkout').addEventListener('click', (e) => {
    console.log("clear");
    total = 0
    localStorage.setItem('totalPrice', JSON.stringify(total))
    count = []
    localStorage.setItem('count', JSON.stringify(count))
    lastId = null
    localStorage.setItem("lastId", JSON.stringify(lastId))
    cart = []
    localStorage.setItem("cart", JSON.stringify(cart))
    document.querySelector('.all-products').innerHTML = cart.join("")
    document.querySelector('.total-p').innerText = `$${total}`
    document.querySelector('.total-pp').innerText = `$${total}`
    document.querySelector('.all-products').innerHTML = cart.join("")
    document.querySelector('.cart-items').innerText = `${cart.length} items`

    Swal.fire({
        title: 'Thanh toán thành công!',
        text: 'Bạn có muốn các mặt hàng tương tự?',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Trang chủ!'
    }).then(function (result) {
        if (result.isConfirmed) {
            location.assign("http://127.0.0.1:5500/test.html")
        }
    });


})
console.log("ckscs");