import image1 from "./assets/images/1.png";
import image2 from "./assets/images/2.png";
import image3 from "./assets/images/3.png";
import image4 from "./assets/images/4.png";
import image5 from "./assets/images/5.png";
import image6 from "./assets/images/6.png";
import image7 from "./assets/images/7.png";
import image8 from "./assets/images/8.png";
import image9 from "./assets/images/9.png";
import image10 from "./assets/images/10.png";
import image11 from "./assets/images/11.png";
import image12 from "./assets/images/12.png";

export const hollywoodStarts = [
  {
    id: 1,
    imageUrl: image1,
    age: 58,
    gender: 'male',
    name: 'Robert',
    surname: 'Downey Jr.',
    popularity: 12,
  },
  {
    id: 2,
    imageUrl: image2,
    age: 34,
    gender: 'female',
    name: 'Elizabeth',
    surname: 'Olsen',
    popularity: 6,
  },
  {
    id: 3,
    imageUrl: image3,
    age: 40,
    gender: 'male',
    name: 'Chris',
    surname: 'Hemsworth',
    popularity: 11,
  },
  {
    id: 4,
    imageUrl: image4,
    age: 37,
    gender: 'female',
    name: 'Alexandra',
    surname: 'Daddario',
    popularity: 3,
  },
  {
    id: 5,
    imageUrl: image5,
    age: 49,
    gender: 'male',
    name: 'Christian',
    surname: 'Bale',
    popularity: 5,
  },
  {
    id: 6,
    imageUrl: image6,
    age: 38,
    gender: 'female',
    name: 'Scarlett',
    surname: 'Johansson',
    popularity: 10,
  },
  {
    id: 7,
    imageUrl: image7,
    age: 58,
    gender: 'male',
    name: 'Keanu',
    surname: 'Reeves',
    popularity: 9,
  },
  {
    id: 8,
    imageUrl: image8,
    age: 33,
    gender: 'female',
    name: 'Jennifer',
    surname: 'Lawrence',
    popularity: 5,
  },
  {
    id: 9,
    imageUrl: image9,
    age: 54,
    gender: 'male',
    name: 'Hugh',
    surname: 'Jackman',
    popularity: 7,
  },
  {
    id: 10,
    imageUrl: image10,
    age: 35,
    gender: 'female',
    name: 'Ana de',
    surname: 'Armas',
    popularity: 4,
  },
  {
    id: 11,
    imageUrl: image11,
    age: 56,
    gender: 'male',
    name: 'Jason',
    surname: 'Statham',
    popularity: 8,
  },
  {
    id: 12,
    imageUrl: image12,
    age: 26,
    gender: 'female',
    name: 'Chloë',
    surname: 'Grace Moretz',
    popularity: 2,
  },
]

export const socialIcons = [
  {
    id: 1,
    className: 'fa-brands fa-instagram',
    iconHref: 'https://www.instagram.com/milyazkamil',
  },
  {
    id: 2,
    className: 'fa-brands fa-github',
    iconHref: 'https://www.github.com/milyazkamil',
  },
  {
    id: 3,
    className: 'fa-brands fa-linkedin',
    iconHref: 'https://www.linkedin.com/in/milyazkamil',
  },
  {
    id: 4,
    className: 'fa-brands fa-twitter',
    iconHref: 'https://www.twitter.com',
  },
  {
    id: 5,
    className: 'fa-brands fa-facebook',
    iconHref: 'https://www.facebook.com',
  },
];

