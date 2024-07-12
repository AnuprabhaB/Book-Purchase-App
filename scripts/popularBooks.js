import {books} from "./booksProduct.js";

let booksHTML='';
document.addEventListener("DOMContentLoaded", function() {

    const popularBooks = books.filter(book => book.keywords.includes("popular"));

    popularBooks.forEach((book)=>{
        booksHTML+=`
        <div class="book_container">
        <div class="book_img_container">
        <img src="${book.image}" class="book_img">
        </div>
        <div class="book_content_container">
        <p class="book_name">${book.name}</p>
        <p class="author_name">${book.author}</p>
        <img src="stars/star${book.rating}.png" class="rating_stars">
        <p class="book_price">$${(book.priceCents / 100).toFixed(2)}</p>
        <button class="view_button">View Now</button>
        </div>
        </div>
        `
    })
    document.querySelector('.popular_books_today').innerHTML=booksHTML;
  });

  