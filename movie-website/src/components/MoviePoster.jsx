import React from 'react'

export default function Movieposter() {

   {/* movie poster */}
    const movie =  [
        {
            Title: "Star Wars: Episode VII - The Force Awakens",
            Year: "2015",
            imdbID: "tt2488496",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
        },
        {
            Title: "Avatar: The Way of Water",
            Year: "2022",
            imdbID: "tt1630029",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg"
        },
        {
            Title: "Avengers: Endgame",
            Year: "2019",
            imdbID: "tt4154796",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
        },
        {
            Title: "Deadpool & Wolverine",
            Year: "2024",
            imdbID: "tt6263850",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
            Title: "John Wick: Chapter 3 - Parabellum",
            Year: "2019",
            imdbID: "tt6146586",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BYjdlNWFlZjEtM2U0NS00ZWU5LTk1M2EtZmQxNWFiZjk0MGM5XkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
            Title: "Jumanji: Welcome to the Jungle",
            Year: "2017",
            imdbID: "tt2283362",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          Title: "Thor: Love and Thunder",
          Year: "2022",
          imdbID: "tt10648342",
          Type: "movie",
          Poster: "https://m.media-amazon.com/images/M/MV5BZjRiMDhiZjQtNjk5Yi00ZDcwLTkyYTEtMDc1NjdmNjFhNGIzXkEyXkFqcGc@._V1_SX300.jpg"
      },
      {
        Title: "Mission: Impossible - Dead Reckoning Part One",
        Year: "2023",
        imdbID: "tt9603212",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BN2U4OTdmM2QtZTkxYy00ZmQyLTg2N2UtMDdmMGJmNDhlZDU1XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      Title: "The Simpsons Movie",
      Year: "2007",
      imdbID: "tt0462538",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMzIxN2IzOGItOTcyZi00MTkzLWE4ZjktZTdlOWFiYWE4NzlmXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    Title: "Captain America: The Winter Soldier",
    Year: "2014",
    imdbID: "tt1843866",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNWY1NjFmNDItZDhmOC00NjI1LWE0ZDItMTM0MjBjZThiOTQ2XkEyXkFqcGc@._V1_SX300.jpg"
},
    ]
    {/* movie Poster container */}
  return (
    <div className="mt-8 grid gap-y-10 gap-x-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 group">
    {movie.map((movie, index) => (
      <div key={index} className="flex flex-col items-center image-container">
        <img
          src={movie.Poster}
          alt='movies'
          className="w-52 h-auto rounded-lg shadow-lg cursor-pointer transition duration-300 hover:scale-90"
        />
        <h2 className='text-white mt-2 text-center'>{movie.Title}</h2>
      </div>
    ))}
  </div>
  )
}
