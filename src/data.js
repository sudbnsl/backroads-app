import tourImg1 from "./images/tour-1.jpeg";
import tourImg2 from "./images/tour-2.jpeg";
import tourImg3 from "./images/tour-3.jpeg";
import tourImg4 from "./images/tour-4.jpeg";
import tourImg5 from "./images/tour-5.jpeg";
import tourImg6 from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", name: "home" },
  { id: 2, href: "#about", name: "about" },
  { id: 3, href: "#services", name: "services" },
  { id: 4, href: "#tours", name: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tourImg1,
    date: "august 26th, 2023",
    title: "Tibet Adventure",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    image: tourImg2,
    date: "october 11th, 2023",
    title: "Dubai Safari",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Dubai",
    duration: 7,
    price: 3000,
  },
  {
    id: 3,
    image: tourImg3,
    date: "september 15th, 2023",
    title: "Fashion world tour",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Italy",
    duration: 6,
    price: 3500,
  },
  {
    id: 4,
    image: tourImg4,
    date: "december 5th, 2023",
    title: "Taste of Winter",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Canada",
    duration: 10,
    price: 4000,
  },
  {
    id: 5,
    image: tourImg5,
    date: "august 26th, 2023",
    title: "Love of Japan",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Japan",
    duration: 5,
    price: 3300,
  },
  {
    id: 6,
    image: tourImg6,
    date: "august 26th, 2023",
    title: "Incredible India",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "India",
    duration: 15,
    price: 8000,
  },
];
