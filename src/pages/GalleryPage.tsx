
import { typography } from '../assets/img'
import { MainPicture } from '../components/MainPicture'

export const GalleryPage = () => {
    return (
        <div>
            <div className="page-wrapper">
                <main className="main">
                    <section className="promo-primary">
                        <MainPicture title='Galería' imgURL={typography} />
                    </section>
                    <section className="section gallery">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <ul className="filter-panel">
                                        <li className="filter-panel__item filter-panel__item--active" data-filter="*"><span>All Causes</span></li>
                                        <li className="filter-panel__item" data-filter=".category_1"><span>Water Delivery</span></li>
                                        <li className="filter-panel__item" data-filter=".category_2"><span>Medicine</span></li>
                                        <li className="filter-panel__item" data-filter=".category_3"><span>Education</span></li>
                                        <li className="filter-panel__item" data-filter=".category_4"><span>Food</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row no-gutters gallery-masonry">
                            <div className="col-6 col-md-4 gallery-masonry__item category_1"><a className="gallery-masonry__img gallery-masonry__item--height-2" href="../src/assets/img/gallery_1.jpg" data-fancybox="gallery"><img className="img--bg" src="../src/assets/img/gallery_1.jpg" alt="img" />
                                <h6 className="gallery-masonry__description">He Need Your Protection</h6></a>
                            </div>
                            <div className="col-6 col-md-4 gallery-masonry__item category_1"><a className="gallery-masonry__img gallery-masonry__item--height-2" href="../src/assets/img/gallery_2.jpg" data-fancybox="gallery"><img className="img--bg" src="../src/assets/img/gallery_2.jpg" alt="img" />
                                <h6 className="gallery-masonry__description">He Need Your Protection</h6></a>
                            </div>
                            <div className="col-6 col-md-4 gallery-masonry__item category_2"><a className="gallery-masonry__img gallery-masonry__item--height-2" href="../src/assets/img/gallery_3.jpg" data-fancybox="gallery"><img className="img--bg" src="../src/assets/img/gallery_3.jpg" alt="img" />
                                <h6 className="gallery-masonry__description">He Need Your Protection</h6></a>
                            </div>
                            <div className="col-6 col-md-4 gallery-masonry__item category_2"><a className="gallery-masonry__img gallery-masonry__item--height-2" href="../src/assets/img/gallery_4.jpg" data-fancybox="gallery"><img className="img--bg" src="../src/assets/img/gallery_4.jpg" alt="img" />
                                <h6 className="gallery-masonry__description">He Need Your Protection</h6></a>
                            </div>
                            <div className="col-6 col-md-8 gallery-masonry__item category_3"><a className="gallery-masonry__img gallery-masonry__item--height-1" href="../src/assets/img/gallery_5.jpg" data-fancybox="gallery"><img className="img--bg" src="../src/assets/img/gallery_5.jpg" alt="img" />
                                <h6 className="gallery-masonry__description">He Need Your Protection</h6></a>
                            </div>
                            <div className="col-6 col-md-4 gallery-masonry__item category_3"><a className="gallery-masonry__img gallery-masonry__item--height-2" href="../src/assets/img/gallery_6.jpg" data-fancybox="gallery"><img className="img--bg" src="../src/assets/img/gallery_6.jpg" alt="img" />
                                <h6 className="gallery-masonry__description">He Need Your Protection</h6></a>
                            </div>
                            <div className="col-6 col-md-8 gallery-masonry__item category_4"><a className="gallery-masonry__img gallery-masonry__item--height-3" href="../src/assets/img/gallery_7.jpg" data-fancybox="gallery"><img className="img--bg" src="../src/assets/img/gallery_7.jpg" alt="img" />
                                <h6 className="gallery-masonry__description">He Need Your Protection</h6></a>
                            </div>
                            <div className="col-6 col-md-4 gallery-masonry__item category_4"><a className="gallery-masonry__img gallery-masonry__item--height-2" href="../src/assets/img/gallery_8.jpg" data-fancybox="gallery"><img className="img--bg" src="../src/assets/img/gallery_8.jpg" alt="img" />
                                <h6 className="gallery-masonry__description">He Need Your Protection</h6></a>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center"><a className="button gallery__button button--primary" href="#">Ver Más</a></div>
                            </div>
                        </div>
                    </section>

                </main>

            </div>
        </div>
    )
}
