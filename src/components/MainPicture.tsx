import React from 'react'

type MainPictureType = {
    imgURL: string;
    title: string;
}

export const MainPicture = ({ imgURL, title, }: MainPictureType) => {
    return (<div>

        <picture>
            <source srcSet={imgURL} media="(min-width: 992px)" />
            <img className="img--bg" src={imgURL} alt="img" />
        </picture>
        <div className="promo-primary__description"> <span>{title}</span></div>
        <div className="container">
            <div className="row">
                <div className="col-auto">
                    <div className="align-container">
                        <div className="align-container__item"><span className="promo-primary__pre-title">Ayuda a Pueblos</span>
                            <h1 className="promo-primary__title"><span>{title}</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
