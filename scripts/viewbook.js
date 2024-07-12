import {books} from './booksProduct.js';
import { addToCart } from './cart.js';

document.addEventListener('DOMContentLoaded',function(){
  displayBookDetails();
  displayOtherWorks();
  scrollToOtherWorks();
});

function displayBookDetails(){
    const bookId=localStorage.getItem('selectedBook');
    const book = books.find(b => b.id === bookId);

    if(book){

        const bookDisplayDetails =`
        <div class="display_book_full_container">
        <div class="arrow_indicators">
        <a href="index.html">
        <img src="arrow_up.png" class="arrow_up">
        </a>
        <img src="arrow_down.png" class="arrow_down" id="arrow_down">
       </div>
        <div class="book_display_image">
        <img src="${book.image}">
        </div>
        <div class="book_display_details">
        <p class="book_name">${book.name}</p>
        <img src="like-button.png" class="like_button">
        <p class="author_name">${book.author}</p>
        <img src="stars/star${book.rating}.png" class="stars_image">
        <p class="book_price">Price: $ ${(book.priceCents/100).toFixed(2)}</p>
        <div class="buttons">
        <button class="buy_now">Buy Now</button>

        <div class="add_to_cart_button_container">
        <button class="add_to_cart" data-id="${book.id}"> Add to Cart
          <img src="cart-button.png" class="cart_image">
        </button></div>
        </div>

        <div class="details_box_container">
        <button class="start_reading_button" data-id="${book.id}"> 
         Start Reading 
           <img src="arrow-up-right.png" class="arrow_start_reading">
        </button>
        <div class="buttons_container">
        <img src="save.png" class="save_button">
        <img src="share.png" class="share_button">
        <img src="download.png" class="download_button">
        </div>
        </div>
        </div>
        </div>

        <div class="box_content_container">
    <div class="synopsis">
        <p class="heading">Synopsis</p>
        <p class="synopsis_para">"Wish" is a heartwarming story about a young girl who discovers a magical book that grants her wishes. As she navigates the ups and downs of using her newfound powers, she learns valuable lessons about friendship and the true meaning of happiness.</p>
        
    </div>
    <div class="pages_and_lang">
        <p class="heading">Languages</p>
        <p>English, Urdu, Malayalam</p>
        <p class="heading">Pages</p>
        <p>304 pages</p>
    </div>
    <div class="audio_book_container">
        <p class="heading">Audio & E-book Available</p>
      <div class="audio_book_container_content">
        <img src="${book.audio_image}" class="audio_image">
        <div class="audio_content">
            <p>Duration: 25 mins</p>
            <p>Languages: English, Tamil, Urdu</p>
            <button class="hear_audio_button">Hear Audio Now
                <img src="arrow-left.png" class="left_arrow">
            </button>
        </div>
        </div>
    </div>
    <div class="e_book_container">
        <img src="${book.image}" class="e_book_image">
        <div>
            <p>Pages: 304 pages</p>
            <p>Languages: English, Tamil, Urdu</p>
            <button class="read_now_button">Read Now
                <img src="arrow-left.png" class="left_arrow">
            </button>
        </div>
    </div>
</div>

        <div class="author_container">
        <p class="heading">Know About The Author</p>
        <div class="author_container_content">
        
        <img src="${book.author_image}">
        <div class="author_content">
        <p class="author_details_name">${book.author}</p>
        <p>"Wish" is a heartwarming story about a young girl who discovers a magical book that grants her wishes. As she navigates the ups and downs of using.</p></div>
        </div>
        </div>
        `  
        document.querySelector('.book_display_container').innerHTML=bookDisplayDetails;
    }
    else{
        document.querySelector('.book_display_container').innerHTML='<p>Book not Found</p>';
    }

    document.querySelectorAll('.start_reading_button').forEach((button)=>{
        button.addEventListener('click',function(){
            bookIndexDisplay(this.dataset.id);
        });
    });

    document.querySelectorAll('.add_to_cart').forEach((button)=>{
        button.addEventListener('click',function(){
            addToCart(this.dataset.id);
            
            const originalText = 'Add to Cart';
            const originalImage = 'cart-button.png';

            // Change button text and image
            this.innerHTML = 'Added to Cart <img src="checkmark.png" class="cart_image">';
            this.classList.add('added_to_cart'); 
            this.disabled = true;

            // Revert changes after 5 seconds
            setTimeout(() => {
                this.innerHTML = `${originalText} <img src="${originalImage}" class="cart_image">`;
                this.classList.remove('added_to_cart'); 
                this.disabled = false;
            }, 1000);
        });
    });
    
}

function bookIndexDisplay(bookid){
    console.log(bookid);
    localStorage.setItem('storedBookId',bookid);
    window.location.href='bookIndex.html';
}

function displayOtherWorks(){
    let otherWorksAuthor='';
    const start=8;
    const end=14;
    const splicedBook=books.splice(start,6);

    splicedBook.forEach((book) => {
     otherWorksAuthor+=`
     <div class="other_work_book_container">
     <img src="${book.image}">
     <div class="other_book_content">
     <p>${book.name}</p>
     <img src="stars/star${book.rating}.png">
     <button class="view_button">View Now</button>
     </div>
     </div>
     `
    });

    document.querySelector('.author_works_container').innerHTML=otherWorksAuthor;
}

function scrollToOtherWorks() {
    const arrowDown = document.getElementById('arrow_down');
    if (arrowDown) {
        arrowDown.addEventListener('click', function() {
            const otherWorksSection = document.getElementById('other_works_id');
            if (otherWorksSection) {
                otherWorksSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}