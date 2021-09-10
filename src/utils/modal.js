import { $modal } from "./column";
import { callApi } from "./fetchData";
 
$modal.addEventListener('click', (event)=>{
    const node = event.target;
    const city = node.textContent;

    callApi(city);

    $modal.classList.remove('loader');
    $modal.classList.add('loaderClose');
})
