import book1 from "../images/img/books/book1.jpg";
import book2 from "../images/img/books/book2.jpg";
import book3 from "../images/img/books/book3.webp";
import book4 from "../images/img/books/book4.webp";
import book5 from "../images/img/books/book5.jpeg";
import book6 from "../images/img/books/book6.jpeg";
import book7 from "../images/img/books/book7.jpeg";
import book8 from "../images/img/books/book8.jpeg";
import book9 from "../images/img/books/book9.jpeg";
import book10 from "../images/img/books/book10.jpeg";

const data = [
  {
    id: 1,
    photo: book1,
    title: "Wings Of Fire: The dragon Prophecy",
    year_of_publication: "2012",
    author: "Tui T. Sutherland",
    country_of_author: "New York, USA",
    genre: [
      {
        genreId: 1,
        first: "fantasy",
        second: "adventure",
        third: "fiction",
      },
    ],
    // description:
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor ut leo eu dictum. Aliquam faucibus augue erat, quis vulputate erat egestas in. Duis mollis tincidunt mi, sed interdum orci tristique id. Proin id velit vitae neque pulvinar vulputate at quis quam. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris.",
  },
  {
    id: 2,
    photo: book3,
    title: "Don’t Answer When They Call Your Name",
    year_of_publication: "2023",
    author: "Ukamaka Olisakwe",
    country_of_author: "Nigeria",
    genre: [
      {
        first: "fantasy",
        second: "thriller",
        third: "fiction",
      },
    ],
    description:
      "When the streams suddenly run dry in Ani Mmadu, the people know it is time to atone for a sin that goes back to the very beginning of their world, the consequence of one woman’s rebellion against the all-powerful and unforgiving, jealous god. To avert this catastrophe and for the waters to flow and nourish the farms again, the people must send an Aja—a child chosen by the Oracle—into the Forest of Iniquity, to atone for that great Sin. It falls on young Adanne to save her people this time. But the Ajas sent into the dreaded forest tend never to return. Is Adanne the long-awaited one who will buck the trend and end her people’s suffering?",
  },
  {
    id: 3,
    photo: book2,
    title: "well read black girl",
    year_of_publication: "2018",
    author: "Glory Edim",
    country_of_author: "USA",
    genre: [
      {
        genreId: 1,
        first: "fantasy",
        second: "adventure",
        third: "fiction",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor ut leo eu dictum. Aliquam faucibus augue erat, quis vulputate erat egestas in. Duis mollis tincidunt mi, sed interdum orci tristique id. Proin id velit vitae neque pulvinar vulputate at quis quam. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris.",
  },
  {
    id: 4,
    photo: book4,
    title: "harry potter and the philosopher's stone",
    year_of_publication: "1997",
    author: "J.K.Rowling",
    country_of_author: "United Kingdom",
    genre: [
      {
        genreId: 1,
        first: "fantasy",
        second: "adventure",
        third: "fiction",
      },
    ],
   description:
     "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school and with the help of his friends, Ron Weasley and Hermione Granger, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.",
  },
  {
    id: 5,
    photo: book5,
    title: "The Middle Daughter",
    year_of_publication: "2022",
    author: "Chika Unigwe",
    country_of_author: "Ghana",
    genre: [
      {
        genreId: 1,
        first: "fantasy",
        second: "adventure",
        third: "fiction",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor ut leo eu dictum. Aliquam faucibus augue erat, quis vulputate erat egestas in. Duis mollis tincidunt mi, sed interdum orci tristique id. Proin id velit vitae neque pulvinar vulputate at quis quam. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris.",
  },
  {
    id: 6,
    photo: book6,
    title: "Dream Walker (Bailey Spade Book 1)",
    year_of_publication: "2021",
    author: "Dima Zales, Anna Zaires ",
    country_of_author: "Chicago, USA",
    genre: [
      {
        genreId: 1,
        first: "fantasy",
        second: "adventure",
        third: "fiction",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor ut leo eu dictum. Aliquam faucibus augue erat, quis vulputate erat egestas in. Duis mollis tincidunt mi, sed interdum orci tristique id. Proin id velit vitae neque pulvinar vulputate at quis quam. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris.",
  },
  {
    id: 7,
    photo: book7,
    title: "The Single Wife : 'Liane Moriarty meets Elin Hilderbrand'",
    year_of_publication: "2020",
    author: "Melissa Hill",
    country_of_author: "Australia",
    genre: [
      {
        genreId: 1,
        first: "fantasy",
        second: "adventure",
        third: "fiction",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor ut leo eu dictum. Aliquam faucibus augue erat, quis vulputate erat egestas in. Duis mollis tincidunt mi, sed interdum orci tristique id. Proin id velit vitae neque pulvinar vulputate at quis quam. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris.",
  },
  {
    id: 8,
    photo: book8,
    title: "The Three of Us",
    year_of_publication: "2023",
    author: "Ore Agbaje-Williams",
    country_of_author: "Toronto, Canada",
    genre: [
      {
        genreId: 1,
        first: "fantasy",
        second: "adventure",
        third: "fiction",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor ut leo eu dictum. Aliquam faucibus augue erat, quis vulputate erat egestas in. Duis mollis tincidunt mi, sed interdum orci tristique id. Proin id velit vitae neque pulvinar vulputate at quis quam. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris.",
  },
  {
    id: 9,
    photo: book9,
    title: "After",
    year_of_publication: "2019",
    author: "Anna Todd",
    country_of_author: "Johannesburg, South Africa",
    genre: [
      {
        genreId: 1,
        first: "fantasy",
        second: "adventure",
        third: "fiction",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor ut leo eu dictum. Aliquam faucibus augue erat, quis vulputate erat egestas in. Duis mollis tincidunt mi, sed interdum orci tristique id. Proin id velit vitae neque pulvinar vulputate at quis quam. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris.",
  },
  {
    id: 10,
    photo: book10,
    title: "Bridgerton: The duke and i ",
    year_of_publication: "2000",
    author: "Julia Quinn",
    country_of_author: "England",
    genre: [
      {
        genreId: 1,
        first: "fantasy",
        second: "adventure",
        third: "fiction",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor ut leo eu dictum. Aliquam faucibus augue erat, quis vulputate erat egestas in. Duis mollis tincidunt mi, sed interdum orci tristique id. Proin id velit vitae neque pulvinar vulputate at quis quam. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris.",
  },
  {
    id: 11,
    photo: book9,
    title: "After",
    year_of_publication: "2019",
    author: "Anna Todd",
    country_of_author: "Johannesburg, South Africa",
    genre: [
      {
        genreId: 1,
        first: "fantasy",
        second: "adventure",
        third: "fiction",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor ut leo eu dictum. Aliquam faucibus augue erat, quis vulputate erat egestas in. Duis mollis tincidunt mi, sed interdum orci tristique id. Proin id velit vitae neque pulvinar vulputate at quis quam. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris.",
  },
  {
    id: 12,
    photo: book10,
    title: "Bridgerton: The duke and i ",
    year_of_publication: "2000",
    author: "Julia Quinn",
    country_of_author: "England",
    genre: [
      {
        genreId: 1,
        first: "fantasy",
        second: "adventure",
        third: "fiction",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor ut leo eu dictum. Aliquam faucibus augue erat, quis vulputate erat egestas in. Duis mollis tincidunt mi, sed interdum orci tristique id. Proin id velit vitae neque pulvinar vulputate at quis quam. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris.",
  },
  {
    id: 13,
    photo: book9,
    title: "After",
    year_of_publication: "2019",
    author: "Anna Todd",
    country_of_author: "Johannesburg, South Africa",
    genre: [
      {
        genreId: 1,
        first: "fantasy",
        second: "adventure",
        third: "fiction",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor ut leo eu dictum. Aliquam faucibus augue erat, quis vulputate erat egestas in. Duis mollis tincidunt mi, sed interdum orci tristique id. Proin id velit vitae neque pulvinar vulputate at quis quam. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris.",
  },
  {
    id: 14,
    photo: book10,
    title: "Bridgerton: The duke and i ",
    year_of_publication: "2000",
    author: "Julia Quinn",
    country_of_author: "England",
    genre: [
      {
        genreId: 1,
        first: "fantasy",
        second: "adventure",
        third: "fiction",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor ut leo eu dictum. Aliquam faucibus augue erat, quis vulputate erat egestas in. Duis mollis tincidunt mi, sed interdum orci tristique id. Proin id velit vitae neque pulvinar vulputate at quis quam. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris.",
  },
  {
    id: 15,
    photo: book10,
    title: "Bridgerton: The duke and i ",
    year_of_publication: "2000",
    author: "Julia Quinn",
    country_of_author: "England",
    genre: [
      {
        genreId: 1,
        first: "fantasy",
        second: "adventure",
        third: "fiction",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor ut leo eu dictum. Aliquam faucibus augue erat, quis vulputate erat egestas in. Duis mollis tincidunt mi, sed interdum orci tristique id. Proin id velit vitae neque pulvinar vulputate at quis quam. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris. Vivamus nec eros quis nisi scelerisque porta. In semper nisl vel iaculis sodales. Duis sit amet libero efficitur justo semper tincidunt sit amet a mauris.",
  },
];

export default data;
