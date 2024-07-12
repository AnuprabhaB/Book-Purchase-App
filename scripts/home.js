import { books } from "./booksProduct.js";

document.addEventListener("DOMContentLoaded", function() {

    const introText=document.getElementById('introText').querySelector('p');
    const hours= new Date().getHours();
    let greeting;
    if(hours<12){
        greeting='Good Morning';
    }
    else if(hours<18){
        greeting='Good Afternoon';
    }
    else{
        greeting='Good Evening';
    }
    introText.innerHTML = `${greeting} <span>Sara</span>! Welcome Back!`;

    loadPopularBooks();
    loadCurrentlyReadingBooks();
    loadBookshelfAndAudioBooks();


    const currentReading = document.querySelector('.current_reading');
    currentReading.addEventListener('click',function(){
     const bookId=currentReading.getAttribute('data-book-id');
     localStorage.setItem('storedBookId',bookId);
     window.location.href='bookIndex.html';
    });
});

function loadPopularBooks() {
    let booksHTML = '';
    const popularBooks = books.filter(book => book.keywords.includes("popular"));

    popularBooks.forEach((book) => {
        booksHTML += `
        <div class="book_container">
            <div class="book_img_container">
                <img src="${book.image}" class="book_img">
            </div>
            <div class="book_content_container">
                <p class="book_name">${book.name}</p>
                <p class="author_name">${book.author}</p>
                <img src="stars/star${book.rating}.png" class="rating_stars">
                <p class="book_price">$${(book.priceCents / 100).toFixed(2)}</p>
                <button class="view_button" data-id="${book.id}">View Now</button>
                <div class="like_button"><img src="like-button.png"></div>
            </div>
        </div>`;
    });
    document.querySelector('.popular_books_today').innerHTML = booksHTML;

    document.querySelectorAll('.view_button').forEach(button =>{
        button.addEventListener('click',function(){
            displayBook(this.dataset.id);
        });
    });
}
function displayBook(bookId){
    localStorage.setItem('selectedBook',bookId);
    window.location.href='viewbook.html';
}

function loadCurrentlyReadingBooks() {
    let currentlyReadingBooksHTML = '';
    const currentlyReadingBooks = books.filter(book => book.keywords.includes("currently reading"));

    currentlyReadingBooks.forEach((book) => {
        currentlyReadingBooksHTML += `
    
        <div class="currently_reading_container">
            <div class="bg_current" data-colors="${book.color1},${book.color2},${book.color3}"></div>
            <a href="bookIndex.html" class="book_link" data-id="${book.id}">
            <div class="currently_reading_book_img" style="width:134px; height:186px;">
                <img src="${book.image}">
            </div>
            </a>
            <div class="currently_reading_content">
                <p class="current_book_name">${book.name}</p>
                <p class="current_author_name">By ${book.author}</p>
                <img src="ProgressBar/Progress${book.progress}.png" class="current_rating_progress_bar">
            </div>
        </div>`
        ;
    });
    document.querySelector('.currently_reading_books').innerHTML = currentlyReadingBooksHTML;

    document.querySelectorAll('.bg_current').forEach(bg => {
        const colors = bg.getAttribute('data-colors').split(',');
        bg.style.background = `linear-gradient(to bottom right, ${colors[0]}, ${colors[1]}, ${colors[2]})`;
    });
    document.querySelectorAll('.book_link').forEach(link => {
        link.addEventListener('click', function(event) {
            const productId = this.getAttribute('data-id');
            localStorage.setItem('storedBookId', productId);
        });
    });
}

function loadBookshelfAndAudioBooks() {
    let InbooksshelfHTML = '<div class="book_shelf_container">';
    const booksInShelf = books.filter(book => book.keywords.includes("In book shelf"));

    booksInShelf.forEach((book) => {
        InbooksshelfHTML += `
        <a href="viewbook.html">
        <img src="${book.image}" class="book_in_shelf_image" data-id="${book.id}">
        </a>`;
    });

    InbooksshelfHTML += '</div>';
    document.querySelector('.best_book_shelf_js').innerHTML = InbooksshelfHTML;

    document.querySelectorAll('.book_in_shelf_image').forEach((book)=>{
        book.addEventListener('click',function(event){
         const productId=this.getAttribute('data-id');
         localStorage.setItem('selectedBook',productId);
        });
    });

    let audiobooksHTML = '';
    const audioBooks = books.filter(book => book.keywords.includes("audio"));

    audioBooks.forEach((book) => {
        audiobooksHTML += `
        <div class="audio_book_container">
            <div class="audio_book_image">
                <img src="${book.audio_image}">
            </div>
            <div class="audio_book_content_container">
                <p class="audio_book_name">${book.name}</p>
                <img src="stars/star${book.rating}.png" class="rating_stars">
                <p class="book_price">$${(book.priceCents / 100).toFixed(2)}</p>
                <button class="play_button" data-id="${book.id}">Play Now</button>
            </div>
            <div class="like_button_audio"><img src="like-button.png"></div>
        </div>
        `;
    });

    document.querySelector('.audio_books_js').innerHTML = audiobooksHTML;

    document.querySelectorAll('.play_button').forEach((button)=>{
        button.addEventListener('click',function(){
            const productId=this.getAttribute('data-id');
            localStorage.setItem('storedAudio',productId);
            window.location.href='viewaudio.html';
        });
    });
}
