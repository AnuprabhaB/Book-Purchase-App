const notifi = [
    {
        image: "notifi_image/new_arrivals.png",
        title: "New Fantasy Epic",
        message: "🧙‍♂️ Discover the world of Eldoria in The Sorcerer's Quest by R.L. Stevens. Now available! <span class='highlight'>Read Now</span>",
        keyword: ["new", "all"],
        date: "June 21, 11:05pm"
    },
    {
        image: "notifi_image/discounts.png",
        title: "Limited-Time Discount",
        message: "💸 Save 50% on all bestsellers this weekend only! Don't miss out. <span class='highlight'>Shop Now</span>",
        keyword: ["discount", "all"],
        date: "Oct 30, 10:00am"
    },
    {
        image: "notifi_image/events.png",
        title: "Book Signing Event",
        message: "🖊️ Meet Stephen King at the book signing event in NYC on August 20th. <span class='highlight'>Learn More</span>",
        keyword: ["recommend", "all"],
        date: "July 11, 2:00pm"
    },
    {
        image: "notifi_image/top_rated.png",
        title: "Top Rated This Month",
        message: "🏆 Educated by Tara Westover is this month's top-rated book. <span class='highlight'>See Why</span>",
        keyword: ["new", "all"],
        date: "Apr 9,10:15am"
    },
    {
        image: "notifi_image/recommend.png",
        title: "Just For You",
        message: "📚 We think you'll love The Night Circus by Erin Morgenstern. <span class='highlight'>Check it Out</span>",
        keyword: ["new", "all","recommend"],
        date: "March 10,12:00am"
    },
    {
        image: "notifi_image/rated.png",
        title: "Curated Picks for You",
        message: "💖 Check out Where the Crawdads Sing by Delia Owens, a book we think you'll enjoy. <span class='highlight'>Explore Now</span>",
        keyword: ["recommend"],
        date: "March 10,12:00am"
    },
    {
        image: "notifi_image/gifts2.png",
        title: "Your Next Favorite Read",
        message: "🌟 Based on your reading history, we recommend The Night Circus by Erin Morgenstern. <span class='highlight'>Discover More</span>",
        keyword: ["recommend"],
        date: "March 10,12:00am"
    },
    {
        image: "notifi_image/gifts.png",
        title: "One-Day Free Access",
        message: "🆓 Get free access to The Picture of Dorian Gray for 24 hours. <span class='highlight'>Start Reading</span>",
        keyword: ["offers", "all"],
        date: "June 27,12:00am"
    },
    {
        image: "notifi_image/gifts2.png",
        title: "Special Offer on Bestsellers!",
        message: "🎉 Enjoy 20% off on all bestsellers, including The Silent Patient and Where the Crawdads Sing.<span class='highlight'>Shop Now</span>",
        keyword: ["offers", "all"],
        date: "June 27,12:00am"
    },
    {
        image: "notifi_image/orders.png",
        title: "Your Order is on the Way!",
        message: "🚚 The Alchemist by Paulo Coelho is on its way. Track your package for real-time updates. <span class='highlight'>Track Now</span>",
        keyword: ["orders", "all"],
        date: "Jan 05, 12:09pm"
    },
    {
        image: "notifi_image/shipped.png",
        title: "On the Move",
        message: "✈️ Where the Crawdads Sing is on the move. Get ready to enjoy your new book soon!  <span class='highlight'>Track Shipment</span>",
        keyword: ["orders", "all"],
        date: "Jan 05, 12:09pm"
    },{
        image: "notifi_image/order_truck.png",
        title: "Out for Delivery",
        message: "📬 Your order for The Great Gatsby is out for delivery. It should arrive today. <span class='highlight'>Track Now</span>",
        keyword: ["orders", "all"],
        date: "Jan 05, 12:09pm"
    },
    {
        image: "notifi_image/order_delayed.png",
        title: "Order Cancellation",
        message: "🚫 Your order for Brave New World has been cancelled and refunded.  <span class='highlight'>Order Details</span>",
        keyword: ["orders", "all"],
        date: "Jan 05, 12:09pm"
    },
{
    image: "notifi_image/rated.png",
    title: "Exclusive Offer for You",
    message: "💎 Unlock 15% off on Educated by Tara Westover. Use code: READ15 at checkout. <span class='highlight'>Buy Now</span>",
    keyword: ["offers", "all"],
    date: "Jan 05, 12:09pm"
},
    {
        image: "notifi_image/keep_reading.png",
        title: "Keep Reading",
        message: "📖 You've read 50% of The Great Gatsby. Continue reading to see how it ends! <span class='highlight'>Resume Reading</span>",
        keyword: ["progress", "all"],
        date: "Feb 05,03:08am"
    },
    {
        image: "notifi_image/app_updates.png",
        title: "New Features Added",
        message: "🚀 We've added new features to enhance your reading experience. <span class='highlight'>Update</span> the app now!",
        keyword: ["new", "all"],
        date: "Aug 19,5:00pm"
    },
    {
        image: "notifi_image/keep_reading.png",
        title: "Renewal Reminder",
        message: "🔔 Don't forget to renew The Night Circus. Due date: July 10th. <span class='highlight'>Renew Here</span>",
        keyword: ["renewals"],
        date: "Aug 19,5:00pm"
    },
    {
        image: "notifi_image/subscription.png",
        title: "Overdue Renewal Notice",
        message: "⚠️ Your borrowed copy of The Book Thief is overdue for renewal. Renew now to avoid penalties <span class='highlight'>Renew Now</span>",
        keyword: ["renewals"],
        date: "Aug 19,5:00pm"
    },
    {
        image: "notifi_image/discount.png",
        title: "Book Renewal Successful",
        message: "✅ You have successfully renewed The Alchemist. New due date: July 20th.<span class='highlight'>View Details</span>",
        keyword: ["renewals"],
        date: "Aug 19,5:00pm"
    }
];

document.addEventListener("DOMContentLoaded",function() {
   loadNotifications("all");

   document.querySelectorAll('.all_button').forEach((button)=>{
    button.addEventListener('click',()=>{
        const keyword=button.getAttribute('data-keyword');
        loadNotifications(keyword);
    });
   });
});


function loadNotifications(filter){
    let notifiHTML='';
     
    const noti_filter=notifi.filter(noti=>
        noti.keyword.includes(filter)
    );

    noti_filter.forEach((noti)=>{
     notifiHTML+=`
     <div class="notifi_container">
          <div class="label_image">
              <img src="${noti.image}">
          </div>
      <div class="content_container">
        <div class="title_date_container">
          <div class="title">
              ${noti.title}
          </div>
          <div class="date">
              ${noti.date}
          </div>
        </div>
          <div class="message">
              ${noti.message}
          </div>
      </div>
     </div>
     <hr>
     `;
    });

    document.querySelector('.notifi_content_container').innerHTML=notifiHTML;
}

