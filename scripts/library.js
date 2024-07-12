import { books } from "./booksProduct.js";

document.addEventListener("DOMContentLoaded", function() {
    loadShelf1();
    loadShelf2();
    loadShelf3();
    loadShelf4();
    loadShelf5();
    loadShelf6();
});

function loadShelf1(){
    let shelf1= '<div class="book_shelf_container_library">'; // Start the container

    const booksToShow = books.slice(0, 8);

    booksToShow.forEach((book) => {
        shelf1+= `
            <img src="${book.image}" class="book_in_shelf_image" data-id="${book.id}">
        `;
    });

    shelf1+= '</div>'; // End the container
    document.querySelector('.shelf1').innerHTML = shelf1;

    document.querySelectorAll('.shelf1 .book_in_shelf_image').forEach((img) => {
        img.addEventListener('click', function() {
            localStorage.setItem('selectedBook', this.dataset.id);
            window.location.href = 'viewbook.html';
        });
    });
}
function loadShelf2(){
    let shelf2= '<div class="book_shelf_container_library">'; // Start the container

    const booksToShow = books.slice(8, 16);

    booksToShow.forEach((book) => {
        shelf2+= `
            <img src="${book.image}" class="book_in_shelf_image" data-id="${book.id}">
        `;
    });

    shelf2+= '</div>'; // End the container
    document.querySelector('.shelf2').innerHTML = shelf2;

    document.querySelectorAll('.shelf2 .book_in_shelf_image').forEach((img) => {
        img.addEventListener('click', function() {
            localStorage.setItem('selectedBook', this.dataset.id);
            window.location.href = 'viewbook.html';
        });
    });
}
function loadShelf3(){
    let shelf3= '<div class="book_shelf_container_library">'; // Start the container

    const booksToShow = books.slice(16, 24);

    booksToShow.forEach((book) => {
        shelf3+= `
            <img src="${book.image}" class="book_in_shelf_image" data-id="${book.id}">
        `;
    });

    shelf3+= '</div>'; // End the container
    document.querySelector('.shelf3').innerHTML = shelf3;

    document.querySelectorAll('.shelf3 .book_in_shelf_image').forEach((img) => {
        img.addEventListener('click', function() {
            localStorage.setItem('selectedBook', this.dataset.id);
            window.location.href = 'viewbook.html';
        });
    });
}
function loadShelf4(){
    let shelf4= '<div class="book_shelf_container_library">'; // Start the container

    const booksToShow = books.slice(24, 32);

    booksToShow.forEach((book) => {
        shelf4+= `
            <img src="${book.image}" class="book_in_shelf_image" data-id="${book.id}">
        `;
    });

    shelf4+= '</div>'; // End the container
    document.querySelector('.shelf4').innerHTML = shelf4;

    document.querySelectorAll('.shelf4 .book_in_shelf_image').forEach((img) => {
        img.addEventListener('click', function() {
            localStorage.setItem('selectedBook', this.dataset.id);
            window.location.href = 'viewbook.html';
        });
    });
}
function loadShelf5(){
    let shelf5= '<div class="book_shelf_container_library">'; // Start the container

    const booksToShow = books.slice(32, 40);

    booksToShow.forEach((book) => {
        shelf5+= `
            <img src="${book.image}" class="book_in_shelf_image" data-id="${book.id}">
        `;
    });

    shelf5+= '</div>'; // End the container
    document.querySelector('.shelf5').innerHTML = shelf5;

    document.querySelectorAll('.shelf5 .book_in_shelf_image').forEach((img) => {
        img.addEventListener('click', function() {
            localStorage.setItem('selectedBook', this.dataset.id);
            window.location.href = 'viewbook.html';
        });
    });
}
function loadShelf6(){
    let shelf6= '<div class="book_shelf_container_library">'; // Start the container

    const booksToShow = books.slice(40, 48);

    booksToShow.forEach((book) => {
        shelf6+= `
            <img src="${book.image}" class="book_in_shelf_image" data-id="${book.id}">
        `;
    });

    shelf6+= '</div>'; // End the container
    document.querySelector('.shelf6').innerHTML = shelf6;

    document.querySelectorAll('.shelf6 .book_in_shelf_image').forEach((img) => {
        img.addEventListener('click', function() {
            localStorage.setItem('selectedBook', this.dataset.id);
            window.location.href = 'viewbook.html';
        });
    });
}
