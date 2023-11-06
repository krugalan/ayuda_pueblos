import React from 'react'

type SliderItemType = {
    img: string;
    date: string;
}

export const SliderItem = ({ img, date }: SliderItemType) => {
    return (
        <div className="carousel-item active">
            <img src={img} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <button className='btn btn-primary mb-3 p-3'>Leer más</button>
                <p>{date}</p>
            </div>
        </div>
    )
}
