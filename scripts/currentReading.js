import {books} from "./booksProduct.js";

let currently_reading_booksHTML='';
document.addEventListener("DOMContentLoaded", function() {

    const popularBooks = books.filter(book => book.keywords.includes("currently reading"));

    popularBooks.forEach((book)=>{
        currently_reading_booksHTML+=`
    <a href="bookIndex.html" class="book_link" data-id="${book.id}">
        <div class="currently_reading_container">
        <div class="bg_current" data-colors="${book.color1},${book.color2},${book.color3}"></div>

        <div class="currently_reading_book_img" style="width:134px;height:186px;">
        <img src="${book.image}">
        </div>
        <div class="currently_reading_content">
         <p class="current_book_name">${book.name}</p>
        <p class="current_author_name">By ${book.author}</p>
        <img src="ProgressBar/Progress${book.progress}.png" class="current_rating_progress_bar">
        </div>
        </div>
    </a>
        `
    })
    document.querySelector('.currently_reading_books').innerHTML=currently_reading_booksHTML;

    document.querySelectorAll('.bg_current').forEach(bg => {
        const colors = bg.getAttribute('data-colors').split(',');
        bg.style.background = `linear-gradient(to bottom right, ${colors[0]}, ${colors[1]}, ${colors[2]})`;
    });
  
    

});

  