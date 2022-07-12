/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

//require('~bootstrap.bundle.min.js');
//C:\Users\andry\Boolean\laravel-pizze\node_modules\bootstrap\dist\js\bootstrap.bundle.min.js

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});

// Funzione visione alternativa index

// const gridIcon = document.getElementById('gridIcon');
// const listIcon = document.getElementById('listIcon');
// const gridView = document.getElementById('gridView');
// const listView = document.getElementById('listView');
// gridIcon.addEventListener('click', function(){
//     listView.classList.toggle('d-none');
//     gridView.classList.toggle('d-none');
// })
// listIcon.addEventListener('click', function(){
//     listView.classList.toggle('d-none');
//     gridView.classList.toggle('d-none');
// })

// const inputArr = [
//     'name',
//     'price',
//     'popularity',
//     'ingredients'
// ];

// function validateForm(){
//    inputArr.forEach(element => {
//     let x = document.forms["myForm"][element].value;
//     console.log(x);
//    if (x == "") {
//    alert("Name must be filled out");
//    return false;

//     }});
// }




// document.getElementById('formSubmit').addEventListener('submit', function(evt){

//     console.log('ciao');
//     evt.preventDefault();
// })

// $().ready(function(){
//     $('form').submit(function(event){

//         // $('#error-title').hide();

//         if($('#name').val().length == 0){
//             $('#error_name').show('fast').text('Il nome della pizza é obbligatorio').fadeOut(5000);
//         }
//         event.preventDefault();
//     })
// })
