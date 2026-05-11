
// declaration of all the the variables I will use
const items = document.querySelectorAll('.img');
const labels = document.querySelectorAll('.tier-label');
const contain = document.querySelectorAll('.tier-items, container')
let container = document.getElementById('img-container');
let btn = document.getElementById('reset');
let body = document.getElementById('body');
let itm = '';
let lbl = '';

// s=tells when you start dragging an element.
items.forEach(item =>{
  item.addEventListener('dragstart', function(){
    console.log('drag start')
    item.classList.add('dragging')
  })
// removes opacity when you stop dragging
  item.addEventListener('dragend', function(){
    item.classList.remove('dragging')
  })
})

// tells where you are moving the element and where you are dropping it
contain.forEach(container =>{
container.addEventListener('dragover', function(event){
  event.preventDefault()
const draggable = document.querySelector('.dragging')
container.appendChild(draggable)
})
})


// code to make images go back into their container when reset button is clicked.
items.forEach((item) => {
  btn.addEventListener('click', function () {
    container.appendChild(item);
    item.classList.remove('border');
    lbl.classList.remove('border');
  });
});

// code to make each image clickable
items.forEach((item) => {
  item.addEventListener('click', function (event) {
    if (itm) {
      itm.classList.remove('border');
    }
    itm = event.target;
    itm.classList.add('border');
    event.stopPropagation();
  });
});
// code to make border go away when anything is clicked
document.addEventListener('click', function () {
  if (itm) {
    itm.classList.remove('border');
    itm = null;
  }
});
// code to make images clicked get added to tier list.
labels.forEach((label) => {
  label.addEventListener('click', function (event) {
    console.log(event.target);
    lbl = event.target;
    let img = lbl.nextSibling.nextSibling;
    img.appendChild(itm);
    console.log(img);
  });
});


contain.forEach((label) => {
  label.addEventListener('click', function (event) {
    console.log(event.target);
    lbl = event.target;
    let img = lbl
    img.appendChild(itm);
    console.log(img);
  });
});
