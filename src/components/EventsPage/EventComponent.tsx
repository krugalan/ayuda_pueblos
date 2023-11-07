
export type MonthType = {
    mes: 'Enero' | 'Febrero' | 'Marzo' | 'Abril' | 'Mayo' | 'Junio' | 'Julio' | 'Agosto' | 'Septiembre' | 'Octubre' | 'Noviembre' | 'Diciembre';
}

type EventComponentType = {
    date: string;
    month: 'Enero' | 'Febrero' | 'Marzo' | 'Abril' | 'Mayo' | 'Junio' | 'Julio' | 'Agosto' | 'Septiembre' | 'Octubre' | 'Noviembre' | 'Diciembre';
    year?: string;
    title: string;
    description: string;
    location?: string;
    finishDate?: string;
    finishMonth?: string;
    imgURL: string;

}


export const EventComponent = ({ date, month, year = '2023', title, finishDate, finishMonth, description, location = 'Argentina, Buenos Aires', imgURL }: EventComponentType) => {

    const shortMonth = month[0] + month[1] + month[2];

    return (
        <div className="col-xl-10 offset-xl-1">
            <div className="upcoming-item">
                <div className="upcoming-item__date"><span>{date}</span><span>{shortMonth}, {year}</span></div>
                <div className="upcoming-item__body">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-xl-4">
                            <div className="upcoming-item__img"><img className="img--bg" src={imgURL} alt="img" /></div>
                        </div>
                        <div className="col-lg-7 col-xl-8">
                            <div className="upcoming-item__description">
                                <h6 className="upcoming-item__title"><a href="event-details.html">{title}</a></h6>
                                <p>{description}</p>
                                <div className="upcoming-item__details">
                                    <p>
                                        <svg className="icon">
                                            <use xlinkHref="#clock"></use>
                                        </svg> <strong>{month} {date}</strong>, 10:00 AM - <strong>{finishMonth}{finishDate}</strong> 18:00 PM
                                    </p>
                                    {(location) &&
                                        <p>
                                            <svg className="icon">
                                                <use xlinkHref="#placeholder"></use>
                                            </svg> {location}
                                        </p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
