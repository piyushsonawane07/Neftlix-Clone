import React, { useState, useEffect } from 'react'
import MovieItem from './MovieItem';

export default function Movies() {

    const [movies, setMovies] = useState([]);

    const updateMovies = async () => {
        const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=b500b7f81758d0ea6ef8e9df46c2718c&language=en-US&page=2";
        let data = await fetch(url);
        let parsedData = await data.json()
        setMovies(parsedData.results);
    }

    useEffect(() => {
        document.title = `Netflix-Clone | Home`
        updateMovies();
        // eslint-disable-next-line
    }, [])

    return (
        <>

            <div className="">
                <div className="row">
                    {movies.map((ele) => {
                        return <div className="col col-md-2 col-sm-12" key={ele.url}>
                            <MovieItem title={ele.original_title} imageUrl={ele.backdrop_path} />
                            </div>
                    })}
                </div>
            </div>

        </>
    )
}
