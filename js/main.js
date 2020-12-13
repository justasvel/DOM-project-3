let bigger = document.querySelector('#make-bigger');
let smaller = document.querySelector('#make-smaller');

let img = document.querySelector('img');

bigger.addEventListener('click', function() {
    img.classList.add('img-big');
    img.classList.remove('img-small');
})

smaller.addEventListener('click', function() {
    img.classList.add('img-small');
    img.classList.remove('img-big');
})

img.addEventListener('click', function() {
    img.classList.remove('img-small');
    img.classList.remove('img-big');
})