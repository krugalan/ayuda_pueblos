import { Link } from "react-router-dom";
import { PathName } from "../../router/types";

export type SliderItemType = {
    id?: number;
    img: string;
    date: string;
    actived?: boolean;
    categories: string[];
    hrefCategory: PathName;
    blogPostTitle: string;
    blogPostDescription: string;
    hrefBlogPost: string;
}


export const SliderItem = ({ img, date, actived = false, categories, blogPostTitle, blogPostDescription, hrefCategory, hrefBlogPost }: SliderItemType) => {
    return (
        <div className={`carousel-item ${(actived) ? 'active' : ''} mb-5 `} >
            <img src={img} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block mb-5">

                <div className="fs-5">
                    {(categories.map((category, index) => (
                        < Link key={index} to={hrefCategory} className="text-decoration-none text-white">
                            {'| ' + category + " | "}
                        </Link>
                    )))
                    }
                    <Link to={hrefBlogPost} className="text-decoration-none text-white">
                        <h2 className="fs-1">
                            {blogPostTitle}</h2>
                    </Link>
                    <p className="fs-6">{blogPostDescription}</p>
                </div>

                <button className='btn btn-primary mb-3 p-3'>Leer más</button>
                <p>{date}</p>
            </div>
        </div >
    )
}
