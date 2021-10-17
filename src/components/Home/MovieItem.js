import React from 'react'

export default function MovieItem(props) {
    let { title, imageUrl } = props;
    return (
        <>
            <div className="card m-3">
                <img src={`https://image.tmdb.org/t/p/w300/${imageUrl}`} className="card-img-top" alt="..." />
                <h6 className="card-title fs-5">{title}</h6>
            </div>
        </>
    )
}
