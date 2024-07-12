import {books} from "./booksProduct.js";

let audiobooksHTML='';
document.addEventListener("DOMContentLoaded", function() {

    let InbooksshelfHTML = '<div class="book_shelf_container">'; 

    const popularBooks = books.filter(book => book.keywords.includes("In book shelf"));

    popularBooks.forEach((book) => {
        InbooksshelfHTML += `
            <img src="${book.image}" class="book_in_shelf_image">
        `;
    });

    document.querySelector('.best_book_shelf_js').innerHTML = InbooksshelfHTML;

    const audioBooks=books.filter(book => book.keywords.includes("audio"));
    audioBooks.forEach((book)=>{
        audiobooksHTML+=`
        <div class="audio_book_container">
        <div class="audio_book_image">
        <img src="${book.audio_image}">
        </div>
        <div class="audio_book_content_container">
        <p class="audio_book_name">${book.name}</p>
        <img src="stars/star${book.rating}.png" class="rating_stars">
        <p class="book_price">$${(book.priceCents / 100).toFixed(2)}</p>
        <button class="play_button">Play Now</button>
        </div>
        </div>
        `
    });

    document.querySelector('.audio_books_js').innerHTML=audiobooksHTML;

  });

  