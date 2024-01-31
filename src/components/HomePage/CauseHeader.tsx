
type CauseType = {
    title: string;
    imgURL: string;
    icon: "charity" | "blood" | "church" | "donation";
    color?: "red" | "orange" | "green" | "blue"
}

export const CauseHeader = ({ title, imgURL, icon, color = "red" }: CauseType) => {
    return (
        <div className="col-6 col-lg-3">
            <div className="icon-item">
                <div className="icon-item__img"><img className="img--layout" src={imgURL} alt="img" />
                    <svg className={`icon icon-item__icon icon--${color}`}>
                        <use xlinkHref={`#${icon}`}></use>
                    </svg>
                </div>
                <div className="icon-item__text">
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}
