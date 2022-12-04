import { writable } from "svelte/store";

export {data, loadData}


let data = writable({});
let article = 1;

const url = 'https://jsonplaceholder.typicode.com/todos/';


 function loadData() {
    console.log('entrou na loadData');
    
    let url_composed;

    url_composed = url + article;
    console.log(url_composed);
    
    // const response = await fetch(url_composed);
    // data.dados = await response.json();

    // console.log(data);
    
    fetch(url_composed)
    .then(response => response.json())
    .then(json => {data.set({...json})});
    // // .then((data) => {
    //     console.log('Success:', data);
    // })
    // .catch((error) => {
    //     console.error('Error:', error);
    // });

    article += 1;
}