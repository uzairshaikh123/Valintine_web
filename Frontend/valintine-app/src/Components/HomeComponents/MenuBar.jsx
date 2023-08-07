import React from 'react'
import './menubar.css'
const MenuBar = () => {
    const handlehover = (e) => {
        // alert("hello")
        document.querySelector(".dropdown").classList.add("active-dropdown")
    }
    const handleleave = (e) => {
        // alert("leave")
        document.querySelector(".dropdown").classList.remove("active-dropdown")
    }
    let titles = [
        {
          image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Menu/cake_icon_1_-_Copy-removebg-preview.png",
          title: "Kids Celebrations",
          subtitles: [
            "Kids Birthday Decoration",
            "Welcome Baby Decorations",
            "Baby Shower Decorations",
            "Birthday Activities",
            "Naming Ceremony Decorations",
            "Themed Birthday Cakes",
            "1st Birthday Decorations",
            "Balloon Bouquets",
            "Annaprashan Decorations",
          ],
        },
        {
            image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Slider_images/cd.webp",
          title: "Candlelight Dinners",
          subtitles: [
            "Candlelight Dinners in NCR",
            "Private Candlelight Dinners",
            "Lunch Specials",
            "Private Movie &amp; Dinners",
            "Cabana Dining Experience",
            "Dining at 5 Star Properties",
            "Outdoor Candlelight Dining",
            "Poolside Candlelight Dinners",
            "Pocket Friendly Candlelight Dinners",
          ],
        },
        {
            image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Menu/gifts_icon_1-removebg-preview.png",
          title: "Decorations",
          subtitles: [
            "Balloon Decorations",
            "Welcome Baby Decorations",
            "Baby Shower Decorations",
            "Birthday Decorations",
            "Naming Ceremony Decorations",
            "Car Boot Decorations",
            "1st Birthday Decorations",
            "Balloon Bouquets",
            "Annaprashan Decorations",
            "First Night Decorations",
            "Bachelorette Decorations",
            "Ganesh Chaturthi Decorations"
          ],
        },
        {image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Menu/balloon_decoration-removebg-preview-1.png", title: "Anniversary Celebrations", subtitles: [
            "Balloon Decorations",
            "Welcome Baby Decorations",
            "Baby Shower Decorations",
            "Birthday Decorations",
            "Naming Ceremony Decorations",
            "Car Boot Decorations",
            "1st Birthday Decorations",
            "Balloon Bouquets",
            "Annaprashan Decorations",
            "First Night Decorations",
            "Bachelorette Decorations",
            "Ganesh Chaturthi Decorations"
          ],},
        { image:"https://cdn.togetherv.com/party-decoration-icon_1679913296.webp",title: "Birthday Surprises" ,subtitles: [
            "Balloon Decorations",
            "Welcome Baby Decorations",
            "Baby Shower Decorations",
            "Birthday Decorations",
            "Naming Ceremony Decorations",
            "Car Boot Decorations",
            "1st Birthday Decorations",
            "Balloon Bouquets",
            "Annaprashan Decorations",
            "First Night Decorations",
            "Bachelorette Decorations",
            "Ganesh Chaturthi Decorations"
          ],},
        { image: "https://cdn.togetherv.com/romantic-stays-icon_1682410730.webp",title: "Room Decorations" ,subtitles: [
            "Balloon Decorations",
            "Welcome Baby Decorations",
            "Baby Shower Decorations",
            "Birthday Decorations",
            "Naming Ceremony Decorations",
            "Car Boot Decorations",
            "1st Birthday Decorations",
            "Balloon Bouquets",
            "Annaprashan Decorations",
            "First Night Decorations",
            "Bachelorette Decorations",
            "Ganesh Chaturthi Decorations"
          ],},
        { image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Menu/cake_icon_1_-_Copy-removebg-preview.png",title: "Gifts & Surprises",subtitles: [
            "Balloon Decorations",
            "Welcome Baby Decorations",
            "Baby Shower Decorations",
            "Birthday Decorations",
            "Naming Ceremony Decorations",
            "Car Boot Decorations",
            "1st Birthday Decorations",
            "Balloon Bouquets",
            "Annaprashan Decorations",
            "First Night Decorations",
            "Bachelorette Decorations",
            "Ganesh Chaturthi Decorations"
          ], },
        { image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Menu/cake_icon_1_-_Copy-removebg-preview.png",title: "Occasions",subtitles: [
            "Balloon Decorations",
            "Welcome Baby Decorations",
            "Baby Shower Decorations",
            "Birthday Decorations",
            "Naming Ceremony Decorations",
            "Car Boot Decorations",
            "1st Birthday Decorations",
            "Balloon Bouquets",
            "Annaprashan Decorations",
            "First Night Decorations",
            "Bachelorette Decorations",
            "Ganesh Chaturthi Decorations"
          ], },
      ];
    const category = ['party', 'party']

    return (
       
        <div class="page-wrapper">
        <header class="page-header">
            <div class="header-container">
                <p>
                    CSS fullwidth drop down menu. Each submenu stays underneath it's parent item.
                    <a href="https://stackoverflow.com/questions/17261421/full-width-css-dropdown-menu">Solution (thanks to Ionică Bizău)</a>
                </p>
            </div>	
            <nav>
                <ul>
                    <li>
                        <a href="#">Menu 1</a>
                        <ul class="sub-nav">
                            <li><a href="#">Sub menu1</a></li>
                            <li><a href="#">Sub menu2</a></li>
                            <li><a href="#">Sub menu3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Menu 2</a>
                        <ul class="sub-nav">
                            <li><a href="#">Sub menu1</a></li>
                            <li><a href="#">Sub menu2</a></li>
                            <li><a href="#">Sub menu3</a></li>
                            <li><a href="#">Sub menu4</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Menu 3</a>
                    </li>
                    <li>
                        <a href="#">Menu 4</a>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <section>
            </section>	
        </main>
    </div>
    )
}

export default MenuBar

