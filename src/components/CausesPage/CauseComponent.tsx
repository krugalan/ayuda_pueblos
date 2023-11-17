import { Link } from 'react-router-dom';
import { causes_1 } from '../../assets/img';


type CauseComponentType = {
    title: string;
    description: string;
    category: string;
    imgURL?: string;
    financialGoal: number | string;
    pledged: number | string;
    percentage: number | string;

}


export const CauseComponent = ({ title, description, category, imgURL = causes_1, financialGoal, pledged, percentage }: CauseComponentType) => {


    return (
        <div className="col-md-6 col-lg-4">
            <div className="causes-item causes-item--primary">
                <div className="causes-item__body">
                    <div className="causes-item__top">
                        <h6 className="causes-item__title">
                            <Link to={`/${title}`}>{title}</Link>
                        </h6>
                        <p>{description}</p>
                    </div>
                    <div className="causes-item__img">
                        <div className="causes-item__badge" >{category}</div>
                        <img className="img--bg" src={imgURL} alt="img" />
                    </div>
                    <div className="causes-item__lower">
                        <div className="progress-bar">
                            <div className="progress-bar__inner" >
                                <div className="progress-bar__value">{`${percentage}%`}</div>
                            </div>
                        </div>
                        <div className="causes-item__details-holder">
                            <div className="causes-item__details-item"><span>Goal: </span><span>{`${financialGoal}$`}</span></div>
                            <div className="causes-item__details-item text-right"><span>Pledged: </span><span>{`${pledged}$`}</span></div>
                        </div>
                    </div>
                </div>
                <a className="button causes-item__button button--primary" href="#">Ver Más</a>
            </div>
        </div>
    )
}
