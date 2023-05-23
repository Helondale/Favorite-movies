let favMovies = [
    {
        title: "Mary Poppins",
        year: 1964,
        rating: 7.8,
        description: "In turn of the century London, a magical nanny employs music and adventure to help two neglected children become closer to their father.",
		director: "Robert Stevenson",
		writer: "P.L. Travers",
		stars: "Julie Andrews, Dick Van Dyke",
		genre: "musical"
    },
    {
        title: "Scream",
        year: 1996,
        rating: 7.4,
        description: "A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game.",
		director: "Wes Craven",
		writer: "Kevin Williamson",
		stars: "Neve Campbell, Courteney Cox",
		genre: "horror"
    },
    {
        title: "Mr. Nobody",
        year: 2009,
        rating: 7.8,
        description: "A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible.",
		director: "Jaco Van Dormael",
		writer: "Jaco Van Dormael",
		stars: "Jared Leto, Sarah Polley",
		genre: "drama"
    },
    {
        title: "The Fast and the Furious: Tokyo Drift",
        year: 2006,
        rating: 6.0,
        description: "A teenager becomes a major competitor in the world of drift racing after moving in with his father in Tokyo to avoid a jail sentence in America.",
		director: "Justin Lin",
		writer: "Chris Morgan",
		stars: "Lucas Black, Sung Kang",
		genre: "action"
    }
];
console.log("The first movie's title is: " +favMovies[0].title);
console.log("The second movie's year is: " +favMovies[1].year);
console.log("The third movie's rating is: " +favMovies[2].rating);
console.log("The fourth movie's description is: " +favMovies[3].description);
console.log("The first movie's director is: " +favMovies[0].director);
console.log("The second movie's writer is: " +favMovies[1].writer);
console.log("The third movie's stars is: " +favMovies[2].stars);
console.log("The fourth movie's genre is: " +favMovies[3].genre);
let averageRating = (favMovies[0].rating + favMovies[1].rating + favMovies[2].rating + favMovies[3].rating) /4;
console.log("The average rating is: " +averageRating);
let averageAge = (2022 - favMovies[0].year + 2022 - favMovies[1].year + 2022 - favMovies[2].year + 2022 - favMovies[3].year) /4;