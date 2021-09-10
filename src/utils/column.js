let $search = document.querySelector('#search');
export let $modal = document.querySelector('#modal');
let $close = $modal.querySelector('.search__close');

$search.addEventListener('click', ()=>{
    $modal.classList.remove('loaderClose');
    $modal.classList.add('loader');
})
$close.addEventListener('click', ()=>{
    $modal.classList.remove('loader');
    $modal.classList.add('loaderClose');
})