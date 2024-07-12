import {books} from './booksProduct.js';

document.addEventListener('DOMContentLoaded',function(){
    displayAudio();
});

function displayAudio(){
    const selectedId=localStorage.getItem('storedAudio');
    const book=books.find(b=>b.id===selectedId);

    if(book){
      const audioDisplayDetails=`
      <div class="full_container">
        <div class="audio_container">
          <div class="arrow_indicators_audio">
             <a href="index.html">
                 <img src="arrow_up.png" class="arrow_up">
             </a>
                <img src="arrow_down.png" class="arrow_down" id="arrow_down">
          </div>
             <div class="audio_display_image">
               <img src="${book.audio_image}">
             </div>
             <div class="audio_content">
                      <p class="book_name">${book.name}</p>
                      <img src="like-button.png" class="like_button">
                      <img src="stars/star${book.rating}.png" class="stars_image">
                      <p class="book_price">Price: $ ${(book.priceCents/100).toFixed(2)}</p>
                      <div class="buttons">
                          <button class="buy_now">Buy Now</button>

                        <div class="add_to_cart_button_container">
                        <button class="add_to_cart" data-id="${book.id}"> Add to Cart
                         <img src="cart-button.png" class="cart_image">
                        </button></div>
                     </div>
             </div>
        </div>

        <div class="audio_control">
                <input type="range" id="audioRange" value="0" max="100">
                <audio id="audioPlayer" src="Audio_source.mp3"></audio>
                <img src="audio_control.png" class="control_bar">
                <img src="play_button.png" class="pause hidden" id="pauseButton">
                <img src="pause_button.png" class="play" id="playButton">
            </div>

        <div class="audio_content_container">
        <div class="synopsis_audio">
        <p class="head">Synopsis</p>
        <p class="synopsis_para">"Wish" is a heartwarming story about a young girl who discovers a magical book that grants her wishes. As she navigates the ups and downs of using her newfound powers, she learns valuable lessons about friendship and the true meaning of happiness.</p>
       </div>
       <div class="pages">
        <p class="head">Languages</p>
        <p>English, Urdu, Malayalam</p>
        <p class="heading">Pages</p>
        <p>304 pages</p>
         </div>
        </div>
        
      </div>
      `;


      document.querySelector('.audio_display_container').innerHTML=audioDisplayDetails;


      const audioPlayer = document.getElementById('audioPlayer');
        const playButton = document.getElementById('playButton');
        const pauseButton = document.getElementById('pauseButton');
        const audioRange = document.getElementById('audioRange');

        let playing = false;

        playButton.addEventListener('click', () => {
            audioPlayer.play();
            playing = true;
            playButton.classList.add('hidden');
            pauseButton.classList.remove('hidden');
        });

        pauseButton.addEventListener('click', () => {
            audioPlayer.pause();
            playing = false;
            pauseButton.classList.add('hidden');
            playButton.classList.remove('hidden');
        });

        audioPlayer.addEventListener('timeupdate', () => {
            const value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            audioRange.value = value;
        });

        audioRange.addEventListener('input', () => {
            const value = (audioRange.value / 100) * audioPlayer.duration;
            audioPlayer.currentTime = value;
        });

        audioPlayer.addEventListener('ended', () => {
            playing = false;
            pauseButton.classList.add('hidden');
            playButton.classList.remove('hidden');
        });
    } else {
        document.querySelector('.book_display_container').innerHTML = '<p>Audio not Found</p>';
    }

}
