const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    year: 2010,
    rating: 8.8,
    duration: "2h 28m",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    featured: true
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    rating: 9.0,
    duration: "2h 32m",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    id: 3,
    title: "Spider-Man: Into the Spider-Verse",
    genre: "Animation",
    year: 2018,
    rating: 8.4,
    duration: "1h 57m",
    director: "Bob Persichetti",
    cast: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
    description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg"
  },
  {
    id: 4,
    title: "Interstellar",
    genre: "Sci-Fi",
    year: 2014,
    rating: 8.7,
    duration: "2h 49m",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QlsUUHXjNpeMac85AXt25X.jpg"
  },
  {
    id: 5,
    title: "Parasite",
    genre: "Thriller",
    year: 2019,
    rating: 8.5,
    duration: "2h 12m",
    director: "Bong Joon Ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
  },
  {
    id: 6,
    title: "The Matrix",
    genre: "Sci-Fi",
    year: 1999,
    rating: 8.7,
    duration: "2h 16m",
    director: "Lana Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  },
  {
    id: 7,
    title: "Avengers: Endgame",
    genre: "Action",
    year: 2019,
    rating: 8.4,
    duration: "3h 01m",
    director: "Anthony Russo",
    cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
    description: "After the devastating events of Infinity War, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
  },
  {
    id: 8,
    title: "Spirited Away",
    genre: "Animation",
    year: 2001,
    rating: 8.6,
    duration: "2h 05m",
    director: "Hayao Miyazaki",
    cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
    description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkBg8kX0.jpg"
  },
  {
    id: 9,
    title: "Everything Everywhere All at Once",
    genre: "Adventure",
    year: 2022,
    rating: 7.8,
    duration: "2h 19m",
    director: "Daniel Kwan",
    cast: ["Michelle Yeoh", "Ke Huy Quan", "Stephanie Hsu"],
    description: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
    poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVY5RW96phUee3K.jpg"
  },
  {
    id: 10,
    title: "Gladiator",
    genre: "Action",
    year: 2000,
    rating: 8.5,
    duration: "2h 35m",
    director: "Ridley Scott",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
  },
  {
    id: 11,
    title: "La La Land",
    genre: "Romance",
    year: 2016,
    rating: 8.0,
    duration: "2h 08m",
    director: "Damien Chazelle",
    cast: ["Ryan Gosling", "Emma Stone", "John Legend"],
    description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fswlPNPh4J.jpg"
  },
  {
    id: 12,
    title: "Jurassic Park",
    genre: "Adventure",
    year: 1993,
    rating: 8.2,
    duration: "2h 07m",
    director: "Steven Spielberg",
    cast: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
    description: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    poster: "https://image.tmdb.org/t/p/w500/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg"
  }
];

export default movies;