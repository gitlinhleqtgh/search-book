import React from 'react';

const BookCard = (props) => {
    return (
        <div className="card ">
            <div className="card-header card-header-1">{props.title}</div>
            <div className="card-body">
                <div className="product-img">
                    <img src={props.image} className="mb-3"
                        style={{ maxHeight: "100%", maxWidth: "60%" }} />
                </div>

                <a className="stretched-link" href={props.previewLink}>
                    <p className="card-p  mt-2">Author: {props.author}</p>
                    <p className="card-p black-10">Published Date: {props.published === '0000' ? 'Not available' : props.published.substring(0, 4)}</p>
                    <p className="black-9">Publisher: {props.publisher}</p>
                </a>
            </div>
        </div>
    )
}
export default BookCard;
