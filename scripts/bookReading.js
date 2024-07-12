
document.addEventListener("DOMContentLoaded",function(){
    displayBookPages();
});

function displayBookPages(){
    const urlParam=new URLSearchParams(window.location.search);
    const chapterName=urlParam.get('chapter')||'unknown chapter';

    const bookpageContent=`
    <a href="bookIndex.html">
    <div class="chevron"> <img src="chevron-left.png"></div></a>
    <div class="chapter_name">${chapterName}
    </div>
    <div class="book_para1">
    Asha, a spirited and determined teenager, lived with her grandmother in a quaint cottage on the outskirts of Rosas. Her days were spent helping her grandmother tend to their garden and caring for the animals, but her nights were reserved for dreaming of a brighter future for her beloved kingdom. Asha possessed a unique gift of empathy, able to feel the unspoken wishes and desires of those around her. She longed to bring hope and joy to her fellow citizens, to lift the veil of subtle sadness that seemed to hang over Rosas. As she wandered the fields at sunset, she often gazed up at the stars, whispering her dreams into the night sky, wishing for a way to make a difference. Little did she know, her heartfelt wish was about to set in motion a magical journey that would change the fate of Rosas forever.
    </div>
    <div class="book_para2">
    In the heart of a lush valley surrounded by towering mountains and flowing rivers, the Kingdom of Rosas stood as a beacon of peace and prosperity. Its cobblestone streets were lined with vibrant flowers, and the air was filled with the melodious songs of birds. The people of Rosas lived in harmony, their days filled with laughter and their nights illuminated by the soft glow of lanterns. At the center of this idyllic kingdom was the grand castle, home to the benevolent Queen Luna, who ruled with kindness and wisdom. Despite the kingdom's outward beauty and tranquility, a quiet sense of longing and unfulfilled dreams lingered in the hearts of many, especially in that of a young girl named Asha.
    </div>
    <div class="book_para2">
    In the heart of a lush valley surrounded by towering mountains and flowing rivers, the Kingdom of Rosas stood as a beacon of peace and prosperity. Its cobblestone streets were lined with vibrant flowers, and the air was filled with the melodious songs of birds. The people of Rosas lived in harmony, their days filled with laughter and their nights illuminated by the soft glow of lanterns. At the center of this idyllic kingdom was the grand castle, home to the benevolent Queen Luna, who ruled with kindness and wisdom. Despite the kingdom's outward beauty and tranquility, a quiet sense of longing and unfulfilled dreams lingered in the hearts of many, especially in that of a young girl named Asha.
    </div>
    `;

    document.querySelector('.Book_pages_display_container').innerHTML=bookpageContent;
}