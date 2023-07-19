import React from 'react'
import BookehCard from './BookehCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const Bookeh = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1124 },
          items: 6,
          slidesToSlide: 1 ,
          // optional, default to 1.
        },
        desktop2: {
          breakpoint: { max: 1650, min: 1480 },
          items: 5,
          slidesToSlide: 1 ,
          // optional, default to 1.
        },
        desktop3: {
          breakpoint: { max: 1480, min: 1194 },
          items: 4,
          slidesToSlide: 1 ,
          // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1194, min: 864 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        mid_tablet: {
          breakpoint: { max: 750, min: 460 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 660, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      
    let bookeh=[            
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/8-Mixed-Carnations-Bouquet-Small3.2-2.jpg",
          "name": "8 Mixed Carnations Bouquet- Small",
          "name_link": "https://valentinesaga.com/shop/online-8-mixed-carnations-bouquet-flowers/",
          "desc": "CARNATIONS",
          "price": "₹0.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Colourful-12-Mixed-Roses-Bouquet3.2jpg.jpg",
          "name": "Colourful 12 Mixed Roses Bouquet",
          "name_link": "https://valentinesaga.com/shop/colourful-12-mixed-roses-bouquet/",
          "desc": "FLOWERS",
          "price": "₹549.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Gorgeous-Purple-Orchid-Bunch2.2.jpg",
          "name": "Gorgeous Purple Orchid Bunch",
          "name_link": "https://valentinesaga.com/shop/online-gorgeous-purple-orchid-bunch/",
          "desc": "FLOWERS",
          "price": "₹799.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Pink-Marvel-Gerbera-Blossoms-Bouquet4.2.jpg",
          "name": "Pink Marvel Gerbera Blossoms Bouquet",
          "name_link": "https://valentinesaga.com/shop/pink-marvel-gerbera-blossoms-bouquet/",
          "desc": "FLOWERS",
          "price": "₹999.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Pink-Roses-And-Carnations-In-Love-You-Sticker-Vase10.2.jpg",
          "name": "Pink Roses And Carnations In Love You Sticker Vase",
          "name_link": "https://valentinesaga.com/shop/online-pink-roses-and-carnations-in-love-you-sticker-vase/",
          "desc": "CARNATIONS",
          "price": "₹599.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Pink-Oriental-Lily-Bunch4.2.jpg",
          "name": "Pink Oriental Lily Bunch",
          "name_link": "https://valentinesaga.com/shop/online-pink-oriental-lily-bunch/",
          "desc": "FLOWERS",
          "price": "₹899.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Vibrant-Purple-Orchid-Bunch3.2.jpg",
          "name": "Vibrant Purple Orchid Bunch",
          "name_link": "https://valentinesaga.com/shop/online-vibrant-purple-orchid-bunch/",
          "desc": "FLOWERS",
          "price": "₹7,699.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Yellow-Mystique-Gerbera-Vase5.2.jpg",
          "name": "Yellow Mystique Gerbera Vase",
          "name_link": "https://valentinesaga.com/shop/yellow-mystique-gerbera-vase/",
          "desc": "FLOWERS",
          "price": "₹1,049.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Lovely-6-Pink-Roses-Bouquet1.2jpg.jpg",
          "name": "Lovely 6 Pink Roses Bouquet",
          "name_link": "https://valentinesaga.com/shop/lovely-6-pink-roses-bouquet/",
          "desc": "FLOWERS",
          "price": "₹649.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Scintillating-Floral-Mix-Vase1.2.jpg",
          "name": "Scintillating Floral Mix Vase",
          "name_link": "https://valentinesaga.com/shop/online-scintillating-floral-mix-vase/",
          "desc": "FLOWERS",
          "price": "₹399.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/White-Color-Roses-Orchids-Arrangement4.2.jpg",
          "name": "White Color Roses Orchids Arrangement",
          "name_link": "https://valentinesaga.com/shop/white-color-roses-orchids-arrangement/",
          "desc": "FLOWERS",
          "price": "₹999.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/red-rose-box-02.png",
          "name": "Red Rose Black Box",
          "name_link": "https://valentinesaga.com/shop/red-rose-black-box-2/",
          "desc": "FLOWERS",
          "price": "₹1,199.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Mixed-Brilliance-Gerbera-Vase6.2.jpg",
          "name": "Mixed Brilliance Gerbera Vase",
          "name_link": "https://valentinesaga.com/shop/online-mixed-brilliance-gerbera-vase/",
          "desc": "FLOWERS",
          "price": "₹499.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/White-Color-Roses-Orchids-Arrangement2.2.jpg",
          "name": "White Color Roses Orchids Arrangement",
          "name_link": "https://valentinesaga.com/shop/online-white-color-roses-orchids-arrangement/",
          "desc": "FLOWERS",
          "price": "₹849.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Orchids-Lilies-Basket-Arrangement5.2.jpg",
          "name": "Orchids & Lilies Basket Arrangement",
          "name_link": "https://valentinesaga.com/shop/online-orchids-lilies-basket-arrangement/",
          "desc": "FLOWERS",
          "price": "₹1,349.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/8-Yellow-Carnations-Bouquet-Small1.2.jpg",
          "name": "8 Yellow Carnations Bouquet- Small",
          "name_link": "https://valentinesaga.com/shop/online-8-yellow-carnations-bouquet-flowers/",
          "desc": "CARNATIONS",
          "price": "₹1,499.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Flowers-Of-Paradise-Gerberas-Vase7.2.jpg",
          "name": "Flowers Of Paradise Gerberas Vase",
          "name_link": "https://valentinesaga.com/shop/online-flowers-of-paradise-gerberas-vase/",
          "desc": "FLOWERS",
          "price": "₹499.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Bouquet-N-Greeting-Card-4.2.jpg",
          "name": "Bouquet N Greeting Card",
          "name_link": "https://valentinesaga.com/shop/bouquet-n-greeting-card/",
          "desc": "FLOWERS",
          "price": "₹849.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Magic-Of-Love-Floral-Arrangement3.2.jpg",
          "name": "Magic Of Love Floral Arrangement",
          "name_link": "https://valentinesaga.com/shop/online-magic-of-love-floral-arrangement/",
          "desc": "FLOWERS",
          "price": "₹649.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Stunning-Purple-Orchid-Bunch6.2.jpg",
          "name": "Stunning Purple Orchid Bunch",
          "name_link": "https://valentinesaga.com/shop/online-stunning-purple-orchid-bunch/",
          "desc": "FLOWERS",
          "price": "₹2,099.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/8-Mixed-Carnations-Bouquet-Small3.2-2.jpg",
          "name": "8 Mixed Carnations Bouquet- Small",
          "name_link": "https://valentinesaga.com/shop/online-8-mixed-carnations-bouquet-flowers/",
          "desc": "CARNATIONS",
          "price": "₹1,349.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/04/25th-Anniversary-Decora25.2.png",
          "name": "25th Anniversary Decoration",
          "name_link": "https://valentinesaga.com/shop/25th-anniversary-decoration-in-delhi/",
          "desc": "DECORATIONS",
          "price": "₹549.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/b5.2-500x500.jpg",
          "name": "Dazzling Birthday Surprise",
          "name_link": "https://valentinesaga.com/shop/dazzling-birthday-surprise/",
          "desc": "DECORATIONS",
          "price": "₹11,999.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/05/Basic-light-decor143.2.png",
          "name": "Basic Light Décor",
          "name_link": "https://valentinesaga.com/shop/basic-light-decor-with-valentine-saga/",
          "desc": "DECORATIONS",
          "price": "₹10,800.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/b6.4-500x500.jpg",
          "name": "Princess Birthday Pink Decor",
          "name_link": "https://valentinesaga.com/shop/princess-birthday-pink-decor/",
          "desc": "DECORATIONS",
          "price": "₹2,499.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/04/Contempo-Style-Birthday-Decora27.2.png",
          "name": "Contempo Style Birthday Decor",
          "name_link": "https://valentinesaga.com/shop/contempo-style-birthday-decor/",
          "desc": "DECORATIONS",
          "price": "₹2,599.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Colourful-12-Mixed-Roses-Bouquet3.2jpg.jpg",
          "name": "Colourful 12 Mixed Roses Bouquet",
          "name_link": "https://valentinesaga.com/shop/colourful-12-mixed-roses-bouquet/",
          "desc": "FLOWERS",
          "price": "₹2,499.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/04/Happy-Birthday-Cocomelon-Themed-Decor-20.4.png",
          "name": "Happy Birthday Cocomelon Themed Décor",
          "name_link": "https://valentinesaga.com/shop/happy-birthday-cocomelon-themed-decor/",
          "desc": "DECORATIONS",
          "price": "₹54,999.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/04/Candy-Land-Themed-Balloon-Decoration53.2.png",
          "name": "Candy Land Themed Balloon Decoration",
          "name_link": "https://valentinesaga.com/shop/candy-land-themed-balloon-decoration/",
          "desc": "DECORATIONS",
          "price": "₹44,000.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/05/Pink-Blue-Paper-Rosette-Balloon-Decor85.2.png",
          "name": "Pink-Blue Paper Rosette Balloon Decor",
          "name_link": "https://valentinesaga.com/shop/pink-blue-paper-rosette-balloon-decor/",
          "desc": "DECORATIONS",
          "price": "₹799.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/05/Goddy-decor-Decor117.2.png",
          "name": "Goddy Decor Décor",
          "name_link": "https://valentinesaga.com/shop/goddy-decor-decor/",
          "desc": "DECORATIONS",
          "price": "₹14,999.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/05/Basic-round-arch-with-banner-Decor149.2.png",
          "name": "Basic round arch with banner Décor",
          "name_link": "https://valentinesaga.com/shop/basic-round-arch-with-banner-decor/",
          "desc": "DECORATIONS",
          "price": "₹3,149.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Orchids-Lilies-Basket-Arrangement5.2.jpg",
          "name": "Orchids & Lilies Basket Arrangement",
          "name_link": "https://valentinesaga.com/shop/online-orchids-lilies-basket-arrangement/",
          "desc": "FLOWERS",
          "price": "₹18,999.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/04/Elegant-Balloons-Office-Decora32.2.png",
          "name": "Elegant Balloons Office Decora",
          "name_link": "https://valentinesaga.com/shop/elegant-balloons-office-decora/",
          "desc": "DECORATIONS",
          "price": "₹5,499.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/04/Boss-Baby-Stage-Decoration65.2.png",
          "name": "Boss Baby Stage Decoration",
          "name_link": "https://valentinesaga.com/shop/boss-baby-stage-decoration/",
          "desc": "DECORATIONS",
          "price": "₹4,599.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/05/Unicorn-theme-Backdrop-any-kids-theme-96.2.png",
          "name": "Unicorn theme Backdrop ( any kids theme )",
          "name_link": "https://valentinesaga.com/shop/unicorn-theme-backdrop-any-kids-theme/",
          "desc": "DECORATIONS",
          "price": "₹1,499.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/05/Valentines-day-%E2%80%93-7128.2.png",
          "name": "Valentine’s day – 7",
          "name_link": "https://valentinesaga.com/shop/valentines-day-7-decoration/",
          "desc": "DECORATIONS",
          "price": "₹4,299.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/8-Yellow-Carnations-Bouquet-Small1.2.jpg",
          "name": "8 Yellow Carnations Bouquet- Small",
          "name_link": "https://valentinesaga.com/shop/online-8-yellow-carnations-bouquet-flowers/",
          "desc": "CARNATIONS",
          "price": "₹22,949.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Flowers-Of-Paradise-Gerberas-Vase7.2.jpg",
          "name": "Flowers Of Paradise Gerberas Vase",
          "name_link": "https://valentinesaga.com/shop/online-flowers-of-paradise-gerberas-vase/",
          "desc": "FLOWERS",
          "price": "₹20,599.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/04/Terrace-Birthday-Decor-10.2.png",
          "name": "Terrace Birthday Décor",
          "name_link": "https://valentinesaga.com/shop/blue-themed-balloon-decoration-copy/",
          "desc": "DECORATIONS",
          "price": "₹8,499.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/black1.1-500x500.jpg",
          "name": "Black Forest Cake",
          "name_link": "https://valentinesaga.com/shop/best-black-forest-cakes-with-valentine-saga/",
          "desc": "BLACK FOREST CAKES",
          "price": "₹499.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/05/Alluring-Rasmalai-Vanilla-Cake4.2.png",
          "name": "Alluring Rasmalai Vanilla Cake",
          "name_link": "https://valentinesaga.com/shop/buy-online-alluring-rasmalai-vanilla-cake-with-valentine-saga/",
          "desc": "CAKES",
          "price": "₹849.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Zig-Zag-black-forest-cake7.2.jpg",
          "name": "Zig Zag Black Forest Cakes",
          "name_link": "https://valentinesaga.com/shop/best-zig-zag-black-forest-cakes-online-order-now/",
          "desc": "BLACK FOREST CAKES",
          "price": "₹9,999.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Cream-Drop-ChocolateCake5.2.jpg",
          "name": "Cream Drop Chocolate Cakes",
          "name_link": "https://valentinesaga.com/shop/buy-online-cream-drop-chocolate-cakes/",
          "desc": "CAKES",
          "price": "₹449.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/04/Chocolate-Truffle-Heart-Cake8.4.jpg",
          "name": "Chocolate Truffle Heart Cake",
          "name_link": "https://valentinesaga.com/shop/chocolate-truffle-delicious-cake-online-order-now/",
          "desc": "CAKES",
          "price": "₹949.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/05/Heart-Shape-Choco-Truffle-Cake20.2.png",
          "name": "Heart Shape Choco Truffle Cake",
          "name_link": "https://valentinesaga.com/shop/heart-shape-choco-truffle-cake/",
          "desc": "CAKES",
          "price": "₹1,349.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Vanilla-Cake-With-Gulab-Jamun7.2.jpg",
          "name": "Vanilla Cake With Gulab Jamun",
          "name_link": "https://valentinesaga.com/shop/vanilla-cake-with-gulab-jamun/",
          "desc": "CAKES",
          "price": "₹649.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/04/Decorated-Chocolate-Photo-Cake3.2.jpg",
          "name": "Decorated Chocolate Photo Cake",
          "name_link": "https://valentinesaga.com/shop/decorated-chocolate-photo-cake/",
          "desc": "CAKES",
          "price": "₹1,849.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/05/Crunchy-And-Juicy-Fruit-Cake9.2-1.png",
          "name": "Crunchy And Juicy Fruit Cake",
          "name_link": "https://valentinesaga.com/shop/buy-online-crunchy-and-juicy-fruit-cake-with-valentine-saga-2/",
          "desc": "CAKES",
          "price": "₹599.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/pineapple-gems4.2.jpg",
          "name": "Pineapple Gems Cakes",
          "name_link": "https://valentinesaga.com/shop/best-pineapple-gems-cakes-online-order-now/",
          "desc": "CAKES",
          "price": "₹1,099.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Heavenly-Butterscotch-Cake8.2.jpg",
          "name": "Heavenly Butterscotch Cakes",
          "name_link": "https://valentinesaga.com/shop/best-heavenly-butterscotch-cakes-online-order-now/",
          "desc": "BUTTERSCOTCH CAKES",
          "price": "₹749.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/05/Chocolate-Truffle13.2.png",
          "name": "Chocolate Truffle",
          "name_link": "https://valentinesaga.com/shop/chocolate-truffle/",
          "desc": "CAKES",
          "price": "₹2,099.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/05/Tempting-Red-Velvet-Cake-6.2-1.png",
          "name": "Tempting Red Velvet Cake",
          "name_link": "https://valentinesaga.com/shop/buy-online-tempting-red-velvet-cake-with-valentine-saga/",
          "desc": "CAKES",
          "price": "₹899.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Dripping-ChocolateCake2.2.jpg",
          "name": "Dripping Chocolate Cakes",
          "name_link": "https://valentinesaga.com/shop/buy-online-dripping-chocolate-cakes-with-valentine-saga/",
          "desc": "CAKES",
          "price": "₹1,799.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/04/Truffle-Walnut-Cake9.1.jpg",
          "name": "Super Delicious Butterscotch Cake",
          "name_link": "https://valentinesaga.com/shop/super-delicious-butterscotch-cake-with-valentine-saga/",
          "desc": "CAKES",
          "price": "₹749.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/05/Delightful-Chocolate-Truffle-Cake22.2.png",
          "name": "Delightful Chocolate Truffle Cake",
          "name_link": "https://valentinesaga.com/shop/buy-online-delightful-chocolate-truffle-cake-with-valentine-saga/",
          "desc": "CAKES",
          "price": "₹2,249.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Vanilla-Buttercream-Cake3.2.jpg",
          "name": "Vanilla Buttercream Cake",
          "name_link": "https://valentinesaga.com/shop/vanilla-buttercream-cake/",
          "desc": "CAKES",
          "price": "₹1,049.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/04/Round-Butterscotch-Photo-Cake2.2.jpg",
          "name": "Red Velvet Photo Cake",
          "name_link": "https://valentinesaga.com/shop/red-velvet-photo-cake/",
          "desc": "CAKES",
          "price": "₹2,849.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/05/Fruit-Fresca-Cake11.2.png",
          "name": "Fruit Fresca Cake",
          "name_link": "https://valentinesaga.com/shop/buy-online-fruit-fresca-cake-with-valentine-saga/",
          "desc": "CAKES",
          "price": "₹999.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/03/fresh-cream-pineapple5.2.jpg",
          "name": "Fresh & Cream Pineapple Cakes",
          "name_link": "https://valentinesaga.com/shop/fresh-cream-pineapple-cakes-online-order-now/",
          "desc": "CAKES",
          "price": "₹1,999.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2013/08/2night.jpg",
          "name": "Candle Night Dinner",
          "name_link": "https://valentinesaga.com/shop/candle-night-dinner-%e2%9d%a4%ef%b8%8f%f0%9f%95%af%ef%b8%8fwith-valentine-saga/",
          "desc": "CANDLELIGHT DINNER",
          "price": "₹449.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/06/Aesthetic-Indoor-Dining15.2.png",
          "name": "Aesthetic Indoor Dining (Per Couple)",
          "name_link": "https://valentinesaga.com/shop/aesthetic-indoor-dining-per-couple-with-valentinesaga/",
          "desc": "CANDLELIGHT DINNER",
          "price": "₹1,049.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-22-at-6.42.54-PM.jpeg",
          "name": "Poolside Candlelight Dinner at Jaypee Siddharth, 5 Star, New Delhi",
          "name_link": "https://valentinesaga.com/shop/poolside-candlelight-dinner-at-jaypee-siddharth-5-star-new-delhi/",
          "desc": "CANDLELIGHT DINNER",
          "price": "₹699.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/05/Love-affair-Dining10.2.png",
          "name": "Love affair Dining (Per Couple)",
          "name_link": "https://valentinesaga.com/shop/love-affair-dining-candlelight-dinner-in-delhi-valentinesaga/",
          "desc": "CANDLELIGHT DINNER",
          "price": "₹2,099.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/06/Classic-Birthday-Surprise-1.2-1.png",
          "name": "Classic Birthday Surprise At Mumbai",
          "name_link": "https://valentinesaga.com/shop/classic-birthday-surprise-by-mumbai-valentinesaga/",
          "desc": "CANDLELIGHT DINNER",
          "price": "₹599.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/05/Charming-Candlelight-Dinner11.2.png",
          "name": "Charming Candlelight Dinner (Per Couple)",
          "name_link": "https://valentinesaga.com/shop/charming-candlelight-dinner-per-couple/",
          "desc": "CANDLELIGHT DINNER",
          "price": "₹1,149.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/06/Candle-light-Experience-2.2-1.png",
          "name": "Candle Light Experience At Mumbai",
          "name_link": "https://valentinesaga.com/shop/candle-light-experience-at-mumbai-valentinesaga/",
          "desc": "CANDLELIGHT DINNER",
          "price": "₹849.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/06/2-the-fern-house-jpg.png",
          "name": "Unforgettable Stay Package, Lonavala",
          "name_link": "https://valentinesaga.com/shop/unforgettable-stay-package-lonavala-with-valentine-saga/",
          "desc": "CANDLELIGHT DINNER",
          "price": "₹1,699.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/06/Romantic-proposal-surprise-3.2-1.png",
          "name": "Romantic Proposal Surprise At Mumbai",
          "name_link": "https://valentinesaga.com/shop/romantic-proposal-surprise-at-mumbai-valentinesaga/",
          "desc": "CANDLELIGHT DINNER",
          "price": "₹549.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/05/Private-Rooftop-Candlelight-Dinner2.png",
          "name": "Private Rooftop Candlelight Dinner (Per Couple)",
          "name_link": "https://valentinesaga.com/shop/book-online-private-rooftop-candlelight-dinner-in-delhi/",
          "desc": "CANDLELIGHT DINNER",
          "price": "₹1,049.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/06/Fancy-Poolside-Dining13.3.png",
          "name": "Fancy Poolside Dining (Per Couple)",
          "name_link": "https://valentinesaga.com/shop/fancy-poolside-dining-candlelight-dinner-in-delhi-valentinesaga/",
          "desc": "CANDLELIGHT DINNER",
          "price": "₹699.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/06/Romantic-Candle-light-private-4.2.png",
          "name": "Romantic Candle Light Private ( with Birthday / Anniversary / Valentine ) At Mumbai",
          "name_link": "https://valentinesaga.com/shop/romantic-candle-light-private-with-birthday-anniversary-valentine-at-mumbai/",
          "desc": "CANDLELIGHT DINNER",
          "price": "₹2,099.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/05/Romantic-White-Cabana-Setup3.2.png",
          "name": "Romantic White Cabana Setup (Per Couple)",
          "name_link": "https://valentinesaga.com/shop/book-online-romantic-white-cabana-setup-dinner-in-delhi/",
          "desc": "CANDLELIGHT DINNER",
          "price": "₹749.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/06/Aesthetic-Outdoor-Dining14.2.png",
          "name": "Aesthetic Outdoor Dining (Per Couple)",
          "name_link": "https://valentinesaga.com/shop/aesthetic-outdoor-dining-per-couple/",
          "desc": "CANDLELIGHT DINNER",
          "price": "₹1,449.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/06/Candle-Light-Classic-5.1-2.png",
          "name": "Candle Light Classic Lunch / Dinner At Mumbai",
          "name_link": "https://valentinesaga.com/shop/candle-light-classic-lunch-dinner-at-mumbai-valentinesaga/",
          "desc": "CANDLELIGHT DINNER",
          "price": "₹599.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/05/Romantic-Coffee-Date7.2.png",
          "name": "Romantic Coffee Date (Per Couple)",
          "name_link": "https://valentinesaga.com/shop/book-online-romantic-coffee-date-in-delhi/",
          "desc": "CANDLELIGHT DINNER",
          "price": "₹1,799.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/06/Poolside-Dining-by-Umrao-1.2.png",
          "name": "Poolside Dining At Umrao",
          "name_link": "https://valentinesaga.com/shop/poolside-dining-at-umrao-valentinesaga/",
          "desc": "CANDLELIGHT DINNER",
          "price": "₹1,049.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/05/Under-the-Sky-Candlelight-Dinner5.2.png",
          "name": "Under the Sky Candlelight Dinner (Per Couple)",
          "name_link": "https://valentinesaga.com/shop/book-online-under-the-sky-candlelight-dinner-in-delhi/",
          "desc": "CANDLELIGHT DINNER",
          "price": "₹2,949.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/06/valentinesaga-2.png",
          "name": "The Vivan Hotel And Resort ( Standard Room )",
          "name_link": "https://valentinesaga.com/shop/the-vivan-hotel-and-resort-standard-room/",
          "desc": "CANDLELIGHT DINNER",
          "price": "₹799.00"
        },
        {
          "img": "https://valentinesaga.com/wp-content/uploads/2023/06/Private-Gazebo-Dining-by-Umrao-2.2.png",
          "name": "Private Gazebo Dining At Umrao",
          "name_link": "https://valentinesaga.com/shop/private-gazebo-dining-at-umrao/",
          "desc": "CANDLELIGHT DINNER",
          "price": "₹1,599.00"
        },]
    //     "img": "https://valentinesaga.com/wp-content/uploads/2023/03/8-Mixed-Carnations-Bouquet-Small3.2-2.jpg",
    //     "name": "8 Mixed Carnations Bouquet- Small",
    //     "name_link": "https://valentinesaga.com/shop/online-8-mixed-carnations-bouquet-flowers/",
    //     "desc": "CARNATIONS",
    //     "price": "₹0.00"
    //   },
    let heading="ELEGANT FLOWERS AND BOUQUETS"
  return (
    <div>
        <h1 style={{marginBottom:"30px",marginTop:"30px"}}>{heading}</h1>
     <Carousel
    swipeable={false}
    draggable={false}
    // showDots={true}
    // customRightArrow={<CustomRightArrow />}
    responsive={responsive}
    autoPlay={true}
    infinite={true}
    // centerMode={true}
    autoPlaySpeed={3000}
    containerClass="carousel-container"
    >
    {bookeh.map((e)=>{

        return <BookehCard heading={heading} img={e.img} name={e.name} desc={e.desc} price={e.price} />
    })}
  </Carousel>
    </div>
  )
}

export default Bookeh