const key = '73b625c23e946ab575b1295cd2592adf'

const requests = {
    movies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}`,
    tvSeries: `https://api.themoviedb.org/3/discover/tv?api_key=${key}`,
}

export default requests;