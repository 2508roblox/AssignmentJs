// $('.input-number-increment').click(function () {
//   var $input = $(this).parents('.input-number-group').find('.input-number');
//   var val = parseInt($input.val(), 10);
//   $input.val(val + 1);
// });

// $('.input-number-decrement').click(function () {
//   var $input = $(this).parents('.input-number-group').find('.input-number');
//   var val = parseInt($input.val(), 10);
//   $input.val(val - 1);
// })
const increment = () => {
  document.querySelector(".input-number").value = eval(`${document.querySelector(".input-number").value} +1`)
}
const decrement = () => {
  document.querySelector(".input-number").value = eval(`${document.querySelector(".input-number").value} -1`)

}