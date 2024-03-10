export const NF_BG_IMG = "https://w0.peakpx.com/wallpaper/663/269/HD-wallpaper-movie-poster-poster-collage-movie-cg.jpg";
export const NF_LOGO_IMG = "https://i.pinimg.com/474x/da/eb/a2/daeba2a95770ed1a685be74327083470.jpg";
export const NF_USER_IMG = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";
export const API_OPTIONS= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY,
    }
  };
export const VIDEOS_LINK = 'https://api.themoviedb.org/3/movie/';
export const POSTER_LINK = "https://image.tmdb.org/t/p/w500";
export const PLAYING_NOW = 'https://api.themoviedb.org/3/movie/now_playing';
export const POPULAR_MOVIES = 'https://api.themoviedb.org/3/movie/popular';
export const TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated';
export const UPCOMING = 'https://api.themoviedb.org/3/movie/upcoming';
export const DISCOVER = 'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&page=1&sort_by=popularity.desc';

export const SUPPORTED_LANG = [{identifier:"English" , name:"English"},
{identifier:"Hindi" , name:"हिंदी"},
{identifier:"French" , name:"French"}]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;
export const SEARCH_MOVIE = 'https://api.themoviedb.org/3/search/movie?query=';
// export const PROMPT = "Act as a movie recommendation system. If the query enclosed in ``` delimiters is a genuine query asking for movie suggestions, then provide 5 movie names based on query.Each movie name is separated by a comma and presented as an array. Read the query thoroughly, even if the user enters a single word e.g.[Horror] , if it is a movie genere , then return the response in above mentioned manner. If the query is not a genuine query that asks for movie suggestions then return []. ```";
export const PROMPT = `
Generate consistent movie recommendations:

Prompt:Act as a movie recommendation system. If the query enclosed in rtriple backticks delimiters is a genuine query asking for movie suggestions, then provide 5 movie names based on query.Each movie name is separated by a comma and presented as an array. Read the query thoroughly, even if the user enters a single word e.g.[Horror] , if it is a movie genere , then return the response in above mentioned manner. If the query is not a genuine query that asks for movie suggestions then return []. Each recommendation is presented as an array. The list of recommendations is consistent, ensuring that you receive the same set of movie suggestions for the same query each time.

Criteria:
- The prompt identifies genuine movie recommendation queries enclosed in triple backticks.
- If the query is related to movie genres (e.g., [Horror], [Romantic Comedy]), the prompt provides 5 movie names based on the genre.
- If the query is related to specific movie titles (e.g., Inception, The Dark Knight), the prompt returns that movie name.
- If the query contains keywords like "suggest," "recommend," or similar, the prompt analyzes the query for relevant movie genres or themes.
- The list of movie recommendations is generated based on the given query, ensuring consistency.
- Each time you provide the same input query, you'll get the same output response.

Example usage:
1. Query: \`\`\`[Horror]\`\`\`
   Response: ["The Exorcist", "The Shining", "Psycho", "Halloween", "A Nightmare on Elm Street"]

2. Query: \`\`\`Inception\`\`\`
   Response: "Inception"

3. Query: \`\`\`suggest me rom com movies\`\`\`
   Response: ["When Harry Met Sally", "Pretty Woman", "The Proposal", "10 Things I Hate About You", "Crazy Rich Asians"]

4. Query: \`\`\`recommend some action movies\`\`\`
   Response: ["Die Hard", "The Dark Knight", "Mad Max: Fury Road", "Inception", "Terminator 2: Judgment Day"]

5. Query: \`\`\`movies about coding\`\`\`
   Response: ["The Social Network", "Hackers", "WarGames", "Tron", "Sneakers"]

6. Query: \`\`\`movies with Tom Hanks\`\`\`
   Response: ["Forrest Gump", "Cast Away", "Saving Private Ryan", "Apollo 13", "Catch Me If You Can"]


7. Query: \`\`\`Salman Khan\`\`\`
   Response: "Sure, could you please specify a movie genre or theme related to Salman Khan?"

`;