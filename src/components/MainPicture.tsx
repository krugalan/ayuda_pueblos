import React from 'react'

type MainPictureType = {
    imgURL: string;
}

export const MainPicture = ({ imgURL }: MainPictureType) => {
    return (
        <picture>
            <source srcSet={imgURL} media="(min-width: 992px)" />
            <img className="img--bg" src="../src/assets/img/about.jpg" alt="img" />
        </picture>
    )
}
