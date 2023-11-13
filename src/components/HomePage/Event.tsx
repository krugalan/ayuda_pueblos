
type EventType = {
    title: string;
    imgURL: string;
    city: string;
    address: string;
    dateStart: string;
    dateFinish: string;
    hourStart: string;
    hourFinish: string;
    year?: string | number;
}

export const Event = ({ title, imgURL, city, address, dateStart, dateFinish, hourStart, hourFinish, year = "2023" }: EventType) => {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="event-item">
                <div className="event-item__img">
                    <img className="img--bg" src={imgURL} alt="img" /></div>
                <div className="event-item__content">
                    <h6 className="event-item__title">
                        <a href="#">{title}</a>
                    </h6>
                    <p><b>{city},</b> {address}</p>
                    <p><b>{dateStart} - {dateFinish},</b> {year}</p>
                    <p><b>{hourStart} - {hourFinish},</b> Todo el día</p>
                </div>
            </div>
        </div>
    )
}