export const filterButtons = [
  {
    id: 1,
    title: 'Filters',
    handleClick: 'filters',
    viewBox: '0 0 512 512',
    path: 'M442 248.9c-15.7-20.6-37.7-35.9-62.1-43.6 1-6.3 1.4-12.7 1.4-19.1 0-33.7-13-65.4-36.7-89.2C321 73.1 289.5 60 256 60s-65 13.1-88.6 37c-23.7 23.8-36.7 55.5-36.7 89.2 0 6.4.5 12.8 1.4 19.1-24.5 7.7-46.4 23.1-62.1 43.6-17 22.2-26 48.8-26 76.9 0 33.7 13 65.4 36.7 89.2 23.7 23.8 55.2 37 88.6 37 32.6 0 63.2-12.4 86.7-35 23.4 22.6 54.1 35 86.7 35 33.5 0 65-13.1 88.6-37 23.7-23.8 36.7-55.5 36.7-89.2 0-28.1-9-54.7-26-76.9zM256 85.5c55.1 0 100 45.2 100 100.7 0 4.7-.3 9.4-1 14.1-4.1-.4-8.2-.6-12.4-.6-32.6 0-63.2 12.4-86.7 35-23.4-22.6-54.1-35-86.7-35-4.1 0-8.3.2-12.4.6-.6-4.6-1-9.4-1-14.1.2-55.6 45.1-100.7 100.2-100.7zm0 201.4c-1.8 0-3.7-.1-5.5-.2 1.6-3.8 3.4-7.5 5.5-11.1 2.1 3.6 3.9 7.3 5.5 11.1-1.8.2-3.7.2-5.5.2zm-46.6 131.2c-12.7 5.6-26.1 8.4-40.1 8.4-55.1 0-100-45.2-100-100.7 0-22.3 7.1-43.5 20.6-61.2 12.3-16.1 29.4-28.3 48.5-34.6 6.6 17.9 17.3 34.3 31.2 47.6 13.9 13.4 30.9 23.4 49.2 29.1-1 6.3-1.4 12.7-1.4 19.1 0 25.8 7.7 50.6 22.2 71.7-8.8 8.7-19 15.6-30.2 20.6zM225.1 282c-27.6-9-50-29.8-61.3-56.7 1.8-.1 3.7-.2 5.5-.2 13.9 0 27.4 2.8 40.1 8.4 11.2 5 21.4 11.9 30.1 20.6-5.9 8.7-10.8 18-14.4 27.9zm30.9 94c-8.7-15.2-13.3-32.5-13.3-50.2 0-4.7.3-9.4 1-14.1a128.658 128.658 0 0 0 24.8 0c.6 4.6 1 9.4 1 14.1-.2 17.7-4.8 35-13.5 50.2zm46.6-142.5c12.7-5.6 26.1-8.4 40.1-8.4 1.8 0 3.7.1 5.5.2-11.3 26.9-33.7 47.7-61.3 56.7-3.6-9.8-8.5-19.2-14.4-27.9 8.7-8.7 18.9-15.6 30.1-20.6zm40.1 193c-13.9 0-27.4-2.8-40.1-8.4-11.2-5-21.4-11.9-30.1-20.6 14.5-21.1 22.2-45.8 22.2-71.7 0-6.4-.5-12.8-1.4-19.1 18.3-5.7 35.2-15.7 49.2-29.1 13.8-13.3 24.5-29.6 31.2-47.6 19.1 6.3 36.2 18.4 48.5 34.6 13.5 17.7 20.6 38.9 20.6 61.2-.1 55.6-45 100.7-100.1 100.7z',
  },
  {
    id: 2,
    title: 'All',
    handleClick: 'showAll',
    viewBox: '0 0 20 20',
    path: 'M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z',
  },
  {
    id: 3,
    title: 'Man',
    handleClick: 'filterMen',
    viewBox: '0 0 192 512',
    path: 'M96 0c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64S60.654 0 96 0m48 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H48c-26.51 0-48 21.49-48 48v136c0 13.255 10.745 24 24 24h16v136c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V352h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48z',
  },
  {
    id: 4,
    title: 'Woman',
    handleClick: 'filterWomen',
    viewBox: '0 0 256 512',
    path: 'M128 0c35.346 0 64 28.654 64 64s-28.654 64-64 64c-35.346 0-64-28.654-64-64S92.654 0 128 0m119.283 354.179l-48-192A24 24 0 0 0 176 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H80a24 24 0 0 0-23.283 18.179l-48 192C4.935 369.305 16.383 384 32 384h56v104c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V384h56c15.591 0 27.071-14.671 23.283-29.821z',
  },
  {
    id: 5,
    title: 'Younger',
    handleClick: 'filterByAge',
    viewBox: '0 0 24 24',
    path: 'M16.5 7h-2.086l1.293-1.293c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-3.707 3.707 3.707 3.707c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414l-1.293-1.293h2.086c1.379 0 2.5 1.346 2.5 3s-1.346 3-3 3c-.553 0-1 .448-1 1s.447 1 1 1c2.757 0 5-2.243 5-5s-2.019-5-4.5-5zM8.293 12.293c-.391.391-.391 1.023 0 1.414l1.293 1.293h-2.086c-1.379 0-2.5-1.346-2.5-3s1.346-3 3-3c.553 0 1-.448 1-1s-.447-1-1-1c-2.757 0-5 2.243-5 5s2.019 5 4.5 5h2.086l-1.293 1.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l3.707-3.707-3.707-3.707c-.391-.391-1.023-.391-1.414 0z',
  },
  {
    id: 6,
    title: 'A / Z',
    handleClick: 'filterByName',
    viewBox: '0 0 24 24',
    path: 'M4 9h3.5c.736 0 1.393.391 1.851 1.001.325-.604.729-1.163 1.191-1.662-.803-.823-1.866-1.339-3.042-1.339h-3.5c-.553 0-1 .448-1 1s.447 1 1 1zM11.685 12.111c.551-1.657 2.256-3.111 3.649-3.111h1.838l-1.293 1.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l3.707-3.707-3.707-3.707c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l1.293 1.293h-1.838c-2.274 0-4.711 1.967-5.547 4.479l-.472 1.411c-.641 1.926-2.072 3.11-2.815 3.11h-2.5c-.553 0-1 .448-1 1s.447 1 1 1h2.5c1.837 0 3.863-1.925 4.713-4.479l.472-1.41zM15.879 13.293c-.391.391-.391 1.023 0 1.414l1.293 1.293h-2.338c-1.268 0-2.33-.891-2.691-2.108-.256.75-.627 1.499-1.09 2.185.886 1.162 2.243 1.923 3.781 1.923h2.338l-1.293 1.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l3.707-3.707-3.707-3.707c-.391-.391-1.023-.391-1.414 0z',
  },
  {
    id: 7,
    title: 'Popularity',
    handleClick: 'filterByPopularity',
    viewBox: '0 0 16 16',
    path: 'M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z',
  },
];