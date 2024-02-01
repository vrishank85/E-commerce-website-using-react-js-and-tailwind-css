import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/shoe.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/cover2.png";
import psale2 from "../assets/cover1.png";
import psale3 from "../assets/cover3.png";

import product1 from "../assets/product07.png";
import product2 from "../assets/product02.png";
import product3 from "../assets/product03.png";
import product4 from "../assets/product04.png";
import product5 from "../assets/product05.png";
import product6 from "../assets/product06.png";
import product7 from "../assets/product01.png";
import product8 from "../assets/product012.png";
import product9 from "../assets/product08.png";
import product10 from "../assets/product012.png";
import product11 from "../assets/product011.png";
import product12 from "../assets/product09.png";


import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const heroapi = {
  title: "Play With Hero White Adidas",
  subtitle: "Adaptive Sneakers",
  img: heroimg,
  btntext: "Explore Product",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "Popular Sales",
  items: [
    {
      id: "0p0x1",
      title: "ONCORT TENNIS SHOES",
      text: "MEN Running Shoes",
      rating: "4.9",
      btn: "Buy Now",
      img: psale2,
      price: "200",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Adidas Activeride 2.0",
      text: "MEN Running Shoes",
      rating: "4.5",
      btn: "Buy Now",
      img: psale1,
      price: "200",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "CAMPUS 00S SHOES",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: psale3,
      price: "200",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "HIGHLIGHTS",
  title: "Adidas launches Big Kids Originals",
  text: "Kick's designed to play in! The Kids' Toddler adidas Originals ZX 2K Casual Shoes gives your rookie walker (or runner) the comfort needed to tackle any activity. Whether they're taking a walk or running the playground, these sneakers will keep them looking fresh and feeling comfortable.",
  btn: "Explore More",
  url: "https://www.amazon.in/adidas-Originals-Boost-Casual-Fx8774/dp/B096NPSXHS",
  img: hightlightimg,
};

const sneaker = {
  heading: "FEATURED",
  title: "Adidas Superstar",
  text: "The adidas Superstar is a low-top basketball shoe that first released in 1969. It features a rubber shell toe with a mix of leather and a herring-bone patterned outsole. The shoe was made famous by basketball legend Kareem Abdul-Jabbar and Queens hip-hop group Run DMC. Throughout the years, several different designs, colorways, and collaborations later followed. It is currently one of the most popular shoes to date and is celebrating its official 50th Anniversary throughout 2020.",
  btn: "Explore More",
  url: "https://sneakernews.com/tag/adidas-superstar/",
  img: sneakershoe,
};

const toprateslaes = {
  title: "Top Rated Sales",
  items: [
    {
      id: "0M0x1",
      title: "Adidas Mens Adizero",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product7,
      price: "150",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "GAZELLE 85 SHOES",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product2,
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "ULTRA 4D MARVEL SHOES",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product3,
      price: "150",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "AVERY Running Shoes ",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product4,
      price: "150",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "NMD S1 RYAT Shoes",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product5,
      price: "150",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "ALPHAEDGE + SHOES",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product6,
      price: "150",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "GAZELLE INDOOR YELLOW",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product1,
      price: "150",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "STREETBALL III SHOES",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product9,
      price: "150",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "SWITCH FWD SHOES",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product10,
      price: "150",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "ADIDAS FWD SHOES",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product12,
      price: "150",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "ADIDAS SAMBA",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product11,
      price: "150",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "ULTRA 4D SHOES",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: product8,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};


const story = {
  title: "Top Stories",
  news: [
    {
      title: "The Adidas AE1",
      text: "JAnthony Edwards stays winning. Currently leading his first-place Timberwolves as we head into the midpoint of the 2023-2024 season, the NBA star has made waves in the sneaker world through the recent debut of the adidas AE1, his first signature player model.",
      img: "https://sneakernews.com/wp-content/uploads/2024/01/adidas-ae1-arctic-fusion-core-black-cloud-white-if1860-5.jpg",
      url: "https://sneakernews.com/2023/12/05/adidas-4dfwd-strung-running-shoe/",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Adidas Adizero Adios Pro 3",
      text: "Ahead of spring, the Adios Pro 3 has surfaced in a new style inspired by New York City. In terms of color palette, the shoe is rather simple: the lightweight and breathable textile upper favors an off white color that’s complemented with red-colored 3-Stripes and black inner lining. The sculpted Lightstrike Pro foam underfoot also opts for a clean finish, although an encouraging message is printed onto its lateral side: “To run is to live!”",
      img: "https://sneakernews.com/wp-content/uploads/2023/03/adidas-adios-pro-3-to-run-is-to-live-GW7261-0.jpg",
      time: "41 Mins",
      like: "5/5",
      url: "https://sneakernews.com/2023/03/19/adidas-adios-pro-3-to-run-is-to-live-gw7261/",
      by: "Michael Le",
      btn: "Read More"
    },
    {
      title: "The Adidas Forum",
      text: "In its latest delivery, the silhouette sports a traditional color blocking scheme with tasteful yellowing throughout to create a naturally aged look. A “Victory Blue” makes its way onto the stripes, outsole, and vintage-inspired cut lining on this pair, while white leather encompasses the majority of the base and lacing strap. A yellowed midsole matches the tongue and the exposed sponge up top, treated with blue plastic detailing on the medial side.",
      img: "https://sneakernews.com/wp-content/uploads/2024/01/adidas-forum-84-low-white-victory-blue-ie3205.jpg",
      time: "41 Mins",
      like: "5/5",
      url: "https://sneakernews.com/2024/01/27/adidas-forum-84-low-white-victory-blue-ie3205/",
      by: "Michael Le",
      btn: "Read More"
    },
    {
      title: "The Adidas NMD S1",
      text: "The adidas Nomad series skyrocketed to stardom throughout the 2010s, yet the circa 2015 lifestyle staple has struggled to maintain its allure over the past few years. As the German Sportswear behemoth injects its adidas Originals banner with a clear-minded revitalization alongside the collaborative aid of Jerry Lorenzo’s Fear of God imprint, the adidas NMD S1 has remained rooted in its recent tactically-minded era of constructions.",
      img: "https://sneakernews.com/wp-content/uploads/2023/12/adidas-nmd-s1-core-black-carbon-IE4588-1.jpg",
      time: "7 Months",
      url: "https://sneakernews.com/2023/12/06/adidas-nmd-s1-core-black-carbon-ie4588/",
      like: "5/5",
      by: "Sneaker News",
      btn: "Read More"
    },
    {
      title: "The adidas UltraBOOST 1.0",
      text: "The adidas UltraBOOST 1.0 is no longer the premier footwear proposition from the German sportswear behemoth, but it continues to deliver tried-and-proven comfort and style. To start out 2023, the revolutionary silhouette is set to return in classic “Core Black” and “Cloud White” ensembles.",
      img: "https://sneakernews.com/wp-content/uploads/2022/12/adidas-ultra-boost-1-0-core-black-cloud-white-2023.jpg",
      time: "1 Months",
      url: "https://sneakernews.com/2022/12/16/adidas-ultra-boost-1-0-core-black-cloud-white-2023/",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Puma Announces Breanna",
      text: "For the first time in over a decade, a signature basketball silhouette is being made for one of the WNBA’s best and brightest stars, Olympic Gold Medalist and Seattle Storm superstar Breanna Stewart. Puma Stewie 1 Quiet Fire will be available this Friday.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/puma-stewie-1-quiet-fire-breanna-stewart-release-date-lead.jpg?w=540&h=380&crop=1",
      time: "25 Days",
      url: "https://sneakernews.com/2022/09/13/ -zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Brain Dead's 10th anniversary.",
      text: "The product? A friends and family bowling shoe. This isn’t a completely new department for the Three Stripes Brand as they’ve released bowling footwear back in the 1960s and 1970s, but more recently as part of a collaborative collection with Jeremy Scott. Additionally, Wales Bonner referenced a variation of these bowling shoes as part of their debut runway in 2019.",
      img: "https://sneakernews.com/wp-content/uploads/2024/01/brain-dead-adidas-bowling-shoes-3.jpg",
      url: "https://sneakernews.com/2024/01/17/brain-dead-adidas-bowling-shoes/",
      time: "6 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
    {
      title: "Hello Kitty and Adidas",
      text: "The world of Sanrio is vast and replete with many an iconic character. Few among the family, though, rival the immense influence of Hello Kitty, who’s played mascot for everything from Pringles merchandise to sneaker collaborations.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/hello-kitty-adidas-superstar-GW7168-2.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/08/hello-kitty-adidas-originals-gw7166-gw7167-gw7168/",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
    {
      title: "The Elevated Adidas Gazelle Indoor",
      text: "Adidas is looking to replicate the massive success of the Samba with another shoe in their deep and historic catalog. And while the Gazelle saw its share of the limelight by way of a mass-market reintroduction in 2016 as well as recent collaborations with the likes of Gucci and Sean Wotherspoon, it hasn’t reached the mainstream success as its counterpart has.",
      img: "https://sneakernews.com/wp-content/uploads/2024/01/adidas-gazelle-indoor-cloud-white-collegiate-green-core-black-ie2957-6.jpg",
      url: "https://sneakernews.com/2024/01/20/adidas-gazelle-indoor-cloud-white-collegiate-green-core-black-ie2957/",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
  ],
};


const footerAPI = {
  titles: [ {title: "About ADIDAS"},{title: "Get Help"},{title: "Company"} ],
  links: [
    [
      {link: "News"},
      {link: "Careers"},
      {link: "Investors"},
      {link: "Prupose"},
      {link: "Sustainability"},
    ],
    [
      {link: "Order Status"},
      {link: "Shipping & Delivery"},
      {link: "Payment Options"},
      {link: "Gift Card Balance"},
      {link: "Contact Us"},
      {link: "FAQ"},
      {link: "Blog"},
    ],
    [
      {link: "Gift Cards"},
      {link: "Promotions"},
      {link: "Find A Store"},
      {link: "Signup"},
      {link: "Adidas Jouneral"},
      {link: "Send Us Feeback"},
    ],
  ]
};


export { heroapi, footerAPI, story, sneaker, highlight, toprateslaes, popularsales };
