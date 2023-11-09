
import { shop } from '../assets/img'
import { PaginationSection } from '../components/EventsPage/PaginationSection'
import { MainPicture } from '../components/MainPicture'
import { FilterByCategory } from '../components/ShopPage/FilterByCategory'
import { ProductList } from '../components/ShopPage/ProductList'

export const ShopPage = () => {


    return (
        <div>
            <div className="page-wrapper">
                <main className="main">
                    <section className="promo-primary promo-primary--shop">
                        <MainPicture imgURL={shop} title='Shop' title2='Solidario' />
                    </section>
                    <section className="section shop">
                        <div className="container">
                            <div className="row align-items-baseline">
                                <div className="col-7 text-right">
                                    <ul className="shop-filter">
                                        <li className="shop-filter__item shop-filter__item--active"><span>Sort by latest</span>
                                            <ul className="shop-filter__sub-list">
                                                <li><button className="shop-filter__item shop-filter__item"><span>Sort by latest</span></button></li>
                                                <li><button className="shop-filter__item shop-filter__item"><span>Sort by populirity</span></button></li>
                                                <li><button className="shop-filter__item shop-filter__item"><span>Sort by price: low to high</span></button></li>
                                                <li><button className="shop-filter__item shop-filter__item">Sort by price: high to low</button></li>
                                                <li><button className="shop-filter__item shop-filter__item">Sort by adding</button></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="aside-holder"><span className="shop__aside-close">
                                        <svg className="icon">
                                            <use xlinkHref="#close"></use>
                                        </svg></span>
                                        <div className="shop-aside">
                                            <FilterByCategory />
                                            <form className="form filter-form" >
                                                <div className="shop-aside__price-block">
                                                    <h6 className="shop-aside__title">Precio</h6>
                                                    <div className="range-slider">
                                                        <input className="range-slider__bar" type="text" name="precio" />
                                                        <div className="range-slider__values">
                                                            <input className="range-slider__input range-slider__min" type="text" name="min-price" value="$50" readOnly />
                                                            <input className="range-slider__input range-slider__max" type="text" name="max-price" value="$900" readOnly />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="shop-aside__checkbox-block">
                                                    <h6 className="shop-aside__title">Filtrar por talle</h6>
                                                    <label className="form__checkbox-label"><span className="form__label-text">XXL</span>
                                                        <input className="form__input-checkbox" type="checkbox" name="size-select" value="Size XXL" checked={true} /><span className="form__checkbox-mask"></span>
                                                    </label>
                                                    <label className="form__checkbox-label"><span className="form__label-text">L</span>
                                                        <input className="form__input-checkbox" type="checkbox" name="size-select" value="Size L" /><span className="form__checkbox-mask"></span>
                                                    </label>
                                                    <label className="form__checkbox-label"><span className="form__label-text">M</span>
                                                        <input className="form__input-checkbox" type="checkbox" name="size-select" value="Size M" /><span className="form__checkbox-mask"></span>
                                                    </label>
                                                    <label className="form__checkbox-label"><span className="form__label-text">S</span>
                                                        <input className="form__input-checkbox" type="checkbox" name="size-select" value="Size S" /><span className="form__checkbox-mask"></span>
                                                    </label>
                                                </div>
                                                <div className="shop-aside__option-block">
                                                    <h6 className="shop-aside__title">Filter by option</h6>
                                                    <label className="form__radio-label"><span className="form__label-text">Option 1</span>
                                                        <input className="form__input-radio" type="radio" name="option-select" value="option-1" checked={true} /><span className="form__radio-mask"></span>
                                                    </label>
                                                    <label className="form__radio-label"><span className="form__label-text">Option 2</span>
                                                        <input className="form__input-radio" type="radio" name="option-select" value="option-2" /><span className="form__radio-mask"></span>
                                                    </label>
                                                    <label className="form__radio-label"><span className="form__label-text">Option 3</span>
                                                        <input className="form__input-radio" type="radio" name="option-select" value="option-3" /><span className="form__radio-mask"></span>
                                                    </label>
                                                </div>
                                                <div className="shop-aside__tags-block">
                                                    <h6 className="shop-aside__title">Tags</h6>
                                                    <div className="tags"><a className="tags__item" href="#">Charity</a><a className="tags__item" href="#">Help</a><a className="tags__item" href="#">Freedom</a><a className="tags__item" href="#">Fundraising</a><a className="tags__item" href="#">Donate</a><a className="tags__item" href="#">Water</a></div>
                                                </div>
                                                <div className="shop-aside__buttons-block">
                                                    <button className="form__submit" type="submit">Filter</button><span className="form__clear">Clear</span>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="recent-posts">
                                            <h6 className="shop-aside__title">Productos destacados</h6>
                                            <div className="recent-posts__item">
                                                <div className="recent-posts__item-img"><img className="img--contain" src="../src/assets/img/shop_7.jpg" alt="img" /></div>
                                                <div className="recent-posts__item-description"><a className="recent-posts__item-link" href="shop-product.html">Awesome Jacket</a><span className="recent-posts__item-value">$32.00 $18.00</span></div>
                                            </div>
                                            <div className="recent-posts__item">
                                                <div className="recent-posts__item-img"><img className="img--contain" src="../src/assets/img/shop_8.jpg" alt="img" /></div>
                                                <div className="recent-posts__item-description"><a className="recent-posts__item-link" href="shop-product.html">Black & White Cap</a><span className="recent-posts__item-value">$18.00</span></div>
                                            </div>
                                            <div className="recent-posts__item">
                                                <div className="recent-posts__item-img"><img className="img--contain" src="../src/assets/img/shop_9.jpg" alt="img" /></div>
                                                <div className="recent-posts__item-description"><a className="recent-posts__item-link" href="shop-product.html">Sports Sport Suit</a><span className="recent-posts__item-value">$32.00</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <ProductList />
                                    <PaginationSection />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <div className="shop__backdrop"></div>
            </div>
        </div>
    )
}
