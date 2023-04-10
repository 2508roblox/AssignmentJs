let currentProduct = JSON.parse(localStorage.getItem('product'))
let total = JSON.parse(localStorage.getItem('totalPrice'))
console.log(currentProduct);
document.querySelector('.photo-main img').attributes.src.value = currentProduct.img
document.querySelector('.title h1').innerHTML = currentProduct.name
document.querySelector('.price span').innerHTML = currentProduct.price
document.querySelector('.title span').innerHTML = `Stock: ${currentProduct.category}`
let cart = JSON.parse(localStorage.getItem('cart')) || []
const decrementItemCount = (id) => {
  console.log(id, "checkPrice");
  total -= count[id].price
  count[id].count = count[id].count - 1
  localStorage.setItem('count', JSON.stringify(count))
  document.querySelectorAll('.input-number')[id].value = count[id].count
  handleTotalPrice()
}
const incrementItemCount = (id) => {
  console.log(id, "checkPrice");
  total += count[id].price
  count[id].count = count[id].count + 1
  localStorage.setItem('count', JSON.stringify(count))
  document.querySelectorAll('.input-number')[id].value = count[id].count
  handleTotalPrice()
}
document.querySelector('.cta').addEventListener('click', (e) => {
  var count = JSON.parse(localStorage.getItem('count')) || []

  let primaryId = ~~(Math.random() * 42342)
  count.push({
    id: currentProduct.id,
    count: 1,
    price: currentProduct.price,
    length: count.length !== 0 ? count.length : 0
  })
  localStorage.setItem("count", JSON.stringify(count))

  let pushData = `
    <li class="bill">
             <div class="itemInfo">
             <img src="${currentProduct.img}" alt="">
            <div class="itemName">
            <p>Shoe</p>
            <p>${currentProduct.name}</p>
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
        <p>$${currentProduct.price}</p>
        <button onclick="handleDelete(${currentProduct.id}, ${cart.length}, ${primaryId})" >x</button>
    `
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
  cart.push(pushData)
  total += currentProduct.price

  localStorage.setItem("totalPrice", JSON.stringify(total))
  localStorage.setItem("cart", JSON.stringify(cart))
})