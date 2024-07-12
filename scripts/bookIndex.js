import {books} from './booksProduct.js';

document.addEventListener("DOMContentLoaded",function(){
    bookIndexDisplay();
});

function bookIndexDisplay(){
    const bookid=localStorage.getItem('storedBookId');
    console.log(bookid);
    const book=books.find(b => b.id == bookid);

    if(book){
        const bookIndexContent=`
        <div class="book__display_name">
        ${book.name}
        </div>
        <div class="book_content">
        <div class="book_desc_img">
        <img src="${book.book_description_image}"></div>
        <div class="book_one_liner">
        <p class="author_title"> By Author <p>
        <span class="author"> ~ ${book.author}<span>
        <p class="one_liner">“A young girl named Asha, with the help of a magical creature, embarks on a journey to save her kingdom from despair and discover the hidden power within herself”
        </p></div>
        </div>
        `;

        document.querySelector('.index_display_container').innerHTML=bookIndexContent;
    }
    else{
        document.querySelector('.index_display_container').innerHTML='<p>Book not found</p>';
    }
    
}